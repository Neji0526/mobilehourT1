let btn = document.getElementById("btn");

btn.addEventListener("click", sendData);

function sendData(e){
    e.preventDefault();
    let length = document.querySelector("#length").value;
    let width = document.querySelector("#width").value;
    let weight = document.querySelector("#weight").value;
    let charge = document.querySelector("#charge").value;
    let warranty = document.querySelector("#warranty").value;
    let cpu = document.querySelector("#cpu").value;
    let cameraspecs = document.querySelector("#cameraspecs").value;
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
    })
    
}
