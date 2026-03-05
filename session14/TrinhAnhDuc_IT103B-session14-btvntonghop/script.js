// Danh sach san pham
const products = [
    { id: 1, name: "Bánh Chưng", price: 150000, img: "img/banhchung.webp" },
    { id: 2, name: "Giò Lụa", price: 180000, img: "img/giolua.jpg" },
    { id: 3, name: "Cành Đào", price: 500000, img: "img/canhdao.webp" },
    { id: 4, name: "Mứt Tết", price: 120000, img: "img/muttet.webp" },
    { id: 5, name: "Lì Xì (Tệp)", price: 20000, img: "img/lixi.webp" },
    { id: 6, name: "Dưa Hấu", price: 60000, img: "img/duahau.jpg" }
]

// Lay cac phan tu DOM
const productContainer = document.getElementById("product-list")
const cartList = document.getElementById("cart-list")
const totalPriceElement = document.getElementById("total-price")

let totalPrice = 0

// Ham format tien
function formatMoney(number) {
    return number.toLocaleString("vi-VN") + "đ"
}

////////////////////////////////////////////
// CHUC NANG 1: HIEN THI SAN PHAM
////////////////////////////////////////////

products.forEach(product => {

    const card = document.createElement("div")
    card.className = "product-card"

    card.innerHTML = `
        <img src="${product.img}">
        <h3>${product.name}</h3>
        <p class="price">${formatMoney(product.price)}</p>
        <button class="btn-add" data-id="${product.id}">Mua ngay</button>
    `

    productContainer.appendChild(card)

})

////////////////////////////////////////////
// CHUC NANG 2: THEM VAO GIO HANG
////////////////////////////////////////////

productContainer.addEventListener("click", function(e) {

    if(e.target.classList.contains("btn-add")){

        const productId = Number(e.target.dataset.id)

        const product = products.find(p => p.id === productId)

        // xoa thong bao gio hang trong
        const emptyMsg = document.querySelector(".empty-msg")
        if(emptyMsg){
            emptyMsg.remove()
        }

        const li = document.createElement("li")

        li.innerHTML = `
            <span class="cart-item-name">${product.name}</span>
            <div>
                <span class="cart-item-price">${formatMoney(product.price)}</span>
                <button class="btn-remove">X</button>
            </div>
        `

        cartList.appendChild(li)

        // cap nhat tong tien
        totalPrice += product.price
        totalPriceElement.innerText = formatMoney(totalPrice)

    }

})

////////////////////////////////////////////
// XOA SAN PHAM KHOI GIO HANG
////////////////////////////////////////////

cartList.addEventListener("click", function(e){

    if(e.target.classList.contains("btn-remove")){

        const li = e.target.closest("li")

        const priceText = li.querySelector(".cart-item-price").innerText

        const price = Number(priceText.replace(/\D/g,''))

        totalPrice -= price
        totalPriceElement.innerText = formatMoney(totalPrice)

        li.remove()

        // neu gio hang rong
        if(cartList.children.length === 0){
            const empty = document.createElement("li")
            empty.className = "empty-msg"
            empty.innerText = "Chưa có món nào..."
            cartList.appendChild(empty)
        }

    }

})