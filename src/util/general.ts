import * as wm from "../wmmt/v388.proto";
import * as services from "../wmmt/service.proto";
import { PrismaClient } from "@prisma/client";
import { DEBUG } from "./log";

const db = new PrismaClient();

/**
 * Places IMPL
 */
export const JIANGMEN = wm.v388.protobuf.Place.create({
    placeId: 'CHN048180',
    shopName: 'Yemao Yemao',
    regionId: 10,
    country: 'CHN'
})

export const REACT = wm.v388.protobuf.Place.create({
    placeId: 'CHN048000',
    shopName: 'REACT Gamezone 001',
    regionId: 10,
    country: 'CHN'
})

export const PLACES = [JIANGMEN,REACT];

export function getPlace(placeId: String){
    switch(placeId) {
        case 'CHN048180':
            return JIANGMEN;
        case 'CHN048000':
            return REACT;
        default:
            return REACT;
    }
}

export function getPlaces(){

    let places:wm.v388.protobuf.IPlace[] = [];
    places.push(REACT);
    places.push(JIANGMEN);
    return places;

}

/**
 * Car Return
 */

export async function getCar(carId:number) {

    const car = await db.car.findFirst({
        where:{
            carId: carId
        }
    })

    if (car?.carId != null) {

        const user = await db.user.findFirst({
            where: {
                id: car.userId
            },
            select: {
                teamId: true
            }
        })

        let team = null;
        if (user!.teamId != null) {
            team = await db.team.findFirst({
                where: {
                    id: user!.teamId!
                }
            })
        }
        return {
            carId: car.carId,
            regionId: car.regionId,
            name: car.name,
            searchCode: car.searchCode,
            manufacturer: car.manufacturer,
            model: car.model,
            visualModel: car.visualModel,
            defaultColor: car.defaultColor,
            customColor: car.customColor,
            wheel: car.wheel,
            wheelColor: car.wheelColor,
            aero: car.aero,
            bonnet: car.bonnet,
            wing: car.wing,
            mirror: car.mirror,
            sticker: car.sticker,
            stickerColor: car.stickerColor,
            neon: car.neon,
            trunk: car.trunk,
            plate: car.plate,
            plateColor: car.plateColor,
            specialSticker: car.specialSticker,
            specialStickerColor: car.specialStickerColor,
            tunePower: car.tunePower,
            tuneHandling: car.tuneHandling,
            title: car.title,
            level: car.level,
            teamSticker: car.teamSticker,
            teamId: (team == null) ? null : team.id,
            teamName: (team == null) ? null : team.teamName,
            teamStickerFont: (team == null) ? null : team.teamStickerFont,
            lastPlayedAt: car.lastPlayedAt,
            lastPlayedPlace: getPlace(car.lastPlayedPlace) || REACT,
            aura: car.aura,
            ghostLevel: car.ghostLevel,
            country: car.country
        }

        
    } else throw new Error("Car Not Exist");

}

/**
 * Team Return
 */

export async function getTeam(userId: number) {
    const user = await db.user.findFirst({
        where: {
            id: userId
        },
        select: {
            teamId: true
        }
    })

    let team = null;
    if (user!.teamId != null) {
        team = await db.team.findFirst({
            where: {
                id: user!.teamId!
            }
        })
    }

    return {
        teamId: (team == null) ? null : team.id,
        teamName: (team == null) ? null : team.teamName,
        teamStickerFont: (team == null) ? null : team.teamStickerFont,
    }
}

/**
 * Search Code Generate
 */

export function generateSearchCode(length: number = 6): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }

    DEBUG(`SearchCode Generated: ${result}`);
    return result;
}

/**
 * Data Define

 * Race Meter
    1 - White Meter
    2 - Yello Race Meter
    4 - Red Race Meter
    8 - Special
    15 - ALL

 * BGM Data
    1 - 3 Series
    2 - Over 10
    4 - 2&1 Series
    8 - R
 */
