const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const page_type = urlParams.get('filter')
const searchbtn = document.getElementById('search-btn-store')

const title = document.getElementById('product-title')


var input = document.getElementById("search-product");

input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("search-btn-store").click();
    }
});

if(page_type == 'age'){

    fetch("http://localhost:8000/api/products/age")
    .then(res => res.json()).then(productlist => {
        for (let product of productlist) {
            let productHTML = `
            <div class="productbox">
            <a href="/product.html?product=${product.product_id}">
                <img src="${product.image}" alt="iphone">
                <h3>${product.product_name}</h3>
                <p>$${product.price}</p>
                </a>
            </div>  
            `
            document.getElementById("products").innerHTML += productHTML

        }
        title.innerHTML = "Products by Age"

    }
    
    )

    
} else if (page_type == 'price'){
    //sort by price

    fetch("http://localhost:8000/api/products/price")
    .then(res => res.json()).then(productlist => {
        for (let product of productlist) {
            let productHTML = `
            <div class="productbox">
            <a href="/product.html?product=${product.product_id}">
                <img src="${product.image}" alt="iphone">
                <h3>${product.product_name}</h3>
                <p>$${product.price}</p>
                </a>
            </div>  
            `
            document.getElementById("products").innerHTML += productHTML

        }
        title.innerHTML = "Products by Price"

    }
    )

} else {

    fetch("http://localhost:8000/api/products/all")
    .then(res => res.json()).then(productlist => {
        for (let product of productlist) {
            let productHTML = `
            <div class="productbox">
            <a href="/product.html?product=${product.product_id}">
                <img src="${product.image}" alt="iphone">
                <h3>${product.product_name}</h3>
                <p>$${product.price}</p>
                </a>
            </div>  
            `
            document.getElementById("products").innerHTML += productHTML

        }
        title.innerHTML = "All Products"

    }
    )

}


searchbtn.addEventListener('click',(e)=>{
    let title = document.getElementById('product-title')
    e.preventDefault()
    let search_term = document.getElementById('search-product').value
    title.innerHTML = "Search Results for " + search_term
    fetch("http://localhost:8000/api/products/search",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({query: search_term})
    }).then(res => res.json()).then(productlist => {
        if (productlist.length == 0){
            document.getElementById("products").innerHTML = `
            <div class="productbox">
            <h3>No Results</h3>
            </div>
            `
        } 
        else {
            document.getElementById("products").innerHTML = ''
        

        for (let product of productlist) {
            let productHTML = `
            <div class="productbox">
            <a href="/product.html?product=${product.product_id}">
                <img src="${product.image}" alt="iphone">
                <h3>${product.product_name}</h3>
                <p>$${product.price}</p>
                </a>
            </div>  
            `
            document.getElementById("products").innerHTML += productHTML

        }
    }
    }
    )
}

)

