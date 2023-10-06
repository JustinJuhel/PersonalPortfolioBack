import {Router} from "express";
import * as controllers from '../controllers/english.controller';

const router = Router();

router.get("/projects", controllers.getProject);
router.get("/about", controllers.getAbout);

export default router;