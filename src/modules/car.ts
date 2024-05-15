import { Application } from "express";
import { Module } from "module";
import { prisma } from ".."
// Import Proto
import * as wm from "../wmmt/v388.proto";
import * as srv from "../wmmt/services.proto"
import Long from "long" 
// Import Util
import * as common from "../util/common";
import { months } from "moment";
import { endianness } from "os";
import { getEnvironmentData } from "worker_threads";
import { randomInt, randomUUID } from "crypto";
import { OCMSchedule } from "./eventSchedule";
import { PlaceAcquire } from "./startup";
import { TextEncoder } from "util";
import { spawn } from "child_process";
import { captureException, flush } from "@sentry/node";
import { error } from "console";
import { Z_FULL_FLUSH } from "zlib";
import { isVaild } from "./exportFunctions";
import { EventEmitter } from "stream";
// Get current date
let date = Math.floor(new Date().getTime() / 1000);
let v388 = wm.v388.protobuf
export default class CarModule extends Module {
    register(app: Application): void {

        app.post('/method/load_car', async(req,res) => {

            let body = v388.LoadCarRequest.decode(req.body)

            let car = await prisma.car.findFirst({
                where: {
                    carId: body.carId
                }
            })

            let setting = await prisma.carSetting.findFirst({
                where: {
                    carId: body.carId
                }
            })

            let extended = await prisma.carExtended.findFirst({
                where: {
                    carId: body.carId
                }
            })

            let longLoseBits = Long.fromString(extended!.stLoseBits.toString());

            let response = v388.LoadCarResponse.encode({
                error: v388.ErrorCode.ERR_SUCCESS,
                car: v388.Car.create({
                    ...car!
                }),
                setting: v388.CarSetting.create({
                    ...setting!
                }),
                ...extended!,
                stLoseBits: longLoseBits
            })

            common.sendResponse(response,res)
        })

        app.post('/method/create_car', async(req,res) => {

            let body = v388.CreateCarRequest.decode(req.body)
            let fullStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
            let searchCode = ''
            for (let i = 0; i < 7 ; i++) {
                searchCode += fullStr.charAt(randomInt(0,fullStr.length))
            }

            let car = {
                userId: body.userId,
                regionId: 10,
                name: body.car.name!,
                searchCode,
                manufacturer: body.car.manufacturer!,
                model: body.car.model!,
                visualModel: body.car.visualModel!,
                defaultColor: body.car.defaultColor || 0,
                customColor: body.car.customColor,
                wheel: body.car.wheel,
                wheelColor: body.car.wheelColor,
                aero: body.car.aero,
                bonnet: body.car.bonnet,
                wing: body.car.wing,
                mirror: body.car.mirror,
                sticker: body.car.sticker,
                stickerColor: body.car.stickerColor,
                neon: body.car.neon,
                trunk: body.car.trunk,
                plate: body.car.plate,
                plateColor: body.car.plateColor,
                specialSticker: body.car.specialSticker,
                specialStickerColor: body.car.specialStickerColor,
                tunePower: 16,
                tuneHandling: 16,
                title: body.car.title,
                level: 40, // C3 = 40?!
                lastPlayedAt: body.timestamp,
                aura: body.car.aura || 0,
                ghostLevel: body.car.ghostLevel || 0,
                country: "China"
            }

            await prisma.car.create({
                data: {
                    ...car,
                }
            })

            // Acquire CarID rightnow
            let newCar = await prisma.car.findFirst({
                where: {
                    userId: body.userId
                },
                orderBy: {
                    carId: 'desc'
                }
            })

            await prisma.carExtended.create({
                data: {
                    carId: newCar!.carId,
                }
            })

            await prisma.carSetting.create({
                data: {
                    carId: newCar!.carId,
                    transmission: body.transmission
                }
            })

            let error = v388.ErrorCode.ERR_SUCCESS
            if(body.userId == 0 || !body.userId) {
                console.error("| ERROR | User Not Exist?!!!")
                error = v388.ErrorCode.ERR_REQUEST
            }
            else {
                let user = await prisma.user.findFirst({
                    where: {
                        userId: body.userId
                    }
                })

                let newCarOrder:number[] = user!.carOrder
                newCarOrder.unshift(newCar!.carId)

                await prisma.user.update({
                    where: {
                        dbId: user!.dbId
                    },
                    data: {
                        carOrder: newCarOrder!
                    }
                })
            }

            let response = v388.CreateCarResponse.encode({
                error,
                accessCode: body.accessCode,
                userId: body.userId,
                carId: newCar!.carId,
                searchCode,
                stClearBits: 5,
                stClearDivCount: 0,
                stClearCount: 60,
                stLoseBits: 0,
                stLose: false,
                stConsecutiveWins: 60,
                stConsecutiveWinsMax: 60
            })

            common.sendResponse(response,res)
        })

        app.post('/method/load_game_history', async(req,res) => {

            let body = v388.LoadGameHistoryRequest.decode(req.body)

            // will not push any ghostbattle data...
            let taRecords : wm.v388.protobuf.LoadGameHistoryResponse.TimeAttackRecord[] = []
            let taRankingUpdatedAt = date

            // TODO: make function working cz im so lazy lol

            let response = v388.LoadGameHistoryResponse.encode({
                error: v388.ErrorCode.ERR_SUCCESS,
                taRankingUpdatedAt,
                ghostBattleCount: 20,
                ghostBattleWinCount: 20
            })

            common.sendResponse(response,res)
        })

        app.post('/method/update_car', async(req,res) => {

            let body = v388.UpdateCarRequest.decode(req.body)
            let resp = v388.UpdateCarResponse.encode({error: v388.ErrorCode.ERR_SUCCESS})

            // Get all
            let car = await prisma.car.findFirst({
                where: {
                    carId: body.carId
                }
            })
            let setting = await prisma.car.findFirst({
                where: {
                    carId: body.carId
                }
            })
            let extended = await prisma.carExtended.findFirst({
                where: {
                    carId: body.carId
                }
            })
            
            // Update Database
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

            if (body.ownedCustomColors) {
                console.info(`| INFO | Updating CarExtended for ${body.carId}`)
                await prisma.carExtended.update({
                    where: {
                        dbId: extended!.dbId
                    },
                    data: {
                        ownedCustomColors: body.ownedCustomColors
                    }
                })
            }

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
                        lastPlayedAt: body.timestamp,
                    }
                })
            }
            
            common.sendResponse(resp,res)
        })
    }
}
