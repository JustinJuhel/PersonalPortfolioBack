import { NextFunction, Router,Request,Response } from "express";
import * as controllers from '../controllers/devtools.controller';

const router = Router();

// router.use((req: Request, res: Response, next: NextFunction) => {
//     if(!req.query.user){
//         return res.status(200).json({status:"fail",reason:"No user was provided"})
//     }
//     if(req.query.user !== 'test'){
//         return res.status(200).json({status:"fail",reason:"Wrong user"})
//     }
//     next()
// })
router.get("/get_tools", controllers.getDevTools);

export default router;