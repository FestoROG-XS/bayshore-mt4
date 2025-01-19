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
import Long from "long";
const db = new PrismaClient();

export default class ModeStoryModule {
    register(app: Application): void {}
}

export async function saveGame_Story(data: wm.v388.protobuf.SaveGameResultRequest.IStoryResult, carid: number) {

    let stLoseBits;
    if (data.stLoseBits == null || data.stLoseBits == undefined) stLoseBits = undefined;
    else
        (Long.isLong(data.stLoseBits)) ? stLoseBits = common.getBigIntFromLong(data.stLoseBits)
                                       : stLoseBits = data.stLoseBits;

    await db.car.update({
        where: {
            carId: carid
        },
        data: {
            stPlayCount: common.sanitizeInput(data.stPlayCount),
            tuningPoint: common.sanitizeInput(data.tuningPoint),
            stClearBits: common.sanitizeInput(data.stClearBits),
            stClearDivCount: common.sanitizeInput(data.stClearDivCount),
            stClearCount: common.sanitizeInput(data.stClearCount),
            stLoseBits: stLoseBits,
            stLose: common.sanitizeInput(data.stLose),
            ownedBgm: common.sanitizeInput(data.ownedBgm),
            ownedMeters: common.sanitizeInput(data.ownedMeters)
        }
    })

    return;

}