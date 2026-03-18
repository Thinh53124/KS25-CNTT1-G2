// const products = [
//   {
//     id: 1,
//     name: "Tai nghe Bluetooth TWS",
//     price: 320000,
//     image:
//       "https://picsum.photos/seed/mp19-tws/1200/800",
//     description: "Chống ồn nhẹ, pin 20h, kết nối ổn định.",
//   },
//   {
//     id: 2,
//     name: "Bàn phím cơ 87 phím",
//     price: 790000,
//     image:
//       "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1200&q=60",
//     description: "Switch blue, led trắng, gõ sướng tay.",
//   },
//   {
//     id: 3,
//     name: "Chuột không dây công thái học",
//     price: 450000,
//     image:
//       "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1200&q=60",
//     description: "Thiết kế ergonomic, sạc USB-C.",
//   },
//   {
//     id: 4,
//     name: "USB 64GB",
//     price: 120000,
//     image:
//       "https://picsum.photos/seed/mp19-usb/1200/800",
//     description: "Nhỏ gọn, tốc độ đọc/ghi ổn định.",
//   },
//   {
//     id: 5,
//     name: "Đế tản nhiệt laptop",
//     price: 210000,
//     image:
//       "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=1200&q=60",
//     description: "2 quạt gió, đỡ mỏi cổ tay.",
//   },
//   {
//     id: 6,
//     name: "Cáp sạc Type-C 1m",
//     price: 80000,
//     image:
//       "https://picsum.photos/seed/mp19-cable/1200/800",
//     description: "Bọc dù, hỗ trợ sạc nhanh.",
//   },
// ];
// localStorage.setItem("products",JSON.stringify(products))
const carts = [];
localStorage.setItem("carts",JSON.stringify(carts))
let products = JSON.parse(localStorage.getItem("products"))
function renderproducts(){
    let productgrid = document.getElementById("products-grid")
    productgrid.innerHTML = products
    .map((value)=>{
        return ` <article class="card">
              <div class="card-img">
                <img
                  src="https://picsum.photos/seed/mp19-tws/1200/800"
                  alt="Tai nghe Bluetooth TWS"
                  loading="lazy"
                />
              </div>
              <div class="card-body">
                <h3 class="card-title">${value.name}</h3>
                <p class="card-desc">${value.description}</p>
                <div class="card-footer">
                  <div class="price">${value.price}VNĐ</div>
                  <button class="btn btn-primary">Thêm vào giỏ</button>
                </div>
              </div>
            </article>`
    })
}
renderproducts();
function rendertotalproduct(){
    let productcount = document.getElementById("product-count-badge")
    productcount.innerHTML = products
    .map((value)=>{
        return`<div class="panel-meta">
              <span class="badge" id="product-count-badge">${products.length}</span>
            </div>`
    })
}
renderproducts();
function rendercart(){
    let cartTbody = document.getElementById("cart-tbody")
    cartTbody.innerHTML = carts
    .map((value)=>{
        return `<tbody id="cart-tbody">
                <tr>
                  <td id = "cart-name">${value.name}</td>
                  <td class="right">${value.price} VNĐ</td>
                  <td class="center">${value.quantity}</td>
                  <td class="right">2.940.000 VNĐ</td>
                  <td class="center">Xóa</td>
                </tr>
              </tbody>`
    })
}