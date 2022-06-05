import { db_conn } from "../database.js";

export function getAllUsers(){
    return db_conn.query("SELECT * FROM users")
}

export function createUser(firstname,lastname,role,username,password){
    
    return db_conn.query("INSERT INTO users (firstname,lastname,role,username,password) VALUES (?,?,?,?,?)",[firstname,lastname,role,username,password])

}

export function getIdUsers(id){
    return db_conn.query("SELECT *,DATE_FORMAT(creation_date, '%d/%m/%Y') date FROM users WHERE id = ?",[id])

}
//get user by username
export function getUsername(username){
    return db_conn.query("SELECT *,DATE_FORMAT(creation_date, '%d/%m/%Y') date FROM users WHERE username = ?",[username])

}


export function delIdUsers(id){
    return db_conn.query("DELETE FROM users WHERE (id = ?);",[id])

}


export function updateUserById(id,firstname,lastname,role,username){
    return db_conn.query("UPDATE users SET firstname = ?, lastname = ?, role = ?, username = ? WHERE id = ?",[firstname,lastname,role,username,id])
}


