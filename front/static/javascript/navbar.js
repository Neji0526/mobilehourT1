history.scrollRestoration = "manual"
let bar = document.getElementById("navbar");




fetch("/api/users/session/status")
.then(res => res.json()).then(data => {
    console.log(data.role)
    if (data.role === "admin" | data.role === "employee") {
        bar.innerHTML = `
        <h2 class="logo-text"><a href="/frontend">The Mobile Hour</a></h2>
        <h2 class="right"><a href="/frontend">Home</a></h2>
        <h2 class="right"><a href="/frontend/store.html">Store</a></h2>
        <h2 class="right"><a href="/frontend/admin.html">Admin</a></h2>
        <h2 class="right"><a href="/frontend/logout.html">Logout</a></h2>
        `
    } else {
        bar.innerHTML = `
        <h2><a href="/frontend">The Mobile Hour</a></h2>
        <h2 class="right"><a href="/frontend">Home</a></h2>
        <h2 class="right"><a href="/frontend/store.html">Store</a></h2>
        <h2 class="right"><a href="/frontend/login.html">Login</a></h2>
        `
    }
})



