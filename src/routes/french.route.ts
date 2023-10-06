import {Router} from "express";
import * as controllers from '../controllers/french.controller';

const router = Router();

// router.get("/get", controllers.getProject);
router.get("/projects", controllers.getProject);
router.get("/about", controllers.getAbout);

export default router;