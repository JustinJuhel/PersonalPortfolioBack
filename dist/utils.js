"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promisifyUpdate = exports.promisify = void 0;
async function promisify(db, sql) {
    return new Promise((resolve, reject) => {
        db.all(sql, (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        });
    });
}
exports.promisify = promisify;
async function promisifyUpdate(db, sql) {
    return new Promise((resolve, reject) => {
        db.run(sql, (err) => {
            if (err) {
                return reject(err);
            }
            resolve("success");
        });
    });
}
exports.promisifyUpdate = promisifyUpdate;
