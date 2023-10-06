import { NextFunction, Router,Request,Response } from "express";
import * as controllers from '../controllers/devtools.controller';

const router = Router();

router.get("/get", controllers.getDevTools);

export default router;