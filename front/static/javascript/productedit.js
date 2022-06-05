const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('product');
console.log(id);






fetch("http://localhost:8000/api/products/" + id)
.then(res => res.json()).then(product => {


    if (product.length == 0) {
        document.getElementById("productdetail").innerHTML = `

        <h1 class="nf">Product not found</h1>
        <button><a href="/">Return Home</a></button>
        `
    } else {

    document.getElementById("product_id").value = product[0].product_id;
    document.getElementById("feature_id").value = product[0].feature_id;
    document.getElementById("name").value = product[0].product_name;
    document.getElementById("price").value = product[0].price;
    document.getElementById("colour").value = product[0].colour;
    document.getElementById("year").value = product[0].year;
    document.getElementById("image").value = product[0].image;
    document.getElementById("stock").value = product[0].soh;

    
    
    
    


    let btn = document.getElementById("subbutton");
    btn.addEventListener("click", function() {
    body = `
    {
        "product_id": "${document.getElementById("product_id").value}",
        "feature_id": "${document.getElementById("feature_id").value}",
        "product_name": "${document.getElementById("name").value}",
        "price": "${document.getElementById("price").value}",
        "colour": "${document.getElementById("colour").value}",
        "year": "${document.getElementById("year").value}",
        "image": "${document.getElementById("image").value}",
        "soh": "${document.getElementById("stock").value}"
    }`
   
    fetch("http://localhost:8000/api/products/update", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: body
    }).then(res => res.json()).then(product => {
        console.log(product);
        // window.location.href = "/index.html";
    })
    })
    }
})