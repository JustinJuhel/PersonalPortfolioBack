import { Router } from "express";
import * as controllers from '../controllers/global.controller';

const router = Router();

router.get("/check", controllers.check);

export default router;