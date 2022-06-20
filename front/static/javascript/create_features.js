let btn = document.getElementById("btn");

btn.addEventListener("click", sendData);






function sendData(e){
    let err = document.getElementById("errortext");
    e.preventDefault();
    let length = document.querySelector("#length").value;
    if (length == ""){
        err.innerHTML = "Please enter a length";
        err.style.display = "block";
        return;
    }   
    if (isNaN(length)){
        err.innerHTML = "Please enter a number";
        err.style.display = "block";
        return;
    }
    if (length < 0){
        err.innerHTML = "Please enter a positive length";
        err.style.display = "block";
        return;
    }

    let width = document.querySelector("#width").value;
    if (width == ""){
        err.innerHTML = "Please enter a width";
        err.style.display = "block";
        return;
    }
    if (isNaN(width)){
        err.innerHTML = "Please enter a number";
        err.style.display = "block";
        return;
    }
    if (width < 0){
        err.innerHTML = "Please enter a positive width";
        err.style.display = "block";
        return;
    }
    let weight = document.querySelector("#weight").value;
    if (weight == ""){
        err.innerHTML = "Please enter a weight";
        err.style.display = "block";
        return;
    }
    if (isNaN(weight)){
        err.innerHTML = "Please enter a number";
        err.style.display = "block";
        return;
    }
    if (weight < 0){
        err.innerHTML = "Please enter a positive weight";
        err.style.display = "block";
        return;
    }
    let charge = document.querySelector("#charge").value;
    if (charge == ""){
        err.innerHTML = "Please enter a charge";
        err.style.display = "block";
        return;
    }
    if (isNaN(charge)){
        err.innerHTML = "Please enter a number";
        err.style.display = "block";
        return;
    }
    if (charge < 0){
        err.innerHTML = "Please enter a positive charge";
        err.style.display = "block";
        return;
    }
    let warranty = document.querySelector("#warranty").value;
    if (warranty == ""){
        err.innerHTML = "Please enter a warranty";
        err.style.display = "block";
        return;
    }
    if (isNaN(warranty)){
        err.innerHTML = "Please enter a number";
        err.style.display = "block";
        return;
    }
    if (warranty < 0){
        err.innerHTML = "Please enter a positive warranty";
        err.style.display = "block";
        return;
    }
    let cpu = document.querySelector("#cpu").value;
    if (cpu == ""){
        err.innerHTML = "Please enter a cpu";
        err.style.display = "block";
        return;
    }
    let cameraspecs = document.querySelector("#cameraspecs").value;
    if (cameraspecs == ""){
        err.innerHTML = "Please enter the cameraspecs";
        err.style.display = "block";
        return;
    }
    let body = `
    {
        "length": "${length}",
        "width": "${width}",
        "weight": "${weight}",
        "charge": "${charge}",
        "warranty": "${warranty}",
        "cpu": "${cpu}",
        "cameraspecs": "${cameraspecs}"
    }
    `
    fetch("/api/features/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: body
    })
    .then(res => res.json()).then(data => {
        console.log(data);
        document.querySelector("#length").value = "";
        document.querySelector("#width").value = "";
        document.querySelector("#weight").value = "";
        document.querySelector("#charge").value = "";
        document.querySelector("#warranty").value = "";
        document.querySelector("#cpu").value = "";
        document.querySelector("#cameraspecs").value = "";
        err.style.display = "none";
    })
    
}
