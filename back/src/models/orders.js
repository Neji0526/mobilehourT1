import { db_conn } from "../database.js";

export function allOrders(){
    console.log("all orders")
    return db_conn.query("SELECT * FROM ecommerce.orders;")
}




