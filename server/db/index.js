var mysql = require('mysql');

var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'express',
        port: '3308'
});

let expressDB = {};

expressDB.allUsers = () => {
   return new Promise((resolve,reject) => {
        con.query('SELECT * FROM users',(err,res) => {
                if(err) reject(err)
                resolve(res);
        })
   })
}

expressDB.getUser = (id) => {
        return new Promise((resolve, reject) => {
                con.query('SELECT * FROM users WHERE id=?',[id],
                (err,res) => {
                        if(err) reject(err);
                        resolve(res[0]);
                })
        })
}

expressDB.addUser = (username,email,password) => {
        return new Promise((resolve, reject) => {
                con.query("INSERT INTO users (`username`,`email`,`password`)  "
                        + " VALUES(?,?,?)",[username,email,password],
                (err,res) => {
                        if(err) reject(err);
                        resolve(res[0]);
                })
        })
}





module.exports = expressDB;