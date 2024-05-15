import { Application } from "express";
import { Module } from "module";
import { prisma } from ".."
// Import Proto
import * as wm from "../wmmt/v388.proto";
import * as srv from "../wmmt/services.proto"

// Import Util
import * as common from "../util/common";
import { calendarFormat, months } from "moment";
import { endianness } from "os";
import { getEnvironmentData } from "worker_threads";
import { randomInt, randomUUID } from "crypto";
import { OCMSchedule } from "./eventSchedule";
import { PlaceAcquire } from "./startup";
import { TextEncoder } from "util";
import { spawn } from "child_process";
import { flush } from "@sentry/node";
import { getTimestamp, isVaild } from "./exportFunctions";
let v388 = wm.v388.protobuf

export default class GameModule extends Module {
    register(app: Application): void {

        app.post('/method/save_game_result' ,async(req,res) => {

            let body = v388.SaveGameResultRequest.decode(req.body)
            let car = await prisma.car.findFirst({
                where:{
                    carId: body.carId
                }
            })
            let extended = await prisma.carExtended.findFirst({
                where:{
                    carId: body.carId
                }
            })
            let setting = await prisma.carSetting.findFirst({
                where:{
                    carId: body.carId
                }
            })

            // Begin Game Result Update
            // Save VS Battle Result and common result only
            
            if(body.car) {
                console.info(`| INFO | Updating Car for ${body.carId}`)
                await prisma.car.update({
                    where: {
                        dbId: car!.dbId
                    },
                    data: {
                        level: (await isVaild(body.car.level)),
                        title: (await isVaild(body.car.title)),
                        tunePower: (await isVaild(body.car.tunePower)),
                        tuneHandling: (await isVaild(body.car.tuneHandling)),
                        defaultColor: (await isVaild(body.car.defaultColor)),
                        customColor: (await isVaild(body.car.customColor)),
                        wheel: (await isVaild(body.car.wheel)),
                        wheelColor: (await isVaild(body.car.wheelColor)),
                        aero: (await isVaild(body.car.aero)),
                        bonnet: (await isVaild(body.car.bonnet)),
                        wing: (await isVaild(body.car.wing)),
                        mirror: (await isVaild(body.car.mirror)),
                        sticker: (await isVaild(body.car.sticker)),
                        stickerColor: (await isVaild(body.car.stickerColor)),
                        neon: (await isVaild(body.car.neon)),
                        trunk: (await isVaild(body.car.trunk)),
                        plate: (await isVaild(body.car.plate)),
                        plateColor: (await isVaild(body.car.plateColor)),
                        specialSticker: (await isVaild(body.car.specialSticker)),
                        specialStickerColor: (await isVaild(body.car.specialStickerColor)),
                        aura: (await isVaild(body.car.aura)),
                        ghostLevel: (await isVaild(body.car.ghostLevel)),
                        lastPlayedAt: getTimestamp(),
                    }
                })
            }

            if (body.setting) {
                console.info(`| INFO | Updating CarSetting for ${body.carId}`)
                await prisma.carSetting.update({
                    where: {
                        dbId: setting!.dbId
                    },
                    data: {
                        view: (await isVaild(body.setting.view)),
                        transmission: (await isVaild(body.setting.transmission)),
                        retire: (await isVaild(body.setting.retire)),
                        meter: (await isVaild(body.setting.meter)),
                        volume: (await isVaild(body.setting.volume)),
                        bgm: (await isVaild(body.setting.bgm)),
                        nameplate: (await isVaild(body.setting.nameplate)),
                        nameplateColor: (await isVaild(body.setting.nameplateColor)),
                    }
                })
            }

            console.info(`| INFO | Updating CarExtended for ${body.carId}`)
            await prisma.carExtended.update({
                where: {
                    dbId: extended!.dbId
                },
                data: {
                    playCount: (await isVaild(body.playCount)),
                    odometer: (await isVaild(body.odometer)),
                    earnedCustomColor: (await isVaild(body.earnedCustomColor)),
                    ownedCustomColors: (await isVaild(body.ownedCustomColors))
                }
            })

            if (!body.retired && !body.timeup) {
                console.info(`| INFO | Game Normally Terminated for ${body.carId}`)
                switch(body.gameMode) {
                    case v388.GameMode.MODE_VS_BATTLE:
                        console.info(`| INFO | VS for ${body.carId}`)
                        await prisma.carExtended.update({
                            where: {
                                dbId: extended!.dbId
                            },
                            data: {
                                vsPlayCount: (await isVaild(body.playCount)),
                                vsBurstCount: (await isVaild(body.odometer)),
                                vsStarCount: (await isVaild(body.vsResult?.vsStarCount)),
                                vsStarCountMax: (((await isVaild(body.vsResult?.vsStarCount)) > extended!.vsStarCountMax) ? (await isVaild(body.vsResult?.vsStarCount)) : extended!.vsStarCountMax),
                                vsCoolOrWild: (await isVaild(body.vsResult?.vsCoolOrWild)),
                                vsSmoothOrRough: (await isVaild(body.vsResult?.vsSmoothOrRough)),
                            }
                        })
                    break
    
                    case v388.GameMode.MODE_TIME_ATTACK:
                        console.info(`| INFO | TA for ${body.carId}`)
                        // TODO: for actual working...
                    break
                }
            }
            
            let resp = v388.SaveGameResultResponse.encode({
                error: v388.ErrorCode.ERR_SUCCESS
            })

            common.sendResponse(resp,res)

        })

        app.post('/method/save_face_recognition_result', async(req,res) => {

            let body = v388.SaveFaceRecognitionResultRequest.decode(req.body)
            common.sendResponse(v388.SaveFaceRecognitionResultResponse.encode({error: v388.ErrorCode.ERR_SUCCESS}),res);

        })
    }
}