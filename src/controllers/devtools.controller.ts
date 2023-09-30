import { Request, Response } from "express";
import db from '../database';
import { promisify, promisifyUpdate } from "../utils";

interface DevTools {
    id:number,
    name: string,
    type: string
}

export async function getDevTools(req: Request, res: Response) {
    db.all<DevTools>("select * from dev_tools", (err, result) => {
        if (!err) {
            return res.status(200).json({ status: "success", data: result })
        } else {
            return res.status(200).json({ status: "fail", message: err })
        }
    })
}

export async function getOneTool(req:Request,res:Response){
    promisify<DevTools>(db,'select * from dev_tools')
    .then(data => res.status(200).json({status:"success",data:data}))
    .catch(reason => res.status(200).json({status:"fail",reason:reason}))
}

// export async function deleteAll(req:Request,res:Response){
//     promisifyUpdate(db,'delete from dev_tools')
//     .then(() => res.status(200).json({status:"success",data:"Successfully deleted from dev_tools"}))
//     .catch(reason => res.status(200).json({status:"fail",reason:reason}))
// }