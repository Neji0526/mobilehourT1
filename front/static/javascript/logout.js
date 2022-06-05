let btn = document.getElementById("logoutbtn");


btn.addEventListener("click", function(e) {
    fetch("/api/users/logout", {
        method: "POST"
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            window.alert(data)
            location.href = "/"
        }
        ).catch((error) => {
            console.error('Error:', error);
        }
        );
})