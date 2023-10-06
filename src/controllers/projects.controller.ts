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

// export async function getProjectTemp(req: Request, res: Response) {
//     db.all("select * from projects", (err, result) => {
//         if (!err) {
//             return res.status(200).json({ status: "success", data: result })
//         } else {
//             return res.status(404).json({ status: "fail", message: err })
//         }
//     })
// }

// export async function getProject(req: Request, res: Response) {
//     console.log('en')
//     promisify<Project>(db, "select * from projects_en")
//         .then(data => res.status(200).json({ status: "success", data: data }))
//         .catch(reason => res.status(200).json({ status: "fail", reason: reason }))
// }

export async function getProjectEn(req: Request, res: Response) {
    // console.log('en')
    promisify<Project>(db, "select * from projects_en")
        .then(data => res.status(200).json({ status: "success", data: data }))
        .catch(reason => res.status(200).json({ status: "fail", reason: reason }))
}

export async function getProjectFr(req: Request, res: Response) {
    // console.log('fr')
    promisify<Project>(db, "select * from projects_fr")
        .then(data => res.status(200).json({ status: "success", data: data }))
        .catch(reason => res.status(200).json({ status: "fail", reason: reason }))
}