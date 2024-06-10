// Đặt biến để lưu trữ thông tin giỏ hàng
var cart = [];

// Hàm để thêm sản phẩm vào giỏ hàng
function addToCart(productName, price, quantity) {
    var product = {
        name: productName,
        price: price,
        quantity: quantity
    };
    cart.push(product);
    updateCart(); // Cập nhật giao diện giỏ hàng
}

// Hàm để cập nhật giao diện giỏ hàng
function updateCart() {
    var cartTable = document.querySelector('section.cart tbody');
    var totalPrice = 0;

    // Xóa các sản phẩm hiện có trong giỏ hàng để cập nhật lại
    cartTable.innerHTML = '';

    // Thêm thông tin của từng sản phẩm vào giỏ hàng
    cart.forEach(function(product) {
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
            <td><button onclick="removeFromCart('${product.name}')">Xóa</button></td>
        `;
        cartTable.appendChild(row);
        totalPrice += product.price * product.quantity;
    });

    // Hiển thị tổng tiền
    var totalPriceElement = document.querySelector('section.cart .price-total span');
    totalPriceElement.textContent = totalPrice;
}

// Hàm để xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productName) {
    cart = cart.filter(function(product) {
        return product.name !== productName;
    });
    updateCart(); // Cập nhật giao diện giỏ hàng
}

// Lắng nghe sự kiện khi người dùng nhấn vào nút "Thêm vào giỏ"
var addButton = document.querySelector('.button');
addButton.addEventListener('click', function() {
    var productName = document.querySelector('.product-title').textContent;
    var price = 650000; // Giá cố định cho ví dụ
    var quantity = 1; // Số lượng cố định cho ví dụ
    addToCart(productName, price, quantity);
});

