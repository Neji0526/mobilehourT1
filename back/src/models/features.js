import { db_conn } from "../database.js";


export function getAllFeatures(){
    return db_conn.query("SELECT * FROM features")
}


export function createFeature(length,width,weight,charge,warranty,cpu,cameraspecs){
    return db_conn.query("INSERT INTO `ecommerce`.`features` (`length`, `width`, `weight`, `charge`, `warranty`, `cpu`, `cameraspecs`) VALUES (?, ?, ?, ?, ?, ?, ?);", [length,width,weight,charge,warranty,cpu,cameraspecs])
}




