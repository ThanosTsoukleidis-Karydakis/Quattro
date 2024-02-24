import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"quattrocategorie"
})

//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});