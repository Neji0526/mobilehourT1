let btn = document.getElementById("btn");

btn.addEventListener("click", sendData);



// fetch features
let select = document.getElementById("feature_id");
fetch("/api/features/all")
.then(res => res.json()).then(features => {
  for (features of features){
    let option = document.createElement("option");
    option.text = `ID: ${features.feature_id} - ${features.width}mm x ${features.length}mm, ${features.weight}g, ${features.charge}MWH, ${features.cameraspecs}`;
    option.value = features.feature_id;
    select.add(option);
  }
    
});




function sendData(e){
  e.preventDefault();


 let err = document.getElementById("errortext")



  let name = document.querySelector("#name").value;
  if (name == ""){
      err.innerHTML = "Please enter a name";
      err.style.display = "block";
      return;
  }
  if (name.length < 3){
      err.innerHTML = "Name must be at least 3 characters";
      err.style.display = "block";
      return;
  }
  let feature_id = document.querySelector("#feature_id").value;
  if (feature_id == ""){
      err.innerHTML = "Please enter a feature_id";
      err.style.display = "block";
      return;
  }
  let year = document.querySelector("#year").value;
  if (year == ""){
      err.innerHTML = "Please enter a year";
      err.style.display = "block";
      return;
  }
  if (isNaN(year)){
      err.innerHTML = "Please enter a number for the year";
      err.style.display = "block";
      return;
  }
  if (year < 1980 || year > 2050){
      err.innerHTML = "Please enter a year between 1980 and 2050";
      err.style.display = "block";
      return;
  }
  let colour = document.querySelector("#colour").value;
  if (colour == ""){
      err.innerHTML = "Please enter a colour";
      err.style.display = "block";
      return;
  }

  let price = document.querySelector("#price").value;
  if (price == ""){
      err.innerHTML = "Please enter a price";
      err.style.display = "block";
      return;
  }
  if (isNaN(price)){
      err.innerHTML = "Please enter a number for the price";
      err.style.display = "block";
      return;

  }
  if (price < 0){
      err.innerHTML = "Please enter a positive price";
      err.style.display = "block";
      return;
  }
  let image = document.querySelector("#image").value;
  if (image == ""){
      err.innerHTML = "Please enter an image";
      err.style.display = "block";
      return;
  }
  let stock = document.querySelector("#stock").value;
  if (stock == ""){
      err.innerHTML = "Please enter a stock value";
      err.style.display = "block";
      return;
  }
  if (isNaN(stock)){
      err.innerHTML = "Please enter a number for the stock";
      err.style.display = "block";
      return;
  }
  if (stock < 0){
      err.innerHTML = "Please enter a positive number for the stock";
      err.style.display = "block";
      return;
  }
  let body = {
    "name": name,
    "feature_id": feature_id,
    "price": price,
    "colour": colour,
    "year": year,
    "image": image,
    "stock": stock
  }
  

  fetch("/api/products/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
  .then(res => res.json()).then(data => {
    console.log(data);
    document.querySelector("#name").value = "";
    document.querySelector("#feature_id").value = "1";
    document.querySelector("#colour").value = "";
    document.querySelector("#year").value = "";
    document.querySelector("#price").value = "";
    document.querySelector("#image").value = "";
    document.querySelector("#stock").value = "";
    err.style.display = "none";
    window.alert("Product created!");
    window.href = "/products";
  })




}