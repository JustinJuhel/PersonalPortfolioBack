import SQLite3 from "sqlite3";

const db_loc = 'db.db';

let db = new SQLite3.Database(db_loc, (err) => {
    if (err) {
        console.log("Unuable to connect to the database !");
        throw err;
    } else {
        console.log("Connected to the database");
        // console.log("Creating dev_tools")
        db.run("CREATE TABLE IF NOT EXISTS dev_tools (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, type TEXT, used TEXT)");
        // console.log("Creating projects")
        db.run("CREATE TABLE IF NOT EXISTS projects (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, logo TEXT, title TEXT, desc TEXT, tools TEXT)");
    }
});

export default db;