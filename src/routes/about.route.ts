import {Router} from "express";
import * as controllers from '../controllers/about.controller';

const router = Router();

router.get("/get", controllers.getAbout);

export default router;