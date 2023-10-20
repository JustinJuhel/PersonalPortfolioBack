"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneTool = exports.getDevTools = void 0;
const database_1 = __importDefault(require("../database"));
const utils_1 = require("../utils");
async function getDevTools(req, res) {
    database_1.default.all("select * from dev_tools", (err, result) => {
        if (!err) {
            return res.status(200).json({ status: "success", data: result });
        }
        else {
            return res.status(200).json({ status: "fail", message: err });
        }
    });
}
exports.getDevTools = getDevTools;
async function getOneTool(req, res) {
    (0, utils_1.promisify)(database_1.default, 'select * from dev_tools')
        .then(data => res.status(200).json({ status: "success", data: data }))
        .catch(reason => res.status(200).json({ status: "fail", reason: reason }));
}
exports.getOneTool = getOneTool;
// export async function deleteAll(req:Request,res:Response){
//     promisifyUpdate(db,'delete from dev_tools')
//     .then(() => res.status(200).json({status:"success",data:"Successfully deleted from dev_tools"}))
//     .catch(reason => res.status(200).json({status:"fail",reason:reason}))
// }
