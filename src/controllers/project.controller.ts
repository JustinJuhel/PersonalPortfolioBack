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

export async function getProject(req: Request, res: Response) {
    promisify<Project>(db, `select * from projects_${req.query.lang}`)
        .then(data => res.status(200).json({ status: "success", data: data }))
        .catch(reason => res.status(200).json({ status: "fail", reason: reason }))
}