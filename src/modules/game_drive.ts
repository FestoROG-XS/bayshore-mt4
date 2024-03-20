import { Application } from "express";
import { Module } from "module";

// Import Proto
import * as wm from "../wmmt/v388.proto";
import * as srv from "../wmmt/services.proto"

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

export async function SpawnCar(name:string, visualModel: number){
    let car = wm.v388.protobuf.Car.create({
        carId:randomInt(512,1024),
        regionId:10,
        name:name,
        searchCode:'',
        manufacturer: 2,
        model:6,
        visualModel:visualModel,
        defaultColor:0,
        customColor:0,
        wheel:randomInt(1,5),
        wheelColor: randomInt(1,5),
        aero: randomInt(1,6),
        bonnet:1,
        wing:randomInt(1,3),
        mirror:2,
        sticker:randomInt(1,10),
        stickerColor:randomInt(1,10),
        neon:randomInt(1,5),
        trunk:1,
        plate:1,
        plateColor:1,
        specialSticker:0,
        specialStickerColor:0,
        tunePower:15,
        tuneHandling:17,
        title:512,
        level:randomInt(10,50),
        lastPlayedPlace: (await PlaceAcquire()).place,
        lastPlayedAt: 1710795097
    })
    return {car}
}

export default class GameModule extends Module {
    register(app: Application): void {

        // Register system info upon booting
        app.post('/method/load_user', async (req, res) => {

            let cars:wm.v388.protobuf.ICar[] = []
            let carStates:wm.v388.protobuf.LoadUserResponse.CarState[] = []
            for (let i = 0 ; i < 5 ; i++ ) {
                cars.push((await SpawnCar('KianaKaslana',randomInt(1,100))).car!)
                carStates.push(wm.v388.protobuf.LoadUserResponse.CarState.create({
                    hasOpponentGhost: false
                }))
            }

            let msg = wm.v388.protobuf.LoadUserResponse.encode({
                error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                userId: 1,
                numOfOwnedCars: 1,
                cars,
                carStates,
                hasHp600Car: false,
                hp600Count: 0,
                tutorials: 16383,
                competitionUserState: wm.v388.protobuf.GhostCompetitionParticipantState.COMPETITION_PARTICIPATED
            })

            common.sendResponse(msg,res)
            
        })

        app.post('/method/load_car', async (req, res) => {

            let challenger = wm.v388.protobuf.GhostCar.create({
                car: (await SpawnCar('Opponent', 15)).car!,
            })

            let msg = wm.v388.protobuf.LoadCarResponse.encode({
                error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                car: (await SpawnCar('KianaKaslana',randomInt(1,100))).car!,
                tuningPoint: 0,
                dressupLevel: 0,
                dressupPoint: 0,
                odometer: 99999,
                playCount: 0,
                earnedCustomColor:false,
                ownedCustomColors:0,
                ownedDressupParts:0,
                setting: wm.v388.protobuf.CarSetting.create({
                    view: true,
                    transmission: true,
                    retire: true,
                    meter: 4,
                    volume: 2,
                    bgm: 4,
                    nameplate: 0,
                    nameplateColor: 0
                }),
                vsPlayCount: 0,
                vsBurstCount: 0,
                vsStarCount: 0,
                vsStarCountMax: 0,
                vsCoolOrWild: 0,
                vsSmoothOrRough: 0,
                rgPlayCount: 20,
                rgWinCount: 20,
                maxiCoin: 20,
                rgBlock: 0,
                rgProgress: [],
                rgClearCount: 0,
                rgConsecutiveLosses: 0,
                stClearBits: 0,
                stClearCount: 0,
                stClearDivCount: 0,
                stConsecutiveWins: 0,
                stConsecutiveWinsMax: 0,
                stLose: false,
                stLoseBits: 0,
                stPlayCount:0,
                ownedBgm: 5,
                ownedMeters: 5,
                ownedNameplates:0,
                challenger
            })

            common.sendResponse(msg,res)
            
        })

        // Load Crown
        app.get('/resource/crown_list', async(req,res) => {

            let crowns:srv.v388.protobuf.Crown[] = []
            let msg = srv.v388.protobuf.CrownList.encode({
                crowns
            })

            common.sendResponse(msg,res)

        })

        // Ghost Battle Information
        app.post('/method/load_ghost_battle_info',async(req,res) => {

            let msg = wm.v388.protobuf.LoadGhostBattleInfoResponse.encode({
                error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                hasRevenges: false ,
                hasHistory: false,
            })

            common.sendResponse(msg,res)

        })

        app.post('/method/load_ghost_competition_info',async(req,res) => {
        
            let msg = wm.v388.protobuf.LoadGhostCompetitionInfoResponse.encode({
                error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                periodId: 0,
                closed: false,
                brakingPoint: 0,
                topResults: [0],
                rank: 3,
            })

        })

        app.get('/resource/ghost_competition_target',async(req,res) => {

            let ghostCar = wm.v388.protobuf.GhostCar.create({
                car: (await SpawnCar('IM NOT DUMMY',randomInt(1,50))).car!,
                area: 0
            })

            let msg = wm.v388.protobuf.GhostCompetitionTarget.encode({
                competitionId: 1,
                ghostCar,
                trailId: 999000,
                updatedAt: 1710795097,
                competitionSchedule: (await OCMSchedule(1710795097,false)).data!
            })

            common.sendResponse(msg,res)

        })

        app.get('/resource/ghost_trail',async(req,res) => {

            const encoder = new TextEncoder()
            const bytes = encoder.encode()

            let msg = wm.v388.protobuf.GhostTrail.encode({
                carId: 999999,
                area: 0,
                ramp: 0,
                playedAt: 1710795097,
                playedPlace: (await PlaceAcquire()).place,
                trail: bytes
            })

            common.sendResponse(msg,res)

        })

        app.post('/method/load_revenges',async(req,res) => {

            let msg = wm.v388.protobuf.LoadRevengesResponse.encode({
                error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS
            })

            common.sendResponse(msg,res)
        })
    }
}