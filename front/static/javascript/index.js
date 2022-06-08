fetch("/api/products/all")
.then(res => res.json()).then(productlist => {
    for (let product of productlist) {
        let productHTML = `
        <div class="productbox">
         <a href="/frontend/product.html?product=${product.product_id}">
            <img src="${product.image}" alt="iphone">
            <h3>${product.product_name}</h3>
            <p>$${product.price}</p>
            </a>
        </div>  
        `
        document.getElementById("products").innerHTML += productHTML
    }
}
)
