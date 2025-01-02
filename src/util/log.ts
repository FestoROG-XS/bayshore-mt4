import { Reader } from "protobufjs";
import { Config } from "../config";

export function DEBUG(msg:string) {
    if (Config.getConfig().debugMode)
        console.log(("| DEBUG | " + msg));
}

export function WARN(msg:string) {
    console.log(("| WARN  | " + msg));
}

export function BODY(r:any) {
    if (Config.getConfig().debugMode)
        console.log(("| BODY  | \r\n" + JSON.stringify(r.toJSON())));
}


export function FAULT(url:string,msg:string|null = null) {
    console.log(("| FAULT | " + url));
    if (msg != null) {
        console.log(("| FAULT | " + msg));
    }
}