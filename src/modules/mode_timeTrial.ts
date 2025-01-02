import e, { Application } from "express";
import { Module } from "module";

// Import Proto
import * as wm from "../wmmt/v388.proto";
import * as wmsrv from "../wmmt/service.proto";

// Import Util
import * as common from "../util/common";
import Long from 'long';

// Implement DB
import { PrismaClient } from "@prisma/client";
import { generateSearchCode, getCar, getTeam } from "../util/general";
import { BODY, DEBUG, FAULT } from "../util/log";
import { prisma } from "..";
const db = new PrismaClient();

export default class ModeTimeTrialModule extends Module {
    register(app: Application): void {
        
        app.post('/method/load_time_attack_record', async(req,res) => {

            try{

                const reqBody = wm.v388.protobuf.LoadTimeAttackRecordRequest.decode(req.body);
                BODY(reqBody);
                let wRank = [];
                let mRank = [];

                const wholeRankingDB = await db.timeTrial.findMany({
                    where: {
                        course: reqBody.course
                    },
                    orderBy: {
                        time: 'asc'
                    },
                    take: 100 // limit to show 100 data
                })

                const modelRankingDB = await db.timeTrial.findMany({
                    where: {
                        course: reqBody.course,
                        model: reqBody.model
                    },
                    orderBy: {
                        time: 'asc'
                    },
                    take: 100 // limit to show 100 data
                })

                // FullFill it
                for (let idx = 0 ; idx < wholeRankingDB.length; idx++) {
                    wRank.push(wholeRankingDB[idx].time)
                }
                for (let idx = 0 ; idx < 100 - wholeRankingDB.length; idx++) {
                    wRank.push(599999);
                }

                for (let idx = 0 ; idx < modelRankingDB.length; idx++) {
                    mRank.push(modelRankingDB[idx].time)
                }
                for (let idx = 0; idx < 100 - modelRankingDB.length; idx++) {
                    mRank.push(599999);
                }

                const selfRecord = await db.timeTrial.findFirst({
                    where: {
                        course: reqBody.course,
                        carId: reqBody.carId
                    }
                })

                let selfData = {};
                if(selfRecord?.carId != null && selfRecord.carId != undefined) {
                    selfData = {
                        personalBestTime: selfRecord.time,
                        pbSection1Time: selfRecord.section1Time,
                        pbSection2Time: selfRecord.section2Time,
                        pbSection3Time: selfRecord.section3Time,
                        pbSection4Time: selfRecord.section4Time,
                        pbSection5Time: selfRecord.section5Time,
                        pbSection6Time: selfRecord.section6Time,
                        pbSection7Time: selfRecord.section7Time,
                    }
                }

                const resp = wm.v388.protobuf.LoadTimeAttackRecordResponse.encode({
                    error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                    wholeRanking: wRank,
                    modelRanking: mRank,
                    ...selfData
                })

                common.sendResponse(resp,res);

            } catch (ex: any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }


        })


    }
}

export async function saveGame_timeTrial(data: wm.v388.protobuf.SaveGameResultRequest.ITimeAttackResult, carid: number) {
    
    const timeTrialData = await db.timeTrial.findFirst({
        where: {
            course: data.course,
            carId: carid
        }
    })

    const car = await db.car.findFirst({
        where: {
            carId: carid
        }
    })

    if (timeTrialData?.carId != null && timeTrialData.carId != undefined) {

        // Exist Time Record
        if (data.time < timeTrialData.time) {

            // Better Record Excedded
            await db.timeTrial.update({
                where: {
                    recordId: timeTrialData.recordId
                },
                data: {
                    ...data
                }
            })

        } 

    }else {

        await db.timeTrial.create({
            data: {
                carId: carid,
                model: car!.model,
                tuneHandling: car!.tuneHandling,
                tunePower: car!.tunePower,
                section1Time: data.section_1Time,
                section2Time: data.section_2Time,
                section3Time: data.section_3Time,
                section4Time: data.section_4Time,
                section5Time: data.section_5Time,
                section6Time: data.section_6Time,
                section7Time: data.section_7Time,
                time: data.time,
                course: data.course
            }
        })


    }

    return;

}