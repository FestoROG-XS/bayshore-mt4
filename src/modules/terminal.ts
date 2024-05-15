import { Application } from "express";
import { Module } from "module";
import { prisma } from ".."
// Import Proto
import * as wm from "../wmmt/v388.proto";
import * as srv from "../wmmt/services.proto"

// Import Util
import * as common from "../util/common";
import { calendarFormat, months } from "moment";
import { endianness } from "os";
import { getEnvironmentData } from "worker_threads";
import { randomInt, randomUUID } from "crypto";
import { OCMSchedule } from "./eventSchedule";
import { PlaceAcquire } from "./startup";
import { TextEncoder } from "util";
import { spawn } from "child_process";
import { flush } from "@sentry/node";
let v388 = wm.v388.protobuf

export default class TerminalModule extends Module {
    register(app: Application): void {

        app.post('/method/save_terminal_result', async(req,res)=>{

            let body = v388.SaveTerminalResultRequest.decode(req.body)
            let user = await prisma.user.findFirst({
                where: {
                    userId: body.userId
                }
            })

            let carOrder = user!.carOrder
            let tutorials = user!.tutorials

            if (body.carOrder.length != 0) {
                console.info(`| INFO | CarOrder updated. -> ${body.carOrder}`)
                carOrder = body.carOrder
            }

            await prisma.user.update({
                where: {
                    dbId: user!.dbId
                },
                data: {
                    lastLogin: body.timestamp,
                    carOrder,
                    tutorials
                }
            })

            let response = v388.SaveTerminalResultResponse.encode({
                error: v388.ErrorCode.ERR_SUCCESS
            })

            common.sendResponse(response,res)
        })

    }
}