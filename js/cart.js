const btn = document.querySelectorAll("button")
btn.forEach(function(button, index) {
  button.addEventListener("click",function (event) {
    var btnItem = event.target
    var product = btnItem.parentElement
    var productImg = product.querySelector("img").src
    var productName = product.querySelector("h1").innerText
    var productPrice = product.querySelector("span").innerHTML
    addcart(productPrice, productImg, productName)
  })
})

function addcart(productPrice, productImg, productName) {
  var addtr = document.createElement("tr")
  var cartItem = document.querySelectorAll("tbody tr")
  for (var i = 0; i < cartItem.length; i++) {
    var productT = cartItem[i].querySelector(".title")
    if (productT && productT.innerHTML === productName) {
      alert("Sản phẩm của bạn đã có trong giỏ hàng")
      return
    }
  }
  var trcontent = `
    <td style="display: flex; align-items: center;">
      <img style="width: 30%;height: auto" src="${productImg}" alt="">
      <span class="title">${productName}</span>
    </td>
    <td>
      <span><p><span class="prices">${productPrice}</span><sup>VND</sup></p></span>
    </td>
    <td><input style="width: 40px; outline: none;" type="number" value="1" min="1"></td>
    <td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td>`;
  addtr.innerHTML = trcontent
  var cartTable = document.querySelector("tbody")
  cartTable.append(addtr)
  carttotal()
  deleteCart()
}

function carttotal() {
  var cartItem = document.querySelectorAll("tbody tr")
  var totalC = 0
  cartItem.forEach(function (item) {
    var inputValue = item.querySelector("input").value
    var productPrice = parseFloat(item.querySelector(".prices").innerText.replace(/[^0-9]/g, ''))
    var totalA = inputValue * productPrice * 1
    totalC += totalA
  })
  var cartTotalA = document.querySelector(".price-total span")
  var cartPrice = document.querySelector(".cart-icon span")
  cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
  cartPrice.innerHTML = totalC.toLocaleString('de-DE')
  inputchange()
}

function deleteCart() {
  var cartItem = document.querySelectorAll("tbody tr")
  cartItem.forEach(function (item) {
    var productT = item.querySelector(".cart-delete")
    productT.addEventListener("click", function () {
      item.remove()
      carttotal()
    })
  })
}

function inputchange() {
  var cartItem = document.querySelectorAll("tbody tr")
  cartItem.forEach(function (item) {
    var inputValue = item.querySelector("input")
    inputValue.addEventListener("change", carttotal)
  })
}

const cartbtn = document.querySelector(".fa-solid.fa-xmark.fa-lg")
const cartshow = document.querySelector(".fa-cart-shopping")

cartshow.addEventListener("click", function () {
  document.querySelector(".cart").style.right = "0"
})

cartbtn.addEventListener("click", function () {
  document.querySelector(".cart").style.right = "-10000px"
})