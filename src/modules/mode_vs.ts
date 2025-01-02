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
const db = new PrismaClient();

export default class ModeVSModule extends Module {
    register(app: Application): void {
    }
}

export async function saveGame_InstoreVS(data: wm.v388.protobuf.SaveGameResultRequest.IVersusBattleResult, carid: number) {
    
    await db.car.update({
        where: {
            carId: carid,
        },
        data: {
            vsPlayCount: data.vsPlayCount,
            vsBurstCount: common.sanitizeInputNotZero(data.vsBurstCount),
            vsStarCount: common.sanitizeInputNotZero(data.vsStarCount),
            vsCoolOrWild: common.sanitizeInputNotZero(data.vsCoolOrWild),
            vsSmoothOrRough: common.sanitizeInputNotZero(data.vsSmoothOrRough)
        }
    })

    return;

}