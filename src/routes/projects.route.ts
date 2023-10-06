import {Router} from "express";
import * as controllers from '../controllers/project.controller';

const router = Router();

router.get("/get", controllers.getProject);

export default router;