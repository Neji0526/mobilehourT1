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

    let err = document.getElementById("errortext");
    let id = document.getElementById("id").value;
    if (id != urlParams.get('user')){
        err.innerHTML = "ID does not match"
        err.style.display = "block";
        return
    }
    let fname = document.getElementById("fname").value;
    if (fname == "") {
        err.innerHTML = "First name cannot be empty"
        err.style.display = "block";
        return
    }
    if (fname.length > 20) {
        err.innerHTML = "First name cannot be longer than 20 characters"
        err.style.display = "block";
        return
    }
    let lname = document.getElementById("lname").value;
    if (lname == "") {
        err.innerHTML = "Last name cannot be empty"
        err.style.display = "block";
        return
    }
    if (lname.length > 20) {
        err.innerHTML = "Last name cannot be longer than 20 characters"
        err.style.display = "block";
        return
    }
    let role = document.getElementById("role").value;
    if (role == "") {
        err.innerHTML = "Role cannot be empty"
        err.style.display = "block";
        return
    }
    
    let username = document.getElementById("username").value;
    if (username == "") {
        err.innerHTML = "Username cannot be empty"
        err.style.display = "block";
        return
    }




    let body = `
    {
        "id": "${id}",
        "firstname": "${fname}",
        "lastname": "${lname}",
        "role": "${role}",
        "username": "${username}"
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