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
    let feature_id = document.getElementById("feature_id").value;

    let body = {
        "feature_id": document.getElementById("feature_id").value,
        "length": document.getElementById("length").value,
        "width": document.getElementById("width").value,
        "weight": document.getElementById("weight").value,
        "charge": document.getElementById("charge").value,
        "warranty": document.getElementById("warranty").value,
        "cpu": document.getElementById("cpu").value,
        "cameraspecs": document.getElementById("cameraspecs").value
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

