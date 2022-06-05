import { db_conn } from "../database.js";


export function getAllProducts(){
    return db_conn.query("SELECT * FROM products")
}

export function getIdProducts(id){
    return db_conn.query("SELECT *,DATE_FORMAT(creation_date, '%d/%m/%Y') date FROM products INNER JOIN features ON products.feature_id = products.feature_id WHERE product_id = ?",[id])
    

}


export function delIdProducts(id){
    return db_conn.query("DELETE FROM products WHERE (product_id = ?);",[id])

}

export function getAllProductsPrice(){
    return db_conn.query("SELECT * FROM products ORDER BY price ASC")
}
export function getAllProductsAge(){
    return db_conn.query("SELECT * FROM products ORDER BY year ASC")
}

export function getAllProductsSearch(term){
    let sterm = "%"+term+"%"
    return db_conn.query("SELECT * FROM products WHERE (product_name LIKE ?);",[sterm])
}

export function createProduct(name,feature_id,price,colour,year,image,stock){
    
    return db_conn.query("INSERT INTO `ecommerce`.`products` (`product_name`,`feature_id`, `price`, `colour`, `year`, `soh`) VALUES (?,?,?,?,?,?)",[name,feature_id,price,colour,year,stock])

}



export function updateProduct(name,feature_id,price,colour,year,image,stock,id){
    return db_conn.query("UPDATE `ecommerce`.`products` SET `product_name` = ?, `feature_id` = ?, `price` = ?, `colour` = ?, `year` = ?,`image` = ?, `soh` = ? WHERE (`product_id` = ?);",[name,feature_id,price,colour,year,image,stock,id])
}




