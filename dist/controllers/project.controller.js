"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProject = void 0;
const database_1 = __importDefault(require("../database"));
const utils_1 = require("../utils");
async function getProject(req, res) {
    (0, utils_1.promisify)(database_1.default, `select * from projects_${req.query.lang}`)
        .then(data => res.status(200).json({ status: "success", data: data }))
        .catch(reason => res.status(200).json({ status: "fail", reason: reason }));
}
exports.getProject = getProject;
