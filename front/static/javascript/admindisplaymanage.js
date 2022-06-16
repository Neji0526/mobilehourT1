let products_btn = document.getElementById("products-btn");
let users_btn = document.getElementById("users-btn");
let orders_btn = document.getElementById("orders-btn");
let features_btn = document.getElementById("features-btn");
// let features = document.getElementById("features");



let users_box = document.getElementById("users");
let product_box = document.getElementById("products-admin");
let orders_box = document.getElementById("orders-area");
let features_box = document.getElementById("features-area");




products_btn.addEventListener("click", function(){
    product_box.style.display = "block";
    users_box.style.display = "none";
    orders_box.style.display = "none";
    features_box.style.display = "none";
}
);

users_btn.addEventListener("click", function(){
    product_box.style.display = "none";
    users_box.style.display = "block";
    orders_box.style.display = "none";
    features_box.style.display = "none";
}
);


orders_btn.addEventListener("click", function(){
    product_box.style.display = "none";
    users_box.style.display = "none";
    orders_box.style.display = "block";
    features_box.style.display = "none";
})

features_btn.addEventListener("click", function(){
    product_box.style.display = "none";
    users_box.style.display = "none";
    orders_box.style.display = "none";
    features_box.style.display = "block";
}
);

