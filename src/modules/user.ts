import { Application } from "express";
import { Module } from "module";

// Import Proto
import * as wm from "../wmmt/v388.proto";
import * as wmsrv from "../wmmt/service.proto";

// Import Util
import * as common from "../util/common";

// Implement DB
import { PrismaClient } from "@prisma/client";
import { getCar, getTeam} from "../util/general";
import { DEBUG, FAULT } from "../util/log";
const db = new PrismaClient();

export default class UserModule extends Module {
    register(app: Application): void {

        app.post('/method/load_user', async(req,res) => {

            try{

                const reqBody = wm.v388.protobuf.LoadUserRequest.decode(req.body)

                DEBUG(`AccessCode -> ${reqBody.accessCode}`)
                DEBUG(`CardChipId -> ${reqBody.cardChipId}`)

                const user = await db.user.findFirst({
                    where: {
                        cardChipId: reqBody.cardChipId,
                        accessCode: reqBody.accessCode
                    }
                })

                let resp;

                if (user!= null && user!= undefined) {
                    DEBUG(`Banapassport Login ${user.accessCode}`)
                    
                    let cars: wm.v388.protobuf.Car[] = [];
                    let carStates: wm.v388.protobuf.LoadUserResponse.CarState[] = [];
                    let team = await getTeam(user.id);
                    let teamInsert = {};

                    for (const carId of user.carOrder){

                        const data = await getCar(carId);

                        cars.push(wm.v388.protobuf.Car.create({
                            ...data,
                            lastPlayedAt: common.dt2ts(data.lastPlayedAt || new Date())
                        }))

                        // TODO: Make this into actual working
                        carStates.push(wm.v388.protobuf.LoadUserResponse.CarState.create({
                            hasOpponentGhost: false, 
                            competitionState: wm.v388.protobuf.GhostCompetitionParticipantState.COMPETITION_NOT_PARTICIPATED
                        }))

                    };

                    if(cars.length == 0) carStates.push(wm.v388.protobuf.LoadUserResponse.CarState.create({
                        hasOpponentGhost: false
                    }))

                    if (team.teamId != null && team.teamId != undefined) {
                        teamInsert = {
                            teamId: team.teamId,
                            teamName: team.teamName,
                            teamStickerFont: team.teamStickerFont
                        }
                    }
                    
                    resp = wm.v388.protobuf.LoadUserResponse.encode({
                        error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                        unlockAt: 0,
                        accessCode: reqBody.accessCode,
                        banapassportAmId: user.id,
                        personalId: user.id,
                        userId: user.id,
                        numOfOwnedCars: cars.length,
                        cars,
                        carStates,
                        hasHp600Car: (user.hp600Count>0)?true:false,
                        hp600Count: user.hp600Count,
                        tutorials: user.tutorials,
                        carCampaignUserState: wm.v388.protobuf.CarCampaignUserState.CAR_CAMPAIGN_NOT_ACCEPTED,
                        competitionUserState: wm.v388.protobuf.GhostCompetitionParticipantState.COMPETITION_PARTICIPATED,
                        ...teamInsert
                    })

                    DEBUG(`CarCount -> ${cars.length}`)

                } else {
                    DEBUG(`No Banapassport Found`);

                    const newUser = await db.user.create({
                        data: {
                            cardChipId: reqBody.cardChipId,
                            accessCode: reqBody.accessCode
                        }
                    })

                    DEBUG(`Register New User ${newUser.id} On ${reqBody.accessCode}!`);

                    resp = wm.v388.protobuf.LoadUserResponse.encode({
                        error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                        unlockAt: 0,
                        accessCode: reqBody.accessCode,
                        banapassportAmId: newUser.id,
                        personalId: newUser.id,
                        userId: newUser.id,
                        numOfOwnedCars: 0,
                        cars: [],
                        carStates: [],
                        hasHp600Car: false,
                        hp600Count: 0,
                        tutorials: 0
                    })
                    
                }

                // TestCode
                // let resp = wm.v388.protobuf.LoadUserResponse.encode({
                //     error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                //     unlockAt: 0,
                //     accessCode: reqBody.accessCode,
                //     banapassportAmId: 1,
                //     personalId: 1,
                //     userId: 1,
                //     numOfOwnedCars: 0,
                //     cars: [],
                //     carStates: [],
                //     hasHp600Car: false,
                //     hp600Count: 0,
                //     tutorials: 0
                // })

                common.sendResponse(resp,res);

            } catch (ex: any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }

            app.post('/method/update_user_lock', async(req,res) => {
                common.sendResponse(wm.v388.protobuf.UpdateUserLockResponse.encode({
                    error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS
                }),res)
            })

        })

    }
}