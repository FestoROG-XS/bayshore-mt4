import { Application } from "express";
import { Module } from "module";

// Import Proto
import * as wm from "../wmmt/v388.proto";
import * as wmsrv from "../wmmt/service.proto";

// Import Util
import * as common from "../util/common";

// Implement DB
import { PrismaClient } from "@prisma/client";
import { FAULT } from "../util/log";
import path from "path";
import { getCar, JIANGMEN, REACT } from "../util/general";
import { time } from "console";
const db = new PrismaClient();

export default class AttractModule extends Module {
    register(app: Application): void {
        
        app.post('/method/ping', async(req,res) => {
            try {
                
                const reqBody = wm.v388.protobuf.PingRequest.decode(req.body);

                let resp = wm.v388.protobuf.PingResponse.encode({
                    error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                    pong:  1
                })
        
                common.sendResponse(resp,res);
            } catch (ex:any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }
        })

        app.get('/resource/file_list', (req,res) => {

            try {

                let files : wm.v388.protobuf.FileList.IFileInfo[] = []

                files.push(wm.v388.protobuf.FileList.FileInfo.create({
                    
                        fileId: 1,
                        fileType: wm.v388.protobuf.FileType.FILE_PROMOTION_ANNOUNCEMENT,
                        fileSize: 588490,
                        url: 'https://localhost:9002/static/ATTRACT.nut',
                        sha1sum: new Uint8Array(Buffer.from('139aaf0f8baf11493fcde66ff5826aa31850a978', 'hex')),
                        notBefore: common.dt2ts(new Date("2024-12-31T00:00:00")),
                        notAfter: common.dt2ts(new Date("2025-12-31T00:00:00"))
                    
                }))

                common.sendResponse(wm.v388.protobuf.FileList.encode({
                    files: files,
                    interval: 0
                }),res);
            } catch (ex:any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }
        })

        app.get('/static/:filename', (req,res) => {

            try {
                const folder = '/home/user/MT4/contents/'
                res.sendFile(path.resolve(folder,req.params.filename), { cacheControl: false })
            } catch (ex:any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }

        })

        // app.get('/resource/place_list', (req,res) => {

        //     let places : wm.v388.protobuf.IPlace[] = [];
        //     places.push(wm.v388.protobuf.Place.create({
        //         shopName: 'REACT Gamezone 001',
        //         placeId: 'CHN048001',
        //         regionId: 10,
        //         country: 'CHN'
        //     }));

        //     common.sendResponse(wm.v388.protobuf.PlaceList.encode({
        //         places: places
        //     }),res);

        // })

        app.get('/resource/ranking', async(req,res) => {

            try {

                let lists : wmsrv.v388.protobuf.Ranking.IList[] = []

                // TimeTrial Data
                const taArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
                for (const idx of taArr) {

                    let topRecords : wmsrv.v388.protobuf.Ranking.IEntry[] = [];

                    const courseRecord = await db.timeTrial.findMany({
                        where: {
                            course: idx
                        },
                        orderBy: {
                            time: 'asc'
                        },
                        take: 20 // Not Sure
                    })
                    
                    for ( let i = 0 ; i < courseRecord.length ; i++ ) {

                        const car = await getCar(courseRecord[i].carId)

                        topRecords.push(wmsrv.v388.protobuf.Ranking.Entry.create({
                            rank: i+1,
                            result: courseRecord[i].time,
                            carId: courseRecord[i].carId,
                            name: car.name,
                            regionId: car.regionId,
                            model: car.model,
                            visualModel: car.visualModel,
                            defaultColor: car.defaultColor,
                            tunePower: courseRecord[i].tunePower,
                            tuneHandling: courseRecord[i].tuneHandling,
                            title: car.title,
                            level: car.level
                        }))
                    }

                    lists.push(wmsrv.v388.protobuf.Ranking.List.create({
                        rankingType: idx,
                        topRecords: topRecords
                    }))
                }

                // VS
                let vsRecords : wmsrv.v388.protobuf.Ranking.IEntry[] = [];
                const vsRecord = await db.car.findMany({
                    orderBy: {
                        vsStarCount: 'desc'
                    },
                    take: 20
                })

                for ( let i = 0 ; i < vsRecord.length ; i++ ) {

                    vsRecords.push(wmsrv.v388.protobuf.Ranking.Entry.create({
                        rank: i+1,
                        result: vsRecord[i].vsStarCount,
                        carId: vsRecord[i].carId,
                        name: vsRecord[i].name,
                        regionId: vsRecord[i].regionId,
                        model: vsRecord[i].model,
                        visualModel: vsRecord[i].visualModel,
                        defaultColor: vsRecord[i].defaultColor,
                        tunePower: vsRecord[i].tunePower,
                        tuneHandling: vsRecord[i].tuneHandling,
                        title: vsRecord[i].title,
                        level: vsRecord[i].level
                    }))

                }

                lists.push(wmsrv.v388.protobuf.Ranking.List.create({
                    rankingType: 100,
                    topRecords: vsRecords
                }))

                // MaxiCoin
                // VS
                let versusRecords : wmsrv.v388.protobuf.Ranking.IEntry[] = [];
                const versusRecord = await db.car.findMany({
                    orderBy: {
                        maxiCoin: 'desc'
                    },
                    take: 20
                })

                for ( let i = 0 ; i < versusRecord.length ; i++ ) {

                    versusRecords.push(wmsrv.v388.protobuf.Ranking.Entry.create({
                        rank: i+1,
                        result: versusRecord[i].vsStarCount,
                        carId: versusRecord[i].carId,
                        name: versusRecord[i].name,
                        regionId: versusRecord[i].regionId,
                        model: versusRecord[i].model,
                        visualModel: versusRecord[i].visualModel,
                        defaultColor: versusRecord[i].defaultColor,
                        tunePower: versusRecord[i].tunePower,
                        tuneHandling: versusRecord[i].tuneHandling,
                        title: versusRecord[i].title,
                        level: versusRecord[i].level
                    }))

                }

                lists.push(wmsrv.v388.protobuf.Ranking.List.create({
                    rankingType: 101,
                    topRecords: versusRecords
                }))

                common.sendResponse(wmsrv.v388.protobuf.Ranking.encode({
                    lists: lists
                }),res)

            } catch (ex:any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }

        })


        // FIXED TEST DATA BELOW

        // app.get('/resource/crown_list', async (req,res) => {
        //     const areaArr = [0,2,4,6,8,10,12,13,14];
        //     const car = await getCar(5001);
        //     let crowns : wmsrv.v388.protobuf.ICrown[] = [];
        //     for (const idx of areaArr) {
        //         crowns.push({
        //             carId: 5001,
        //             area: idx,
        //             unlockAt: 0,
        //             car: {
        //                 ...car,
        //                 lastPlayedAt: common.dt2ts(car.lastPlayedAt!)
        //             }
        //         })
        //     }

        //     common.sendResponse(wmsrv.v388.protobuf.CrownList.encode({
        //         crowns: crowns
        //     }),res)
        // })

        app.post('/method/update_user_lock', (req,res) => {
            common.sendResponse(wm.v388.protobuf.UpdateUserLockResponse.encode({
                error:wm.v388.protobuf.ErrorCode.ERR_SUCCESS
            }),res)
        })

    }
}
