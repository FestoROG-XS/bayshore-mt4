import { Application } from "express";
import { Module } from "module";

// Import Proto
import * as wm from "../wmmt/v388.proto";
import * as wmsrv from "../wmmt/service.proto";

// Import Util
import * as common from "../util/common";

// Implement DB
import { PrismaClient } from "@prisma/client";
import { FAULT } from "../util/log";
import { getPlace, getPlaces, JIANGMEN, REACT } from "../util/general";
const db = new PrismaClient();

export default class StartupModule extends Module {
    register(app: Application): void {
        
        app.post('/method/register_system_info', async(req,res) => {

            try {
                const events = await db.events.findFirst();

                let resp = wm.v388.protobuf.RegisterSystemInfoResponse.encode({
                    error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                    regionId: 10,
                    placeId: 'CHN048001',
                    pajeroDiscloseAt: common.dt2ts(events!.pajeroDiscloseAt),
                    carCampaignStartAt: common.dt2ts(events!.carCampaignStartAt),
                    carCampaignEndAt: common.dt2ts(events!.carCampaignEndAt),
                    teamSuspensionAnnouncementStartAt: common.dt2ts(events!.teamSuspensionAnnouncementStartAt),
                    teamSuspensionStartAt: common.dt2ts(events!.teamSuspensionStartAt),
                    successionCloseAnnouncementEndAt: common.dt2ts(events!.successionCloseAnnouncementEndAt),
                    successionCloseAnnouncementStartAt: common.dt2ts(events!.successionCloseAnnouncementStartAt),
                    successionCloseAt: common.dt2ts(events!.successionCloseAt),
                    faceRecognitionPermitted: false,

                    // Temple
                    latestCompetitionId: 1,
                    // competitionSchedule: wm.v388.protobuf.GhostCompetitionSchedule.create({
                    //     competitionId: 1,
                    //     qualifyingPeriodStartAt: common.dt2ts(new Date('2024-01-01T06:00:00')),
                    //     qualifyingPeriodCloseAt: common.dt2ts(new Date('2024-01-10T06:00:00')),
                    //     competitionStartAt: common.dt2ts(new Date('2024-01-10T08:00:00')),
                    //     competitionCloseAt: common.dt2ts(new Date('2024-01-20T08:00:00')),
                    //     competitionEndAt: common.dt2ts(new Date('2024-01-25T10:00:00')),
                    //     lengthOfPeriod: 86400/2,
                    //     lengthOfInterval: 600,
                    //     area: 1,
                    //     minigamePatternId: 1
                    // })
                })
    
                common.sendResponse(resp,res);
            } catch (ex:any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }
            
        })

    }
}