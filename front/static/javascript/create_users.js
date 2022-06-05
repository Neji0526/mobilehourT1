
let btn = document.getElementById("btn");



function sendData(e) {
    e.preventDefault();

  


    let btn = document.getElementById("btn");
    let firstname = document.querySelector("#firstname").value;
    let lastname = document.querySelector("#lastname").value;
    let role = document.querySelector("#role").value;
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    if (username.length < 8 || password.length < 8) {
        window.alert("username and password must be at least 8 characters")
        return
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
  
    fetch("http://localhost:8000/api/users/create", {
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
