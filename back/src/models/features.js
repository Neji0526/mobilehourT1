import { db_conn } from "../database.js";


export function getAllFeatures(){
    return db_conn.query("SELECT * FROM features")
}


export function createFeature(length,width,weight,charge,warranty,cpu,cameraspecs){
    return db_conn.query("INSERT INTO `ecommerce`.`features` (`length`, `width`, `weight`, `charge`, `warranty`, `cpu`, `cameraspecs`) VALUES (?, ?, ?, ?, ?, ?, ?);", [length,width,weight,charge,warranty,cpu,cameraspecs])
}

export function deleteFeature(id){
    return db_conn.query("DELETE FROM `ecommerce`.`features` WHERE `features`.`feature_id` = ?;", [id])
}


export function getFeatureById(id){
    return db_conn.query("SELECT * FROM features WHERE feature_id = ?", [id])
}


export function updateFeature(id,length,width,weight,charge,warranty,cpu,cameraspecs){
    return db_conn.query("UPDATE `ecommerce`.`features` SET `length` = ?, `width` = ?, `weight` = ?, `charge` = ?, `warranty` = ?, `cpu` = ?, `cameraspecs` = ? WHERE `features`.`feature_id` = ?;", [length,width,weight,charge,warranty,cpu,cameraspecs,id])
}
