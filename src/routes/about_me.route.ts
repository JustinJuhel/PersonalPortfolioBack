import {Router} from "express";
import * as controllers from '../controllers/about_me.controller';

const router = Router();

// router.get("/get", controllers.getProject);
router.get("/get-en", controllers.getAboutMeEn);
router.get("/get-fr", controllers.getAboutMeFr);

export default router;