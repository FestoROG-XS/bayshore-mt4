import { Application } from "express";
import { Module } from "module";

// Import Proto
import * as wm from "../wmmt/v388.proto";

// Import Util
import * as common from "../util/common";
import { months } from "moment";
import { endianness } from "os";
import { getEnvironmentData } from "worker_threads";
import { OCMSchedule } from "./eventSchedule";
import { Config } from "../config";

export async function PlaceAcquire(){

    let place = wm.v388.protobuf.Place.create({
        placeId: 'CHN0001',
        shopName: Config.getConfig().shopName,
        regionId: 10,
        country: 'CHN'
    })

    return {place}

}


export default class StartupModule extends Module {
    register(app: Application): void {

        // Register system info upon booting
        app.post('/method/register_system_info', async (req, res) => {

            let competitionSchedule = null
            // OCM Period Control
            competitionSchedule = (await OCMSchedule(1710795097,false)).data

            let message = wm.v388.protobuf.RegisterSystemInfoResponse.encode({
                error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                regionId: 10,
                placeId: "CHN0001",
                pajeroDiscloseAt: 0,
                carCampaignStartAt: 0,
                carCampaignEndAt: 0,
                teamSuspensionAnnouncementStartAt: 2100000000,
                teamSuspensionStartAt: 2100000000,
                successionCloseAnnouncementStartAt: 2100000000,
                successionCloseAt: 2100000000,
                successionCloseAnnouncementEndAt: 2100000000,
                faceRecognitionPermitted: true,
                competitionSchedule
            })

            common.sendResponse(message,res)

        });

        app.post('/method/ping', async(req,res) => {

            let msg = wm.v388.protobuf.PingResponse.encode({
                error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                pong: 0
            })

            common.sendResponse(msg,res)

        })

        app.post('/method/update_user_lock', async(req,res) => {
            common.sendResponse(wm.v388.protobuf.UpdateUserLockResponse.encode({
                error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS
            }),res)
        })


    }
}