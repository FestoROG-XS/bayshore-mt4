import { Application } from "express";
import { Module } from "module";
import { prisma } from ".."
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
import { flush } from "@sentry/node";
import { error } from "console";



export default class GhostModule extends Module {
    register(app: Application): void {


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
