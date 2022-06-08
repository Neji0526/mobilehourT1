const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('product');
console.log(id);




fetch("/api/products/" + id)
.then(res => res.json()).then(product => {


    if (product.length == 0) {
        document.getElementById("productdetail").innerHTML = `

        <h1 class="nf">Product not found</h1>
        <button><a href="/">Return Home</a></button>
        `
    } else {

    let MySQL_date = product[0].creation_date
    
  
    
    let productHTML = `
    <div class="detailimage">
        <img src="${product[0].image}" alt="iphone">
    </div>
    <div class="detaildetail">

        <h2>${product[0].product_name}</h2>
        <p>$${product[0].price}</p>
        <p>Colour: ${product[0].colour}</p>
        <p>Model Year: ${product[0].year}</p>
        <p>Listing Date: ${product[0].date}</p>
        <p>Stock: ${product[0].soh}</p>
        <p>StockID: ${product[0].product_id}</p>
        <h2>Features</h2>
        <p>Size: ${product[0].length}mm x ${product[0].width}mm</p>
        <p>Weight: ${product[0].weight}g</p>
        <p>Battery: ${product[0].charge}</p>
        <p>Camera: ${product[0].cameraspecs}</p>
        
        

        Return to <a href="/frontend/store.html">Store</a>
        <br/>
        <button><a href='./purchaseproduct.html?productp=${product[0].product_id}'>Purchase Phone</a></button>


        </div>
        



    `
    document.getElementById("containerdetail").innerHTML += productHTML

    }
})