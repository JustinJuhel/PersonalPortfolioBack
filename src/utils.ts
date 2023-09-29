import { Database } from "sqlite3";

export async function promisify<T>(db: Database, sql: string){
    return new Promise((resolve,reject) => {
        db.all<T>(sql,(err,result) =>{
            if(err){
                return reject(err)
            }
            return resolve(result)
        })
    })
}

export async function promisifyUpdate(db:Database,sql:string){
    return new Promise((resolve,reject) =>{
        db.run(sql,(err) => {
            if(err){
                return reject(err)
            }
            resolve("success")
        })
    })
}