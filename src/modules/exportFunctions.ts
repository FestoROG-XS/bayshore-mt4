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
let v388 = wm.v388.protobuf
export default class ExportFuncModule extends Module {register(app: Application): void {}}

export async function isVaild(val:any) {
    return (val == null || val == undefined) ? undefined : val
}

export function getTimestamp(){
    return Math.floor(new Date().getTime() / 1000)
}