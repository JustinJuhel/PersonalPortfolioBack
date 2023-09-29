import { Request, Response } from "express";

export async function check(req: Request, res: Response) {
    return res.status(200).json({ status: "success", message: "ok" })
}