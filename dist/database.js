"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = __importDefault(require("sqlite3"));
const db_loc = 'db.db';
let db = new sqlite3_1.default.Database(db_loc, (err) => {
    if (err) {
        console.log("Unuable to connect to the database !");
        throw err;
    }
    else {
        console.log("Connected to the database");
        // console.log("Creating dev_tools")
        db.run("CREATE TABLE IF NOT EXISTS dev_tools (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, type TEXT, used TEXT, display_name TEXT)");
        // console.log("Creating projects")
        db.run("CREATE TABLE IF NOT EXISTS projects_en (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, logo TEXT, title TEXT, desc TEXT, tools TEXT)");
        db.run("CREATE TABLE IF NOT EXISTS projects_fr (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, logo TEXT, title TEXT, desc TEXT, tools TEXT)");
        db.run("CREATE TABLE IF NOT EXISTS about_me_en (id INTEGER PRIMARY KEY AUTOINCREMENT, description TEXT)");
        db.run("CREATE TABLE IF NOT EXISTS about_me_fr (id INTEGER PRIMARY KEY AUTOINCREMENT, description TEXT)");
    }
});
exports.default = db;
