import {Router} from "express";
import * as controllers from '../controllers/projects.controller';

const router = Router();

// router.get("/get", controllers.getProject);
router.get("/get-en", controllers.getProjectEn);
router.get("/get-fr", controllers.getProjectFr);

export default router;