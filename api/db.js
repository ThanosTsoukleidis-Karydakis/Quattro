import mysql from "mysql"

export const db = mysql.createConnection({
    host:"b8dbzeqgbjka2mzpkrb2-mysql.services.clever-cloud.com",
    user:"udfounpy7n1s54z9",
    password:"bSHnajbd9YgIC4qltq4v",
    database:"b8dbzeqgbjka2mzpkrb2"
})

//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});
