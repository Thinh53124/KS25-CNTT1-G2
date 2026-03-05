let product = [];
let setId = 1;
let form = document.getElementById("product-form");
form.addEventListener("submit",(event) => {
    event.preventDefault();
    let result = ""
    let newObject = {
        id: setId++,
        name: document.getElementById("product-name").value,
        price: +document.getElementById("product-price").value,
    }
    product.push(newObject);
    for (let i = 0; i < product.length; i++){
        result += `<li class = "product-item">Tên: ${product[i].name} Giá: ${product[i].price}</li>`;
    }

    document.getElementById("product-list").innerHTML = result;
    form.reset();
});