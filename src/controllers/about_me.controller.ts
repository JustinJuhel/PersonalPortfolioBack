import { Request, Response } from "express";
import db from '../database';
import { promisify } from "../utils";

interface AboutMe {
    id: number,
    description: string

}

export async function getAboutMeEn(req: Request, res: Response) {
    promisify<AboutMe>(db, "select * from about_me_en")
        .then(data => res.status(200).json({ status: "success", data: data }))
        .catch(reason => res.status(200).json({ status: "fail", reason: reason }))
}

export async function getAboutMeFr(req: Request, res: Response) {
    promisify<AboutMe>(db, "select * from about_me_fr")
        .then(data => res.status(200).json({ status: "success", data: data }))
        .catch(reason => res.status(200).json({ status: "fail", reason: reason }))
}