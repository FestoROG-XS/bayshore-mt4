import { Application } from "express";
import { Module } from "module";

// Import Proto
import * as wm from "../wmmt/v388.proto";
import * as wmsrv from "../wmmt/service.proto";

// Import Util
import * as common from "../util/common";

// Implement DB
import { PrismaClient } from "@prisma/client";
import { BODY, DEBUG, FAULT } from "../util/log";
import path from "path";
import { getCar, getPlace, JIANGMEN, REACT } from "../util/general";
import { time } from "console";
const db = new PrismaClient();

export default class TeamModule extends Module {
    register(app: Application): void {

        app.post('/method/check_team_name', async(req,res) => {

            try {

                const reqBody = wm.v388.protobuf.CheckTeamNameRequest.decode(req.body);

                const result = await db.team.count({
                    where: {
                        teamName: reqBody.teamName
                    }
                })

                common.sendResponse(wm.v388.protobuf.CheckTeamNameResponse.encode({

                    error: (result > 0) ? wm.v388.protobuf.ErrorCode.ERR_NAME_CONFLICTED :
                                          wm.v388.protobuf.ErrorCode.ERR_SUCCESS

                }),res);


            } catch (ex:any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }

        })

        app.post('/method/create_team', async(req,res) => {

            try {

                const reqBody = wm.v388.protobuf.CreateTeamRequest.decode(req.body); 

                const user = await db.user.findFirst({
                    where: {
                        id: reqBody.userId
                    },
                    select: {
                        placeId: true,
                        carOrder: true
                    }
                })

                const result = await db.team.create({
                    data: {
                        leader: reqBody.userId,
                        teamName: reqBody.teamName,
                        placeId: user!.placeId
                    }
                })

                await db.user.update({
                    where: {
                        id: reqBody.userId
                    },
                    data: {
                        teamCarId: user!.carOrder[0],
                        teamId: result.id
                    }
                })

                DEBUG(`Team Created ${result.id}:: ${reqBody.teamName}`)

                common.sendResponse(wm.v388.protobuf.CreateTeamResponse.encode({
                    error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS
                }),res);

            } catch (ex:any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }

        })

        app.post('/method/search_team', async(req,res) => {

            try {

                const reqBody = wm.v388.protobuf.SearchTeamRequest.decode(req.body); 
                BODY(reqBody);

                if (reqBody.name.length > 0) {

                    DEBUG(`Using name search`);

                    const teamResult = await db.team.findMany({
                        where: {
                            teamName: { contains: reqBody.name }
                        }
                    })

                    const teamActual = await db.team.findFirst({
                        where: {
                            teamName: reqBody.name
                        }
                    })

                    // Prober Data push
                    let teams:wm.v388.protobuf.ITeam[] = [];
                    for (const data of teamResult) {

                        let numOfMemberCars = 0;

                        const leader = await db.user.findFirst({
                            where: {
                                id: data.leader
                            }
                        })

                        const leaderCar = await db.car.findFirst({
                            where: {
                                carId: leader!.teamCarId!
                            }
                        })

                        const users = await db.user.findMany({
                            where: {
                                teamId: data.id
                            }
                        })

                        for (const user of users) {
                            numOfMemberCars += user.carOrder.length;
                        }

                        teams.push(wm.v388.protobuf.Team.create({
                            teamId: data.id,
                            name: data.teamName,
                            numOfMembers: users.length,
                            numOfMemberCars: numOfMemberCars,
                            leaderUserId: data.leader,
                            leaderCarName: leaderCar!.name,
                            leaderRegionId: leaderCar!.regionId,
                            stickerFont: data.teamStickerFont,
                            fullfilled: (users.length >= 50),
                            closed: data.closed,
                            recruitmentSuspended: data.applying,
                            createdAt: common.dt2ts(data.createTime),
                            homePlace: getPlace(leader!.placeId)
                        }))

                    }

                    // Actual Data push
                    let nameMatchedTeam = null;
                    if (teamActual?.id != null && teamActual?.id != undefined) {

                        const users = await db.user.findMany({
                            where: {
                                teamId: teamActual.id
                            }
                        })

                        let numOfMemberCars = 0;
                        for (const user of users) {
                            numOfMemberCars += user.carOrder.length;
                        }

                        const leader = await db.user.findFirst({
                            where: {
                                id: teamActual.leader
                            }
                        })

                        const leaderCar = await db.car.findFirst({
                            where: {
                                carId: leader!.teamCarId!
                            }
                        })

                        nameMatchedTeam = wm.v388.protobuf.Team.create({
                            teamId: teamActual.id,
                            name: teamActual.teamName,
                            numOfMembers: users.length,
                            numOfMemberCars: numOfMemberCars,
                            leaderUserId: teamActual.leader,
                            leaderCarName: leaderCar!.name,
                            leaderRegionId: leaderCar!.regionId,
                            stickerFont: teamActual.teamStickerFont,
                            fullfilled: (users.length >= 50),
                            closed: teamActual.closed,
                            recruitmentSuspended: teamActual.applying,
                            createdAt: common.dt2ts(teamActual.createTime),
                            homePlace: getPlace(leader!.placeId)
                        })
                    }

                    common.sendResponse(wm.v388.protobuf.SearchTeamResponse.encode({
                        error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                        teams: teams,
                        nameMatchedTeam: nameMatchedTeam
                    }),res)

                } else {

                    DEBUG(`Using Place Search, push all data...`);

                    let teams: wm.v388.protobuf.ITeam[] = [];
                    const teamsData = await db.team.findMany();

                    for (const data of teamsData) {

                        let numOfMemberCars = 0;

                        const leader = await db.user.findFirst({
                            where: {
                                id: data.leader
                            }
                        })

                        const leaderCar = await db.car.findFirst({
                            where: {
                                carId: leader!.teamCarId!
                            }
                        })

                        const users = await db.user.findMany({
                            where: {
                                teamId: data.id
                            }
                        })

                        for (const user of users) {
                            numOfMemberCars += user.carOrder.length;
                        }

                        teams.push(wm.v388.protobuf.Team.create({
                            teamId: data.id,
                            name: data.teamName,
                            numOfMembers: users.length,
                            numOfMemberCars: numOfMemberCars,
                            leaderUserId: data.leader,
                            leaderCarName: leaderCar!.name,
                            leaderRegionId: leaderCar!.regionId,
                            stickerFont: data.teamStickerFont,
                            fullfilled: (users.length >= 50),
                            closed: data.closed,
                            recruitmentSuspended: data.applying,
                            createdAt: common.dt2ts(data.createTime),
                            homePlace: getPlace(leader!.placeId)
                        }))

                    }

                    common.sendResponse(wm.v388.protobuf.SearchTeamResponse.encode({

                        error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                        teams: teams

                    }),res)

                }

            } catch (ex:any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }

        })

        app.post('/method/load_team_information', async(req,res) => {

            try{

                const reqBody = wm.v388.protobuf.LoadTeamInformationRequest.decode(req.body);
                const user = await db.user.findFirst({
                    where: {
                        id: reqBody.userId
                    }
                })

                if (user!.teamId == null || user!.teamId == undefined) {

                    DEBUG(`User ${reqBody.userId} has no team`);

                    let noticeEntries : wm.v388.protobuf.LoadTeamInformationResponse.INoticeEntry[] = [];
                    let newsEntries : wm.v388.protobuf.LoadTeamInformationResponse.INewsEntry[] = [];
    
                    const resp = wm.v388.protobuf.LoadTeamInformationResponse.encode({
                        error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                        noticeEntries: noticeEntries,
                        newsEntries: newsEntries
                    })
    
                    common.sendResponse(resp,res);

                } else {

                    DEBUG(`User ${reqBody.userId} with Team ${user!.teamId}`);
                    const team = await db.team.findFirst({
                        where: {
                            id: user!.teamId
                        }
                    })

                    let noticeEntries : wm.v388.protobuf.LoadTeamInformationResponse.INoticeEntry[] = [];
                    let newsEntries : wm.v388.protobuf.LoadTeamInformationResponse.INewsEntry[] = [];

                    const teamOperationHistorys = await db.teamOperationHistory.findMany({
                        where: {
                            teamId: team!.id
                        }
                    })

                    for (const data of teamOperationHistorys) {
                        
                        newsEntries.push(wm.v388.protobuf.LoadTeamInformationResponse.NewsEntry.create({
                            newsType: data.noticeType,
                            datetime: common.dt2ts(data.operationTime),
                            field_1: data.field1,
                            field_2: data.field2
                        }))

                    }

                    // leader user data
                    const leader = await db.user.findFirst({
                        where: {
                            id: team!.leader
                        }
                    })

                    const leaderCar= await db.car.findFirst({
                        where: {
                            carId: leader!.teamCarId!
                        }
                    })

                    const teamUsers = await db.user.findMany({
                        where: {
                            teamId: team!.id
                        }
                    })

                    let numOfMemberCars = 0;
                    for (const user of teamUsers) {
                        numOfMemberCars += user.carOrder.length
                    }

                    const teamData = wm.v388.protobuf.Team.create({
                        teamId: team!.id,
                        name: team!.teamName,
                        numOfMembers: teamUsers.length,
                        numOfMemberCars: numOfMemberCars,
                        leaderUserId: team!.leader,
                        leaderCarName: leaderCar!.name,
                        leaderRegionId: leaderCar!.regionId,
                        stickerFont: team!.teamStickerFont,
                        fullfilled: (teamUsers.length >= 50),
                        closed: team!.closed,
                        recruitmentSuspended: team!.applying,
                        createdAt: common.dt2ts(team!.createTime),
                        homePlace: getPlace(leader!.placeId)
                    })


                    // Check User is leader or not, idk why team member can handle the applicants
                    // bamco stuff lol, change it to irl logic lolll
                    let applicants = undefined;
                    if (reqBody.userId == team!.leader) {

                        let teamApplicantArray : wm.v388.protobuf.ITeamApplicant[] = [];
                        
                        const applicantDatas = await db.teamApplicants.findMany({
                            where: {
                                targetTeamId: team!.id
                            }
                        })

                        for (const data of applicantDatas) {

                            if (common.daysLeft(common.dt2ts(data.operationTime)) <= 0) {

                                DEBUG(`${data.id} expired, deleted.`)

                                await db.teamApplicants.delete({
                                    where: {
                                        id: data.id
                                    }
                                })

                            } else {
                                const thisUser = await db.user.findFirst({
                                    where: {
                                        id: data.userId
                                    }
                                })
    
                                const thisUserFirstCar = await getCar(thisUser!.carOrder[0])
    
                                teamApplicantArray.push(wm.v388.protobuf.TeamApplicant.create({
                                    userId: data.userId,
                                    car: {
                                        ...thisUserFirstCar,
                                        lastPlayedAt: common.dt2ts(thisUserFirstCar.lastPlayedAt!)
                                    },
                                    numOfOwnedCars: thisUser!.carOrder.length,
                                    expiresAt: common.daysLeft(common.dt2ts(data.operationTime))
                                }))
                            }

                        }

                    }

                    const resp = wm.v388.protobuf.LoadTeamInformationResponse.encode({
                        error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                        noticeEntries: noticeEntries,
                        newsEntries: newsEntries,
                        teamCreatedAt: common.dt2ts(team!.createTime),
                        applying: team!.applying, // I Really dk what is this
                        teamCarId: user!.teamCarId,
                        team: teamData,
                        applicants: applicants
                    })
    
                    common.sendResponse(resp,res);

                }
                
            } catch (ex: any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }
        })

        app.post('/method/join_team', async(req,res) => {
            
            try {

                const reqBody = wm.v388.protobuf.JoinTeamRequest.decode(req.body);

                await db.teamApplicants.create({
                    data: {
                        userId: reqBody.userId,
                        targetTeamId: reqBody.teamId
                    }
                })

                common.sendResponse(wm.v388.protobuf.JoinTeamResponse.encode({
                    error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS
                }),res)

            } catch (ex: any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }

        })

        app.post('/method/approve_team_applicants', async(req,res) => {

            try {

                const reqBody = wm.v388.protobuf.ApproveTeamApplicantsRequest.decode(req.body);

                const team = await db.team.findFirst({
                    where: {
                        leader: reqBody.userId
                    }
                })

                for (const user of reqBody.approvedUsers) {

                    // handle approveduser only

                    const targetUser = await db.user.findFirst({
                        where: {
                            id: user
                        }
                    })

                    await db.user.update({
                        where: {
                            id: user,
                        },
                        data: {
                            teamId: team!.id,
                            teamCarId: targetUser!.carOrder[0]
                        }
                    })

                }

                // after applicant handle, re-acquire data again
                const members = await db.user.findMany({
                    where: {
                        teamId: team!.id
                    }
                })

                let numOfMemberCars = 0;
                for (const data of members) {
                    numOfMemberCars += data.carOrder.length;
                }

                const remainHandles = await db.teamApplicants.count({
                    where: {
                        targetTeamId: team!.id
                    }
                })

                const resp = wm.v388.protobuf.ApproveTeamApplicantsResponse.encode({
                    error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                    numOfMembers: members.length,
                    numOfMemberCars: numOfMemberCars,
                    numOfApplicants: remainHandles
                })

                common.sendResponse(resp,res);

            } catch (ex: any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }

        })

        app.post('/method/leave_team', async(req,res) => {

            try {
                
                const reqBody = wm.v388.protobuf.LeaveTeamRequest.decode(req.body);

                await db.user.update({
                    where: {
                        id: reqBody.userId
                    },
                    data: {
                        teamCarId: null,
                        teamId: null
                    }
                })

                common.sendResponse(wm.v388.protobuf.LeaveTeamResponse.encode({
                    error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS
                }),res)

            } catch (ex: any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }

        })

        app.post('/method/dissolve_team', async(req,res) => {

            try {
                
                const reqBody = wm.v388.protobuf.DissolveTeamRequest.decode(req.body);

                // Delete Team Data
                const team = await db.team.findFirst({
                    where: {
                        leader: reqBody.userId
                    }
                })

                await db.user.updateMany({
                    where: {
                        teamId: team!.id,
                    },
                    data: {
                        teamId: null,
                        teamCarId: null
                    }
                })

                await db.team.delete({
                    where: {
                        id: team!.id
                    }
                })

                common.sendResponse(wm.v388.protobuf.DissolveTeamResponse.encode({
                    error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS
                }),res)

            } catch (ex: any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }

        })

        app.post('/method/load_team_members', async(req,res) => {

            try {

                const reqBody = wm.v388.protobuf.LoadTeamMembersRequest.decode(req.body);

                const team = await db.team.findFirst({
                    where: {
                        id: reqBody.teamId
                    }
                })

                // team data
                let members: wm.v388.protobuf.ITeamMember[] = [];

                const leader = await db.user.findFirst({
                    where: {
                        id: team!.leader
                    }
                })

                const leaderCar= await db.car.findFirst({
                    where: {
                        carId: leader!.teamCarId!
                    }
                })

                const teamUsers = await db.user.findMany({
                    where: {
                        teamId: team!.id
                    }
                })

                let numOfMemberCars = 0;
                for (const user of teamUsers) {
                    numOfMemberCars += user.carOrder.length;
                    const car = await getCar(user.teamCarId!);
                    members.push(wm.v388.protobuf.TeamMember.create({
                        userId: user.id,
                        car: {
                            ...car,
                            lastPlayedAt: common.dt2ts(car.lastPlayedAt!)
                        },
                        numOfOwnedCars: user.carOrder.length
                    }))
                }

                const teamData = wm.v388.protobuf.Team.create({
                    teamId: team!.id,
                    name: team!.teamName,
                    numOfMembers: teamUsers.length,
                    numOfMemberCars: numOfMemberCars,
                    leaderUserId: team!.leader,
                    leaderCarName: leaderCar!.name,
                    leaderRegionId: leaderCar!.regionId,
                    stickerFont: team!.teamStickerFont,
                    fullfilled: (teamUsers.length >= 50),
                    closed: team!.closed,
                    recruitmentSuspended: team!.applying,
                    createdAt: common.dt2ts(team!.createTime),
                    homePlace: getPlace(leader!.placeId)
                })

                const resp = wm.v388.protobuf.LoadTeamMembersResponse.encode({
                    error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                    team: teamData,
                    members: members
                })

                common.sendResponse(resp,res);


            } catch (ex: any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }

        })

        app.post('/method/load_team_applicants', async(req,res) => {

            try {

                const reqBody = wm.v388.protobuf.LoadTeamApplicantsRequest.decode(req.body); 

                let teamApplicantArray : wm.v388.protobuf.ITeamApplicant[] = [];
                        
                const applicantDatas = await db.teamApplicants.findMany({
                    where: {
                        targetTeamId: reqBody.teamId
                    }
                })

                for (const data of applicantDatas) {

                    if (common.daysLeft(common.dt2ts(data.operationTime)) <= 0) {

                        DEBUG(`${data.id} expired, deleted.`)

                        await db.teamApplicants.delete({
                            where: {
                                id: data.id
                            }
                        })

                    } else {
                        const thisUser = await db.user.findFirst({
                            where: {
                                id: data.userId
                            }
                        })

                        const thisUserFirstCar = await getCar(thisUser!.carOrder[0])

                        teamApplicantArray.push(wm.v388.protobuf.TeamApplicant.create({
                            userId: data.userId,
                            car: {
                                ...thisUserFirstCar,
                                lastPlayedAt: common.dt2ts(thisUserFirstCar.lastPlayedAt!)
                            },
                            numOfOwnedCars: thisUser!.carOrder.length,
                            expiresAt: common.daysLeft(common.dt2ts(data.operationTime))
                        }))
                    }

                }

                common.sendResponse(wm.v388.protobuf.LoadTeamApplicantsResponse.encode({
                    error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                    applicants: teamApplicantArray
                }),res)


            } catch (ex: any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }

        })

        app.post('/method/update_team', async(req,res) => {

            try {

                const reqBody = wm.v388.protobuf.UpdateTeamRequest.decode(req.body);
                BODY(reqBody)

                const user = await db.user.findFirst({
                    where: {
                        id: reqBody.userId
                    }
                })

                await db.team.update({
                    where: {
                        id: user!.teamId!
                    },
                    data: {
                        teamStickerFont: common.sanitizeInput(reqBody.teamStickerFont),
                        closed: reqBody.closed,
                        applying: reqBody.closed
                    }
                })

                common.sendResponse(wm.v388.protobuf.UpdateTeamResponse.encode({
                    error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS
                }),res);


            } catch (ex: any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            }

        })

        app.post('/method/update_team_stickers', async(req,res) => {

            try {

                const reqBody = wm.v388.protobuf.UpdateTeamStickersRequest.decode(req.body);
                const user = await db.user.findFirst({
                    where: {
                        id: reqBody.userId
                    }
                })

                const team = await db.team.findFirst({
                    where: {
                        id: user!.teamId!
                    }
                })

                const teamStickersData = await db.teamStickers.findMany({
                    where: {
                        teamId: user!.teamId!
                    }
                })

                let earnedStickers:wm.v388.protobuf.ITeamSticker[] = [];
                let teamStickers:wm.v388.protobuf.ITeamSticker[] = [];

                for (const sticker of teamStickersData) {

                    const delta = common.daysDelta(common.dt2ts(sticker.operationTime));
                    const targetTeam = await db.team.findFirst({
                        where: {
                            id: sticker.targetTeamId
                        },
                        select: {
                            teamName: true
                        }
                    })

                    if (delta == 0) {

                        earnedStickers.push(wm.v388.protobuf.TeamSticker.create({
                            teamId: sticker.targetTeamId,
                            teamName: targetTeam!.teamName,
                            count: sticker.count
                        }))

                    }

                    teamStickers.push(wm.v388.protobuf.TeamSticker.create({
                        teamId: sticker.targetTeamId,
                        teamName: targetTeam!.teamName,
                        count: sticker.count
                    }))

                }

                let notice = undefined;
                if (team!.prizeNumber != null && team!.prizeNumber > 0) {
                    notice = wm.v388.protobuf.UpdateTeamStickersResponse.PrizeNotice.create({
                        name: team!.prizeName!,
                        number: team!.prizeNumber
                    })
                }

                const resp = wm.v388.protobuf.UpdateTeamStickersResponse.encode({
                    error: wm.v388.protobuf.ErrorCode.ERR_SUCCESS,
                    earnedStickers,
                    teamStickers,
                    numOfEarnedStickersAfter: earnedStickers.length,
                    numOfEarnedStickersBefore:  teamStickers.length - earnedStickers.length,
                    numOfEarnedStickersToday: earnedStickers.length,
                    notice
                })

                common.sendResponse(resp,res);

            } catch (ex: any) {
                FAULT(req.url,ex);
                res.status(503).send('NBGI Services Error');
            } 

        })

        app.get('/resource/active_team_list', async (req,res) => {

            let activeTeams : wm.v388.protobuf.ActiveTeamList.IActiveTeam[] = [];
            // Active Team List: 5 team with desc's teamsticker list

            const ActiveTeamTop5 = await db.teamStickers.groupBy({
                by: ['teamId'], // 按 teamId 分组
                _count: {
                  id: true, // 统计每组的数量，假设表中有一个 id 字段
                },
                orderBy: {
                  _count: {
                    id: 'desc', // 按计数降序排序
                  },
                },
            });

            for (const data of ActiveTeamTop5) {
                
                const team = await db.team.findFirst({
                    where: {
                        id: data.teamId,
                    }
                })

                // team data
                let members: wm.v388.protobuf.ITeamMember[] = [];

                const leader = await db.user.findFirst({
                    where: {
                        id: team!.leader
                    }
                })

                const leaderCar= await db.car.findFirst({
                    where: {
                        carId: leader!.teamCarId!
                    }
                })

                const teamUsers = await db.user.findMany({
                    where: {
                        teamId: team!.id
                    }
                })

                let numOfMemberCars = 0;
                for (const user of teamUsers) {
                    numOfMemberCars += user.carOrder.length;
                    const car = await getCar(user.teamCarId!);
                    members.push(wm.v388.protobuf.TeamMember.create({
                        userId: user.id,
                        car: {
                            ...car,
                            lastPlayedAt: common.dt2ts(car.lastPlayedAt!)
                        },
                        numOfOwnedCars: user.carOrder.length
                    }))
                }

                const teamData = wm.v388.protobuf.Team.create({
                    teamId: team!.id,
                    name: team!.teamName,
                    numOfMembers: teamUsers.length,
                    numOfMemberCars: numOfMemberCars,
                    leaderUserId: team!.leader,
                    leaderCarName: leaderCar!.name,
                    leaderRegionId: leaderCar!.regionId,
                    stickerFont: team!.teamStickerFont,
                    fullfilled: (teamUsers.length >= 50),
                    closed: team!.closed,
                    recruitmentSuspended: team!.applying,
                    createdAt: common.dt2ts(team!.createTime),
                    homePlace: getPlace(leader!.placeId)
                })

                activeTeams.push(wm.v388.protobuf.ActiveTeamList.ActiveTeam.create({
                    team: teamData,
                    members: members,
                    numOfStickers: data._count.id,
                    updatedAt: common.dt2ts(new Date())
                }))

            }

            common.sendResponse(wm.v388.protobuf.ActiveTeamList.encode({
                teams: activeTeams
            }),res)

        })

    }
}