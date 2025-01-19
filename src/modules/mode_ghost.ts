import { Application } from "express";
import { Module } from "module";

// Import Proto
import * as wm from "../wmmt/v388.proto";
import * as wmsrv from "../wmmt/service.proto";

// Import Util
import * as common from "../util/common";
import * as ghost_area from "../util/ghost_area";

// Implement DB
import { PrismaClient } from "@prisma/client";
import { getCar, getTeam} from "../util/general";
import { DEBUG, FAULT } from "../util/log";
const db = new PrismaClient();

export default class GhostModule {
    register(app: Application): void {
    	app.post('/method/load_ghost_battle_info', async(req,res) => {
    		const reqBody = wm.v388.protobuf.LoadGhostBattleInfoRequest.decode(req.body)

    		let car = await db.car.findFirst({
				where:{
					carId: reqBody.carId
				}
			});

			let cardata: wm.v388.protobuf.Car = wm.v388.protobuf.Car.create({
			    "name": "ＡｎＲ３４",
			    "manufacturer": 0,
			    "model": 23,
			    "visualModel": 3,
			    "defaultColor": 0,
			    "customColor": 0,
			    "wheel": 0,
			    "wheelColor": 0,
			    "aero": 0,
			    "bonnet": 0,
			    "wing": 0,
			    "mirror": 0,
			    "sticker": 0,
			    "stickerColor": 0,
			    "neon": 0,
			    "trunk": 0,
			    "plate": 0,
			    "plateColor": 0,
			    "specialSticker": 0,
			    "specialStickerColor": 0,
			    "tunePower": 0,
			    "tuneHandling": 0,
			    "title": 0,
			    "level": 47
			})

			let defaultOpponent: wm.v388.protobuf.GhostCar = wm.v388.protobuf.GhostCar.create({
				car: cardata,
				area: 1,
				ramp: 1,
				revengeLevel: 1,
				nonhuman: true,
				ghostLevel: 1,
			})

			let msg = {
				error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
				friendCars: null,
				defaultOpponent: defaultOpponent,
				hasRevenges: false,
				hasHistory: false,
				stickers: null,
			};
			let resp = wm.v388.protobuf.LoadGhostBattleInfoResponse.encode(msg);
			common.sendResponse(resp,res);
    	}) 
    	app.post('/method/load_revenges', async(req,res) => {
    		const reqBody = wm.v388.protobuf.LoadRevengesRequest.decode(req.body)

    		let car = await db.car.findFirst({
				where:{
					carId: reqBody.carId
				}
			});

			let msg = {
				error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
				ghosts: null,
			};
			let resp = wm.v388.protobuf.LoadRevengesResponse.encode(msg);
			common.sendResponse(resp,res);

    	})
    	app.get('/resource/ghost_summary', async(req,res) => {
    		console.log(req.body)
    		let ghost_level: number = Number(req.query.ghost_level) || 1
    		let area: number = Number(req.query.area) || 1

    		let cardata: wm.v388.protobuf.Car = wm.v388.protobuf.Car.create({
    			"carId": 65536,
			    "name": "ＡｎＲ３４",
			    "manufacturer": 0,
			    "model": 23,
			    "visualModel": 3,
			    "defaultColor": 0,
			    "customColor": 0,
			    "wheel": 0,
			    "wheelColor": 0,
			    "aero": 0,
			    "bonnet": 0,
			    "wing": 0,
			    "mirror": 0,
			    "sticker": 0,
			    "stickerColor": 0,
			    "neon": 0,
			    "trunk": 0,
			    "plate": 0,
			    "plateColor": 0,
			    "specialSticker": 0,
			    "specialStickerColor": 0,
			    "tunePower": 0,
			    "tuneHandling": 0,
			    "title": 0,
			    "level": 47
			})
			let ghost_areas = await ghost_area.GhostArea(area);

			let testGhost: wm.v388.protobuf.GhostCar = wm.v388.protobuf.GhostCar.create({
				car: cardata,
				area: area,
				ramp: ghost_areas.rampVal,
				revengeLevel: 1,
				nonhuman: false,
				ghostLevel: ghost_level,
			})    		
			let ghosts : wm.v388.protobuf.IGhostCar[] = []
			ghosts.push(testGhost)
			console.log(ghosts)
			common.sendResponse(wm.v388.protobuf.GhostSummary.encode({
				ghosts: ghosts,
                }),res);

    	})
    	app.get('/resource/ghost_trail', async(req,res) => {
    		let car_id: number = Number(req.query.car_id) || 1
    		let area: number = Number(req.query.area) || 1
    		let foreign: number = Number(req.query.foreign) || 0

    		let ghost_areas = await ghost_area.GhostArea(area);


    		let data: wm.v388.protobuf.GhostTrail = wm.v388.protobuf.GhostTrail.create({
    			carId: car_id,
    			area: area,
    			ramp: ghost_areas.rampVal,
    			playedAt: 1,
    			trail: new Uint8Array(0),
    		})
    		console.log(data)
    		common.sendResponse(wm.v388.protobuf.GhostTrail.encode(data), res);
    	})
    	app.post('/method/register_ghost_trail', async(req,res) => {
    		const reqBody = wm.v388.protobuf.RegisterGhostTrailRequest.decode(req.body);
    		
    		let data = {
    			carId: Number(reqBody.ghost.car.carId),
            	area: Number(reqBody.ghost.area), 
            	ramp: Number(reqBody.ghost.ramp), 
            	trail: Buffer.from(reqBody.trail) || undefined,
            	playedAt: Number(reqBody.ghost.car.lastPlayedAt),
            	tunePower: reqBody.ghost.car.tunePower || undefined,
            	tuneHandling: reqBody.ghost.car.tuneHandling || undefined,
            	IsCrown: false,
    		}
    		console.log('Creating new trail entry');

            // Create new data
            await db.ghostTrail.create({
                data: data
            });
    		common.sendResponse(wm.v388.protobuf.RegisterGhostTrailResponse.encode({
    			error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
    		}), res);
    	})
    }
}
export async function saveGame_Ghost(data: wm.v388.protobuf.SaveGameResultRequest, carid: number){
	await db.ghostBattleRecord.create({
		data:{
			carId: carid,
			tunePower: data!.car!.tunePower,
			tuneHandling: data!.car!.tuneHandling,
			opponentCarId: data!.rgResult!.opponentCarId,
			opponentResult: data!.rgResult!.result,
			area: data!.rgResult!.area,
			playedAt: data!.playedAt,
		}
	})
	await db.car.update({
		where:{
			carId: carid
		},
		data:{
			maxiCoin: Number(data!.rgResult!.maxiCoin),
			rgPlayCount: data!.rgResult!.rgPlayCount,
			rgWinCount: Number(data!.rgResult!.rgWinCount),
			dressupPoint: Number(data!.rgResult!.dressupPoint),
			dressupLevel: Number(data!.rgResult!.dressupLevel),
			ownedDressupParts: Number(data!.rgResult!.ownedDressupParts),
		}
	})
}