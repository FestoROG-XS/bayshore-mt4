import { Application } from "express";
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
import { DEBUG, FAULT } from "../util/log";
import { prisma } from "..";
const db = new PrismaClient();

export default class CarModule extends Module {
    register(app: Application): void {

        app.post('/method/create_car', async(req,res) => {
            try{

                const reqBody = wm.v388.protobuf.CreateCarRequest.decode(req.body);
                let searchCode = generateSearchCode();
                let additionalData = {};
                
                while (true) {
                    let cnt = await db.car.count({
                        where: {
                            searchCode: searchCode
                        }
                    })

                    if (cnt == 0) break;
                    else searchCode = generateSearchCode();
                }

                switch(reqBody.method) {
                    case (wm.v388.protobuf.CarCreationMethod.CAR_HP600):
                        additionalData = {
                            level: 45, // C8
                            tunePower: 10,
                            tuneHandling: 10,
                            stPlayCount: 20,
                            stClearBits: 0,
                            stClearDivCount: 1,
                            stClearCount: 20,
                            stConsecutiveWins: 20,
                            stConsecutiveWinsMax: 20,
                            ghostLevel: 4 // 600HP CLASS
                        }    
                    break;
                }

                const newCar = await db.car.create({
                    data: {
                        userId: (reqBody.userId == null || reqBody.userId == undefined)?reqBody.banapassportAmId : reqBody.userId,
                        searchCode: searchCode,
                        name: reqBody.car.name!,
                        manufacturer: reqBody.car.manufacturer!,
                        visualModel: reqBody.car.visualModel!,
                        model: reqBody.car.model!,
                        defaultColor: reqBody.car.defaultColor!,
                        customColor: reqBody.car.customColor!,
                        ...additionalData
                    }
                })

                const newSetting = await db.carSetting.create({
                    data: {
                        carId: newCar.carId,
                        transmission: reqBody.transmission
                    }
                })

                const resp = wm.v388.protobuf.CreateCarResponse.encode({
                    error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                    userId: reqBody.userId,
                    carId: newCar.carId,
                    searchCode: searchCode,
                    stClearBits: newCar.stClearBits,
                    stClearCount: newCar.stClearCount,
                    stClearDivCount: newCar.stClearDivCount,
                    stLose: false,
                    stLoseBits: 0,
                    stConsecutiveWins: newCar.stConsecutiveWins,
                    stConsecutiveWinsMax: newCar.stConsecutiveWinsMax
                })

                // Generate New CarOrder
                const user = await db.user.findFirst({
                    where: {
                        id: reqBody.userId
                    }
                });
                const origCarOrder = user!.carOrder;

                let newCarOrder = [];
                newCarOrder.push(newCar.carId);
                for(const carId of origCarOrder) {
                    newCarOrder.push(carId);
                }

                await prisma.user.update({
                    where: {
                        id: user!.id
                    },
                    data: {
                        carOrder: newCarOrder
                    }
                })

                DEBUG(`Car Order: ${newCarOrder}`)

                common.sendResponse(resp,res);

            } catch (ex: any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }
        })

        app.post('/method/load_car', async(req,res) => {

            try {

                const reqBody = wm.v388.protobuf.LoadCarRequest.decode(req.body);
                const carSetting = await db.carSetting.findFirst({
                    where: {
                        carId: reqBody.carId
                    }
                })

                const car = await db.car.findFirst({
                    where: {
                        carId: reqBody.carId
                    }
                })

                const basicCar = await getCar(reqBody.carId);

                const resp = wm.v388.protobuf.LoadCarResponse.encode({
                    error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                    car: wm.v388.protobuf.Car.create({
                        ...basicCar,
                        lastPlayedAt: common.dt2ts(basicCar.lastPlayedAt || new Date())
                    }),
                    tuningPoint: car!.tuningPoint,
                    dressupPoint: car!.dressupPoint,
                    dressupLevel: car!.dressupLevel,
                    odometer: car!.odometer,
                    playCount: car!.playCount,
                    earnedCustomColor: car!.earnedCustomColor,
                    ownedCustomColors: car!.ownedCustomColors,
                    ownedDressupParts: car!.ownedDressupParts,
                    setting: wm.v388.protobuf.CarSetting.create({
                        view: carSetting!.view,
                        transmission: carSetting!.transmission,
                        retire: carSetting!.retire,
                        meter: carSetting!.meter,
                        volume: carSetting!.volume,
                        bgm: carSetting!.bgm,
                        nameplate: carSetting!.nameplate,
                        nameplateColor: carSetting!.nameplateColor
                    }),
                    vsPlayCount: car!.vsPlayCount,
                    vsBurstCount: car!.vsBurstCount,
                    vsStarCount: car!.vsStarCount,
                    vsStarCountMax: car!.vsStarCountMax,
                    vsCoolOrWild: car!.vsCoolOrWild,
                    vsSmoothOrRough: car!.vsSmoothOrRough,
                    rgPlayCount: car!.rgPlayCount,
                    rgWinCount: car!.rgWinCount,
                    maxiCoin: car!.maxiCoin,
                    rgBlock: car!.rgBlock,
                    rgProgress: car!.rgProgress,
                    rgClearCount: car!.rgClearCount,
                    rgConsecutiveLosses: car!.rgConsecutiveLosses,
                    stPlayCount: car!.stPlayCount,
                    stClearBits: car!.stClearBits,
                    stClearDivCount: car!.stClearDivCount,
                    stClearCount: car!.stClearCount,
                    stLoseBits: Long.fromString(car!.stLoseBits.toString()),
                    stLose: car!.stLose,
                    stConsecutiveWins: car!.stConsecutiveWins,
                    stConsecutiveWinsMax: car!.stConsecutiveWinsMax,
                    ownedMeters: car!.ownedMeters,
                    ownedBgm: car!.ownedBgm,
                    // challenger,
                    // opponent_ghost
                    // opponent_trail_id
                    // opponent_competition_id
                    // competition_parameter
                    // special_title
                    // earned_title,
                    ownedNameplates: car!.ownedNameplates
                })

                common.sendResponse(resp,res);

            } catch (ex: any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }

        })

        app.post('/method/load_game_history', async(req,res) => {

            try {

                const reqBody = wm.v388.protobuf.LoadGameHistoryRequest.decode(req.body);
                const timeTrialMapping = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
                const car = await db.car.findFirst({
                    where: {
                        carId: reqBody.carId
                    }
                })

                let taRecords:wm.v388.protobuf.LoadGameHistoryResponse.TimeAttackRecord[] = []

                for(const idx of timeTrialMapping) {

                    const wholeResult = await db.timeTrial.findMany({
                        where: {
                            course: idx
                        },
                        orderBy: {
                            time: 'asc'
                        },
                        select: {
                            carId: true
                        }
                    })
                    
                    const modelResult = await db.timeTrial.findMany({
                        where: {
                            course: idx,
                            model: car!.model
                        },
                        orderBy: {
                            time: 'asc'
                        },
                        select: {
                            carId: true
                        }
                    })

                    const selfResult = await db.timeTrial.findFirst({
                        where: {
                            course: idx,
                            carId: reqBody.carId
                        }
                    })

                    if (selfResult?.time != null && selfResult?.time != undefined) {

                        let wholeRank = 0;
                        let modelRank = 0;
                        for (let i = 0; i < wholeResult.length; i++){
                            if (reqBody.carId == wholeResult[i].carId) {
                                wholeRank = i+1;
                                break;
                            }
                        }

                        for (let i = 0; i < modelResult.length; i++){
                            if (reqBody.carId == modelResult[i].carId) {
                                modelRank = i+1;
                                break;
                            }
                        }


                        DEBUG(`${wholeRank}, ${modelRank} in ${idx}`);

                        taRecords.push(wm.v388.protobuf.LoadGameHistoryResponse.TimeAttackRecord.create({
                            course: idx,
                            wholeParticipants: wholeResult.length,
                            modelParticipants: modelResult.length,
                            time: selfResult!.time,
                            tunePower: selfResult!.tunePower,
                            tuneHandling: selfResult!.tuneHandling,
                            wholeRank: wholeRank,
                            modelRank: modelRank
                        }))

                    } else {
                        taRecords.push(wm.v388.protobuf.LoadGameHistoryResponse.TimeAttackRecord.create({
                            course: idx,
                            wholeParticipants: wholeResult.length,
                            modelParticipants: modelResult.length,
                        }))
                    }

                }

                const resp = wm.v388.protobuf.LoadGameHistoryResponse.encode({
                    error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                    taRecords,
                    taRankingUpdatedAt: common.dt2ts(new Date()),

                    // TODO: Fix This
                    ghostHistory: [],

                    ghostBattleCount: car!.ghostBattleCount,
                    ghostBattleWinCount: car!.ghostBattleWinCount
                })

                common.sendResponse(resp,res);


            } catch (ex: any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }

        })

    }
}