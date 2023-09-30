import {Router} from "express";
import * as controllers from '../controllers/projects.controller';

const router = Router();

router.get("/get", controllers.getProject);

export default router;