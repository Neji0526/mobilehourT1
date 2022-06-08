const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('user');
console.log(id);






fetch("/api/users/" + id)
.then(res => res.json()).then(product => {


    if (product.length == 0) {
        document.getElementById("productdetail").innerHTML = `

        <h1 class="nf">Product not found</h1>
        <button><a href="/">Return Home</a></button>
        `
    } else {

    document.getElementById("id").value = product[0].id;
    document.getElementById("fname").value = product[0].firstname;
    document.getElementById("lname").value = product[0].lastname;
    document.getElementById("role").value = product[0].role;
    document.getElementById("username").value = product[0].username;

    
    
    
    


    let btn = document.getElementById("subbutton");
    btn.addEventListener("click", function() {
    let body = `
    {
        "id": "${document.getElementById("id").value}",
        "firstname": "${document.getElementById("fname").value}",
        "lastname": "${document.getElementById("lname").value}",
        "role": "${document.getElementById("role").value}",
        "username": "${document.getElementById("username").value}"
    }`

    console.log(body)
   
    fetch("/api/users/update", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: body
    }).then(res => res.json()).then(product => {
        console.log(product);
        window.alert("User Updated")
        window.location.href = "/frontend/index.html";
        // window.location.href = "/index.html";
    })
    })
    }
})