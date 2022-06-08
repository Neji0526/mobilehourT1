
let btn = document.getElementById("btn");



function sendData(e) {
    e.preventDefault();
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
   
    data = 
`
{
  "username": "${username}",
  "password": "${password}"
}`

    
   



    console.log(data);
  
    // fetch("http://172.30.211.39:8000/api/users/login", {
      fetch("/api/users/login", {
        method: "POST", 
        headers: {
          'Content-Type': 'application/json',

        },
        credentials: 'include',
        body: data,
      }).then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        window.alert(data.data)
        window.location.href = "/frontend/index.html";
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}


btn.addEventListener("click", sendData)
