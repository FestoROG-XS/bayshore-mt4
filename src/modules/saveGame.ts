import { Application } from "express";
import { Module } from "module";

// Import Proto
import * as wm from "../wmmt/v388.proto";
import * as wmsrv from "../wmmt/service.proto";

// Import Util
import * as common from "../util/common";

// Implement DB
import { PrismaClient } from "@prisma/client";
import { BODY, DEBUG, FAULT, WARN } from "../util/log";
import { generateSearchCode } from "../util/general";
import { prisma } from "..";
import { saveGame_Story } from "./mode_story";
import { saveGame_timeTrial } from "./mode_timeTrial";
import { saveGame_InstoreVS } from "./mode_vs";
import { saveGame_Ghost } from "./mode_ghost"
const db = new PrismaClient();

export default class SaveGameModule {
    register(app: Application): void {

        app.post('/method/save_game_result', async (req,res) => {

            let ghostSessionId;
            try {

                const reqBody = wm.v388.protobuf.SaveGameResultRequest.decode(req.body);
                BODY(reqBody);

                const car = await db.car.findFirst({
                    where: {
                        carId: reqBody.carId
                    }
                })

                const user = await db.user.findFirst({
                    where: {
                        id: car!.userId
                    }
                })

                // Basic Car Data Update Process
                if (reqBody.car?.carId != null && reqBody.car?.carId != undefined) {
                    DEBUG(`Do car ${reqBody.carId} update | SaveGameResult`);

                    await db.car.update({
                        where: {
                            carId: reqBody.carId,
                        }, 
                        data: {
                            customColor: reqBody.car.customColor,
                            ownedCustomColors: (reqBody.ownedCustomColors > 0) ? reqBody.ownedCustomColors : undefined,
                            wheel: reqBody.car.wheel,
                            wheelColor: reqBody.car.wheelColor,
                            aero: reqBody.car.aero,
                            bonnet: reqBody.car.bonnet,
                            wing: reqBody.car.wing,
                            mirror: reqBody.car.mirror,
                            sticker: reqBody.car.sticker,
                            stickerColor: reqBody.car.stickerColor,
                            neon: reqBody.car.neon,
                            trunk: reqBody.car.trunk,
                            plate: reqBody.car.plate,
                            plateColor: reqBody.car.plateColor,
                            specialSticker: reqBody.car.specialSticker,
                            specialStickerColor: reqBody.car.specialStickerColor,
                            teamSticker: reqBody.car.teamSticker,
                            odometer: (reqBody.odometer > car!.odometer) ? reqBody.odometer : undefined,
                            earnedCustomColor: (reqBody.earnedCustomColor == undefined || reqBody.earnedCustomColor == null) ? undefined : reqBody.earnedCustomColor,
                            tunePower: reqBody.car.tunePower,
                            tuneHandling: reqBody.car.tuneHandling,
                            lastPlayedAt: new Date(),
                            aura: reqBody.car.aura,
                        }
                    })
                }

                if (reqBody.setting?.view != null && reqBody.setting?.view != undefined) {
                    DEBUG(`Do carSetting ${reqBody.carId} update | SaveGameResult`);

                    await db.carSetting.update({
                        where: {
                            carId: reqBody.carId
                        },
                        data: {
                            ...reqBody.setting,
                            carId: undefined
                        }
                    })

                }

                // Update Car Order
                let newOrder = [reqBody.carId];
                for (let idx = 0; idx < user!.carOrder.length; idx++) {
                    if (user!.carOrder[idx] != reqBody.carId) newOrder.push(user!.carOrder[idx])
                }

                // Basic User Data Update Process
                await db.user.update({
                    where: {
                        id: user!.id
                    },
                    data: {
                        tutorials: (reqBody.tutorials > user!.tutorials) ? reqBody.tutorials : undefined,
                        carOrder: newOrder,
                        // Make hp600TuneTicket can be used by user globally
                        hp600Count: (reqBody.hp600Count == undefined || reqBody.hp600Count == null) ? undefined : reqBody.hp600Count
                    }
                })



                if (!reqBody.retired && !reqBody.timeup) {

                    // Switch Part Logic Handle
                    switch(reqBody.gameMode) {

                        case wm.v388.protobuf.GameMode.MODE_STORY:
                            DEBUG(`Story Mode Save`)
                            if (reqBody.stResult?.stPlayCount != null && reqBody.stResult?.stPlayCount != undefined) 
                                await saveGame_Story(reqBody.stResult,reqBody.carId)
                            break;
                        case wm.v388.protobuf.GameMode.MODE_TIME_ATTACK:
                            DEBUG(`Time Trial Mode Save`)
                            if (reqBody.taResult?.time != null && reqBody.taResult?.time != undefined) 
                                await saveGame_timeTrial(reqBody.taResult,reqBody.carId)
                            break;
                        case wm.v388.protobuf.GameMode.MODE_VS_BATTLE:
                            DEBUG(`In-store Battle Mode Save`)
                            if (reqBody.vsResult?.result != null && reqBody.vsResult?.result != undefined) 
                                await saveGame_InstoreVS(reqBody.vsResult,reqBody.carId)
                            break;
                        case wm.v388.protobuf.GameMode.MODE_GHOST_BATTLE:
                            DEBUG(`Ghost Battle Mode Save`)
                            ghostSessionId = Math.floor(Math.random() * 100) + 101
                            await saveGame_Ghost(reqBody, reqBody.carId)
                            break;
                        case wm.v388.protobuf.GameMode.MODE_EVENT:
                            break;

                    }
                } else {
                    DEBUG(`Game Retired or Timeup, Car: ${reqBody.carId}`)
                }

                common.sendResponse(wm.v388.protobuf.SaveGameResultResponse.encode({
                    error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                    ghostSessionId,
                }),res);

            } catch (ex: any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }

        })

        app.post('/method/save_charge_respsonse', (req,res) => {

            common.sendResponse(wm.v388.protobuf.SaveChargeResponse.encode({
                error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS
            }),res)

        })

        app.post('/method/save_multi_game_result', (req,res) => {

            common.sendResponse(wm.v388.protobuf.SaveMultiGameResultResponse.encode({
                error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS
            }),res)

        })

        app.post('/method/update_car' , async(req,res) => {

            try{

                const reqBody = wm.v388.protobuf.UpdateCarRequest.decode(req.body);

                if (reqBody.car?.carId != null && reqBody.car?.carId != undefined) {
                    DEBUG(`Do car ${reqBody.carId} update`);

                    await db.car.update({
                        where: {
                            carId: reqBody.carId,
                        }, 
                        data: {
                            customColor: reqBody.car.customColor,
                            ownedCustomColors: (reqBody.ownedCustomColors > 0) ? reqBody.ownedCustomColors : undefined,
                            wheel: reqBody.car.wheel,
                            wheelColor: reqBody.car.wheelColor,
                            aero: reqBody.car.aero,
                            bonnet: reqBody.car.bonnet,
                            wing: reqBody.car.wing,
                            mirror: reqBody.car.mirror,
                            sticker: reqBody.car.sticker,
                            stickerColor: reqBody.car.stickerColor,
                            neon: reqBody.car.neon,
                            trunk: reqBody.car.trunk,
                            plate: reqBody.car.plate,
                            plateColor: reqBody.car.plateColor,
                            specialSticker: reqBody.car.specialSticker,
                            specialStickerColor: reqBody.car.specialStickerColor,
                            teamSticker: reqBody.car.teamSticker,
                            lastPlayedAt: new Date()
                        }
                    })
                }

                if (reqBody.setting?.view != null && reqBody.setting?.view != undefined) {
                    DEBUG(`Do carSetting ${reqBody.carId} update`);

                    await db.carSetting.update({
                        where: {
                            carId: reqBody.carId
                        },
                        data: {
                            ...reqBody.setting,
                            carId: undefined
                        }
                    })

                }

                common.sendResponse(wm.v388.protobuf.UpdateCarResponse.encode({
                    error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS
                }),res)


            } catch (ex: any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }

        })

    }
}