import { Request, Response } from "express";
import db from '../database';
import { promisify } from "../utils";

interface Project {
    id: number,
    name: string,
    logo: string,
    title: string,
    description: string,
    tools: string
}

interface About {
    id: number,
    description: string
}

export async function getProject(req: Request, res: Response) {
    promisify<Project>(db, "select * from projects_fr")
        .then(data => res.status(200).json({ status: "success", data: data }))
        .catch(reason => res.status(200).json({ status: "fail", reason: reason }))
}

export async function getAbout(req: Request, res: Response) {
    promisify<About>(db, "select * from about_me_fr")
        .then(data => res.status(200).json({ status: "success", data: data }))
        .catch(reason => res.status(200).json({ status: "fail", reason: reason }))
}