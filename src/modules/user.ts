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
import { getTimestamp } from "./exportFunctions";
let v388 = wm.v388.protobuf
export default class UserModule extends Module {
    register(app: Application): void {

        app.post('/method/load_user', async (req, res) => {

            // For Actual Networking Function
            let body = wm.v388.protobuf.LoadUserRequest.decode(req.body)
            console.info(`| INFO | LOGIN ${body.accessCode}`)
            let mainUserId

            let userData = await prisma.user.findUnique({
                where: {
                    accessCode: body.accessCode
                }
            })

            let response;
            if (userData) {
                console.info(`| INFO | UserData Exist`)
                mainUserId = userData!.dbId
                let carGet = await prisma.car.count({
                    where: {
                        userId: userData.userId
                    }
                })

                let cars:wm.v388.protobuf.ICar[] = []
                let carStates:wm.v388.protobuf.LoadUserResponse.ICarState[] = []
                for (let i in userData.carOrder) {

                    let car = await prisma.car.findFirst({
                        where: {
                            carId: userData.carOrder[i]
                        }
                    })

                    cars.push(wm.v388.protobuf.Car.create({
                        ...car!
                    }))

                    carStates.push(wm.v388.protobuf.LoadUserResponse.CarState.create({
                        hasOpponentGhost: false
                    }))
                }

                response = wm.v388.protobuf.LoadUserResponse.encode({
                    error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                    userId: userData.userId,
                    numOfOwnedCars: carGet,
                    cars,
                    carStates,
                    hasHp600Car: false,
                    hp600Count: 0,
                    tutorials: userData.tutorials
                })
            }
            else {
                // Create User in database
                await prisma.user.create({
                    data: {
                        accessCode: body.accessCode
                    }
                })
                
                // reacquire
                let user = await prisma.user.findUnique({
                    where: {
                        accessCode: body.accessCode
                    }
                })

                console.info("| INFO | User Maded")
                mainUserId = user!.dbId
                response = wm.v388.protobuf.LoadUserResponse.encode({
                    error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                    userId: user!.userId,
                    accessCode: body.accessCode,
                    numOfOwnedCars: 0,
                    hp600Count: 0,
                    hasHp600Car: false,
                    tutorials: 0
                })
            }

            await prisma.user.update({
                where: {
                    dbId: mainUserId
                },
                data: {
                    lastLogin: getTimestamp()
                }
            })

            common.sendResponse(response!,res)
        })

        app.post('/method/create_user', async(req,res) => {
            
            let body = v388.CreateUserRequest.decode(req.body)

            // Create User in database
            await prisma.user.create({
                data: {
                    accessCode: body.accessCode
                }
            })
            
            // reacquire
            let user = await prisma.user.findUnique({
                where: {
                    accessCode: body.accessCode
                }
            })

            let response = v388.CreateUserResponse.encode({
                error: v388.ErrorCode.ERR_SUCCESS,
                accessCode: body.accessCode,
                userId: user!.userId
            })

            common.sendResponse(response,res)

        })

        

    }
}