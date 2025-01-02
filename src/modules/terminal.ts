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
const db = new PrismaClient();

export default class TerminalModule extends Module {
    register(app: Application): void {

        app.post('/method/prepare_car_succession', async(req,res) => {

            try {

                const reqBody = wm.v388.protobuf.PrepareCarSuccessionRequest.decode(req.body);
                BODY(reqBody);

                const user = await db.user.findFirst({
                    where: {
                        id: reqBody.userId
                    }
                });
                let searchCode = generateSearchCode();

                while (true) {
                    let cnt = await db.car.count({
                        where: {
                            searchCode: searchCode
                        }
                    })

                    if (cnt == 0) break;
                    else searchCode = generateSearchCode();
                }

                let tunePower = reqBody.w3pTunePower!;
                let tuneHandling = reqBody.w3pTuneHandling!;

                if ((tunePower + tuneHandling) > 32){
                    WARN(`Invaild Power/Handle Setting from 3DX+!, resetting...`);
                    tunePower = 16;
                    tuneHandling = 16;
                }

                // Generate New Car
                const newCar = await db.car.create({
                    data: {
                        userId: reqBody.userId,
                        name: reqBody.car.name!,
                        manufacturer: reqBody.car.manufacturer!,
                        model: reqBody.car.model!,
                        visualModel: reqBody.car.visualModel!,
                        defaultColor: reqBody.car.defaultColor!,
                        customColor: reqBody.car.customColor!,
                        wheel: reqBody.car.wheel!,
                        wheelColor: reqBody.car.wheelColor!,
                        aero: reqBody.car.aero!,
                        bonnet: reqBody.car.bonnet!,
                        wing: reqBody.car.wing!,
                        mirror: reqBody.car.mirror!,
                        sticker: reqBody.car.sticker!,
                        stickerColor: reqBody.car.stickerColor!,
                        neon: reqBody.car.neon!,
                        trunk: reqBody.car.trunk!,
                        plate: reqBody.car.plate!,
                        plateColor: reqBody.car.plateColor!,
                        specialSticker: reqBody.car.specialSticker!,
                        specialStickerColor: reqBody.car.specialStickerColor!,
                        tunePower: tunePower,
                        tuneHandling: tuneHandling,
                        title: reqBody.car.title,
                        level: 47 - reqBody.w3pClass,
                        teamSticker: reqBody.car.teamSticker!,
                        searchCode: searchCode,
                        odometer: reqBody.w3pOdoCount,

                        // Item Category lol
                        ownedMeters: 9,
                        ownedBgm: 15, // Transfer with full bgm
                        ownedCustomColors: reqBody.car.customColor,
                        earnedCustomColor: (reqBody.car.customColor > 0),

                        // VS Player
                        vsPlayCount: reqBody.w3pJoinPlayCount,
                        vsStarCount: reqBody.w3pJoinStarCount,
                        vsStarCountMax: reqBody.w3pJoinStarCount,

                        // Ghost Battle
                        maxiCoin: reqBody.w3pMaxiCoin,
                        rgWinCount: reqBody.w3pMaxiCoin,
                        rgPlayCount: reqBody.w3pMaxiCoin,

                        // Story Mode
                        stLose: reqBody.w3pHasStoryLose,
                        stClearDivCount: Math.floor(reqBody.w3pStoryClearCount / 20),
                        stConsecutiveWins: Math.floor(reqBody.w3pStoryClearCount / 10) * 10,
                        stConsecutiveWinsMax: Math.floor(reqBody.w3pStoryClearCount / 10) * 10,
                        stPlayCount: Math.floor(reqBody.w3pStoryClearCount / 10) * 10,
                        stClearCount: Math.floor(reqBody.w3pStoryClearCount / 10) * 10
                    }
                })

                DEBUG(`Class: ${reqBody.w3pClass}, calc: ${47 - reqBody.w3pClass}`)

                // Update CarOrder
                const origCarOrder = user!.carOrder;

                let newCarOrder = [];
                newCarOrder.push(newCar.carId);
                for(const carId of origCarOrder) {
                    newCarOrder.push(carId);
                }
                
                // Create Car Setting
                const newSetting = await db.carSetting.create({
                    data: {
                        carId: newCar.carId,
                        transmission: true
                    }
                })

                await db.user.update({
                    where: {
                        id: user!.id
                    },
                    data: {
                        carOrder: newCarOrder
                    }
                })

                DEBUG(`Car Order: ${newCarOrder}`)

                const resp = wm.v388.protobuf.PrepareCarSuccessionResponse.encode({
                    error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                    successionId: newCar.carId,
                    searchCode: searchCode
                })

                common.sendResponse(resp,res);

            } catch (ex: any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }

        })

        app.post('/method/succeed_car', async(req,res) => {

            try {

                const reqBody = wm.v388.protobuf.SucceedCarRequest.decode(req.body);

                const resp = wm.v388.protobuf.SucceedCarResponse.encode({
                    error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                    carId: reqBody.successionId
                })

                common.sendResponse(resp,res);

            } catch (ex: any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }
        })

        app.post('/method/save_terminal_result', async(req,res) => {

            try{

                const reqBody = wm.v388.protobuf.SaveTerminalResultRequest.decode(req.body);
                BODY(reqBody);

                const user = await db.user.findFirst({
                    where: {
                        id: reqBody.userId
                    }
                })

                await db.user.update({
                    where: {
                        id: reqBody.userId
                    },
                    data: {
                        lastLoginTime: new Date(),
                        carOrder: (reqBody.carOrder.length > 0) ? reqBody.carOrder : undefined,
                        tutorials: (reqBody.tutorials > user!.tutorials) ? reqBody.tutorials : undefined
                    }
                })

                // TODO: Team Implement

                const resp = wm.v388.protobuf.SaveTerminalResultResponse.encode({
                    error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS
                })

                common.sendResponse(resp,res);

            } catch (ex: any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }

        })

        // FIXED DATA BELOW

        app.post('/method/load_team_information', async(req,res) => {

            try{
                
                let noticeEntries : wm.v388.protobuf.LoadTeamInformationResponse.INoticeEntry[] = [];
                let newsEntries : wm.v388.protobuf.LoadTeamInformationResponse.INewsEntry[] = [];

                const resp = wm.v388.protobuf.LoadTeamInformationResponse.encode({
                    error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                    noticeEntries: noticeEntries,
                    newsEntries: newsEntries
                })

                common.sendResponse(resp,res);


            } catch (ex: any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }
        })
        

    }
}