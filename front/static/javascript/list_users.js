
fetch("/api/users/all")
.then(res => res.json())
.then(userListHTML => {
    for (let user of userListHTML) {
        let userHTML = `
        <tr>
            <td>${user.id}</td>
            <td>${user.firstname}</td>
            <td>${user.lastname}</td>
            <td>${user.role}</td>
            <td>${user.username}</td>
            <td>${user.password}</td>
        </tr>
        <br>
        `
        document.getElementById("content").innerHTML += userHTML
    }
})
.catch(err => console.log(err))

 