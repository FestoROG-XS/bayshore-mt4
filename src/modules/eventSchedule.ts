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
import { randomInt } from "crypto";
export default class ExportModule extends Module {
    register(app: Application): void {}
}
export async function OCMSchedule(time:number,startMainDraw:boolean){

    let qualifyingPeriodStartAt: number;
    let qualifyingPeriodCloseAt: number;
    let competitionStartAt: number;
    let competitionCloseAt: number;
    

    if (startMainDraw == false){
        qualifyingPeriodStartAt = time,
        qualifyingPeriodCloseAt = time + 86400,
        competitionStartAt = time + 86400,
        competitionCloseAt = time + 86400*2
    }
    else {
        qualifyingPeriodStartAt = time - 86400*2,
        qualifyingPeriodCloseAt = time - 86400,
        competitionStartAt = time,
        competitionCloseAt = time + 86400
    }

    let data = wm.v388.protobuf.GhostCompetitionSchedule.create({
        competitionId: 1,
        qualifyingPeriodStartAt,
        qualifyingPeriodCloseAt,
        competitionStartAt,
        competitionCloseAt,
        competitionEndAt: competitionCloseAt,
        lengthOfPeriod: 86400,
        lengthOfInterval: 3600,
        area: 0,
        minigamePatternId: 0
    })

    return {data}

}