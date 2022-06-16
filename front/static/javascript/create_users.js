
let btn = document.getElementById("btn");



function sendData(e) {
    e.preventDefault();
    let err = document.getElementById("errortext");

  


    let btn = document.getElementById("btn");
    let firstname = document.querySelector("#firstname").value;
    if (firstname == "") {
        err.innerHTML = "Please enter a firstname";
        err.style.display = "block";
        return;
    }
    if (firstname.length < 3) {
        err.innerHTML = "Firstname must be at least 3 characters";
        err.style.display = "block";
        return;
    }
    if (firstname.length > 20) {
        err.innerHTML = "Firstname must be less than 20 characters";
        err.style.display = "block";
        return;
    }
    let lastname = document.querySelector("#lastname").value;
    if (lastname == "") {
        err.innerHTML = "Please enter a lastname";
        err.style.display = "block";
        return;
    }
    if (lastname.length < 3) {
        err.innerHTML = "Lastname must be at least 3 characters";
        err.style.display = "block";
        return;
    }
    if (lastname.length > 20) {
        err.innerHTML = "Lastname must be less than 20 characters";
        err.style.display = "block";
        return;
    }
    let role = document.querySelector("#role").value;
    if (role == "") {
        err.innerHTML = "Please enter a role";
        err.style.display = "block";
        return;
    }
    let username = document.querySelector("#username").value;
    if (username == "") {
        err.innerHTML = "Please enter a username";
        err.style.display = "block";
        return;
    }
    if (username.length < 5) {
        err.innerHTML = "Username must be at least 5 characters";
        err.style.display = "block";
        return;
    }
    if (username.length > 20) {
        err.innerHTML = "Username must be less than 20 characters";
        err.style.display = "block";
        return;
    }
    let password = document.querySelector("#password").value;
    if (password == "") {
        err.innerHTML = "Please enter a password";
        err.style.display = "block";
        return;
    }
    if (password.length < 8) {
        err.innerHTML = "Password must be at least 8 characters";
        err.style.display = "block";
        return;
    }

 




    data =
`
{
  "firstname": "${firstname}",
  "lastname": "${lastname}",
  "role": "${role}",
  "username": "${username}",
  "password": "${password}"
}`

    
   

    console.log(data);
  
    fetch("/api/users/create", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: data,
      })
      .then(response => response.json())
      .then(data => {
        console.log(data.data);
        window.alert(data.data)
      })
      .catch((err) => {
        console.error('Error:', err);
      });
}


btn.addEventListener("click", sendData)
