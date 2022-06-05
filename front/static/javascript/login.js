
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
  
    fetch("http://localhost:8000/api/users/login", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: data,
      }).then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        window.alert(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}


btn.addEventListener("click", sendData)
