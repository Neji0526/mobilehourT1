const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('feature');
console.log(id);




fetch("/api/features/" + id)
.then(res => res.json()).then(feature => {
    if (feature.length == 0) {
        document.getElementById("productdetail").innerHTML = `
        Nothing to show

        `
    } else {
    console.log(feature[0])

    document.getElementById("feature_id").value = feature[0].feature_id;
    document.getElementById("length").value = feature[0].length;
    document.getElementById("width").value = feature[0].width;
    document.getElementById("weight").value = feature[0].weight;
    document.getElementById("charge").value = feature[0].charge;
    document.getElementById("warranty").value = feature[0].warranty;
    document.getElementById("cpu").value = feature[0].cpu;
    document.getElementById("cameraspecs").value = feature[0].cameraspecs;
    }
}
)


// btn.addEventListener("click", submit(e))

let btn = document.getElementById("updatebtnfeatures");

btn.addEventListener("click", submit)

function submit(){
    console.log("clicked")

    let err = document.getElementById("errortext");
    let feature_id = document.getElementById("feature_id").value;
    if (feature_id == "") {
        err.innerHTML = "Feature ID cannot be empty"
        err.style.display = "block";
        return;

    }
    if (feature_id != urlParams.get('feature')) {
        err.innerHTML = "Feature ID cannot be changed"
        err.style.display = "block";
        return;

    }
    let length = document.getElementById("length").value;
    if (length == "") {
        err.innerHTML = "Length cannot be empty"
        err.style.display = "block";
        return;

    }
    if (isNaN(length)) {
        err.innerHTML = "Length must be a number"
        err.style.display = "block";
        return;

    }

    if (length < 0) {
        err.innerHTML = "Length cannot be negative"
        err.style.display = "block";
        return;

    }

    let width = document.getElementById("width").value;
    if (width == "") {
        err.innerHTML = "Width cannot be empty"
        err.style.display = "block";
        return;

    }
    if (isNaN(width)) {
        err.innerHTML = "Width must be a number"
        err.style.display = "block";
        return;

    }
    if (width < 0) {
        err.innerHTML = "Width cannot be negative"
        err.style.display = "block";
        return;

    }

    let weight = document.getElementById("weight").value;
    if (weight == "") {
        err.innerHTML = "Weight cannot be empty"
        err.style.display = "block";
        return;

    }
    if (isNaN(weight)) {
        err.innerHTML = "Weight must be a number"
        err.style.display = "block";
        return;

    }
    if (weight < 0) {
        err.innerHTML = "Weight cannot be negative"
        err.style.display = "block";
        return;

    }

    let charge = document.getElementById("charge").value;
    if (charge == "") {
        err.innerHTML = "Charge cannot be empty"
        err.style.display = "block";
        return;

    }
    if (isNaN(charge)) {
        err.innerHTML = "Charge must be a number"
        err.style.display = "block";
        return;

    }
    if (charge < 0) {
        err.innerHTML = "Charge cannot be negative"
        err.style.display = "block";
        return;

    }
    let warranty = document.getElementById("warranty").value;
    if (warranty == "") {
        err.innerHTML = "Warranty cannot be empty"
        err.style.display = "block";
        return;

    }
    if (isNaN(warranty)) {
        err.innerHTML = "Warranty must be a number"
        err.style.display = "block";
        return;

    }
    if (warranty < 0) {
        err.innerHTML = "Warranty cannot be negative"
        err.style.display = "block";
        return;

    }

    let cpu = document.getElementById("cpu").value;
    if (cpu == "") {
        err.innerHTML = "CPU cannot be empty"
        err.style.display = "block";
        return;

    }

    let cameraspecs = document.getElementById("cameraspecs").value;
    if (cameraspecs == "") {
        err.innerHTML = "Camera Specs cannot be empty"
        err.style.display = "block";
        return;
    }






    let body = {
        "feature_id": feature_id,
        "length": length,
        "width": width,
        "weight": weight,
        "charge": charge,
        "warranty": warranty,
        "cpu": cpu,
        "cameraspecs": cameraspecs
    }
    console.log(body)
    fetch("/api/features/update/"  + feature_id, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }).then(res => res.json()).then(data => {
        console.log(data)
        window.alert("Feature updated")
        // window.location.href = "/frontend"
    }
    )
}

