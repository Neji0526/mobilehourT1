

    fetch("/api/users/logout/user", {
        method: "POST"
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            window.alert(data)
            location.href = "/frontend"
        }
        ).catch((error) => {
            console.error('Error:', error);
        }
        );
