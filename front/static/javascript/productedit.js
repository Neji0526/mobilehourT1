const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('product');
console.log(id);






fetch("/api/products/" + id)
.then(res => res.json()).then(product => {


    if (product.length == 0) {
        document.getElementById("productdetail").innerHTML = `

        <h1 class="nf">Product not found</h1>
        <button><a href="/frontend">Return Home</a></button>
        `
    } else {
    console.log(product[0])

    document.getElementById("product_id").value = product[0].product_id;
    document.getElementById("name").value = product[0].product_name;
    document.getElementById("price").value = product[0].price;
    document.getElementById("colour").value = product[0].colour;
    document.getElementById("year").value = product[0].year;
    document.getElementById("image").value = product[0].image;
    document.getElementById("stock").value = product[0].soh;

    let sel = document.getElementById('select')
    sel.innerHTML = `<option value="${product[0].feature_id}">${product[0].feature_id}</option>`
    

    fetch("/api/features/all")
    .then(res => res.json())
    .then(features => {
        for (let feature of features) {
            let featureHTML = `
            <option value="${feature.feature_id}">${feature.feature_id} - ${feature.cameraspecs} ${feature.length}x${feature.width}</option>
            `
            sel.innerHTML += featureHTML
        }
    })
    }
})
    
    

    let btn = document.getElementById("subbutton");
    btn.addEventListener("click", function() {
    let err = document.getElementById("errortext");
    let product_id = document.getElementById("product_id").value;

    let feature_id = document.getElementById("select").value;
    let product_name = document.getElementById("name").value;
    if (product_name == "") {
        err.innerHTML = "Product name cannot be empty"
        err.style.display = "block";
        return;
    }
    let price = document.getElementById("price").value;
    if (price == "") {
        err.innerHTML = "Price cannot be empty"
        err.style.display = "block";
        return;
    }
    if (isNaN(price)) {
        err.innerHTML = "Price must be a number"
        err.style.display = "block";
        return;
    }
    if (price < 0) {
        err.innerHTML = "Price cannot be negative"
        err.style.display = "block";
        return;
    }
    let colour = document.getElementById("colour").value;
    if (colour == "") {
        err.innerHTML = "Colour cannot be empty"
        err.style.display = "block";
        return;
    }
    let year = document.getElementById("year").value;
    if (year == "") {
        err.innerHTML = "Year cannot be empty"
        err.style.display = "block";
        return;
    }
    if (isNaN(year)) {
        err.innerHTML = "Year must be a number"
        err.style.display = "block";
        return;
    }
    if (year < 1980 || year > 2050) {
        err.innerHTML = "Year must be between 1980 and 2050"
        err.style.display = "block";
        return;
    }
    let image = document.getElementById("image").value;
    if (image == "") {
        err.innerHTML = "Image cannot be empty"
        err.style.display = "block";
        return;
    }
    let stock = document.getElementById("stock").value;
    if (stock == "") {
        err.innerHTML = "Stock cannot be empty"
        err.style.display = "block";
        return;
    }
    if (isNaN(stock)) {
        err.innerHTML = "Stock must be a number"
        err.style.display = "block";
        return;
    }
    if (stock < 0) {
        err.innerHTML = "Stock cannot be negative"
        err.style.display = "block";
        return;
    }




    body = `
    {
        "product_id": "${product_id}",
        "feature_id": "${feature_id}",
        "product_name": "${product_name}",
        "price": "${price}",
        "colour": "${colour}",
        "year": "${year}",
        "image": "${image}",
        "soh": "${stock}"
    }`
   
    fetch("/api/products/update", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: body
    }).then(res => res.json()).then(product => {
        console.log(product);
        window.location.href = "/frontend/index.html";
    })
    }
    )