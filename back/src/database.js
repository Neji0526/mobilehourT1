import mysql from "mysql2/promise";

export const db_conn = mysql.createPool({
    host: "localhost",          
    user: "maxwoollons",
    password: "ihatemysql12345",
    port: "3306",
    database: "ecommerce"
    
});


