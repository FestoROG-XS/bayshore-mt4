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
let v388 = wm.v388.protobuf

export default class TeamModule extends Module {
    register(app: Application): void {

        app.post('/method/load_team_information', async(req,res) => {
            
            let response = wm.v388.protobuf.LoadTeamInformationResponse.encode({
                error: v388.ErrorCode.ERR_SUCCESS
            })

            common.sendResponse(response,res)
        })

    }}