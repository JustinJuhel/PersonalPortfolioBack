import { Request, Response } from "express";
import db from '../database';
import { promisify } from "../utils";

interface About {
    id: number,
    description: string
}

export async function getAbout(req: Request, res: Response) {
    promisify<About>(db, `select * from about_me_${req.query.lang}`)
        .then(data => res.status(200).json({ status: "success", data: data }))
        .catch(reason => res.status(200).json({ status: "fail", reason: reason }))
}