const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('productp');

let btn = document.getElementById("submit")

let form = document.getElementById("purchaseform")



let info = document.getElementById("info");
fetch("/api/products/" + id)
.then(res => res.json()).then(product => {
    if (product.length == 0) {
        document.getElementById("infoproduct").innerHTML = `
        <h1 class="nf">Product not found</h1>
        <button><a href="/frontend">Return Home</a></button>
        `
    } else {



        info.innerHTML = `
        <h1>Product Details</h1>
        <p>Product ID: ${product[0].product_id}</p>
        <p>Product Name: ${product[0].product_name}</p>
        <p>Price: $${product[0].price}</p>
        <p>Colour: ${product[0].colour}</p>
        <p>Year: ${product[0].year}</p>
        <p>Current Stock: ${product[0].soh}</p> 
        `
    }
});
   
btn.addEventListener("click", onSubmit);

function onSubmit(e){
let err = document.getElementById("errortext");

e.preventDefault();

let fname = document.getElementById("fname").value;
if (fname == "") {
    err.innerHTML = "Please enter your first name";
    err.style.display = "block";

    return;
}


let lname = document.getElementById("lname").value;
if (lname == "") {
    err.innerHTML = "Please enter your last name";
    err.style.display = "block";
    return;
}
let mobile = document.getElementById("mobile").value;
if (mobile == "") {
    err.innerHTML = "Please enter your mobile number";
    err.style.display = "block";
    return;
}
if (isNaN(mobile)) {
    err.innerHTML = "Please enter a valid mobile number";
    err.style.display = "block";
    return;
}
if (mobile.length != 10) {
    err.innerHTML = "Please enter a valid mobile number";
    err.style.display = "block";
    return;
}
let address1 = document.getElementById("address1").value;
if (address1 == "") {
    err.innerHTML = "Please enter your address line 1";
    err.style.display = "block";
    return;
}
let address2 = document.getElementById("address2").value;
if (address2 == "") {
    err.innerHTML = "Please enter your address line 2";
    err.style.display = "block";
    return;
}


fetch("/api/products/" + id)
.then(res => res.json()).then(product => {


// let body = `
// {
//     "id": "${product[0].product_id}",
//     "fname": "${fname}",
//     "lname": "${lname}",
//     "mobile": "${mobile}",
//     "address1": "${address1}",
//     "address2": "${address2}",
// }
// `

let body = {
    'id': product[0].product_id,
    'fname': fname,
    'lname': lname,
    'mobile': mobile,
    'address1': address1,
    'address2': address2,
}

fetch("/api/products/purchase", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
}).then(res => res.json()).then(product => {
    window.alert("Purchase Successful");
    window.location.href = "/frontend/index.html";
})
})
}

