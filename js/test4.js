document.getElementById("addToCart").addEventListener("click", function () {
  // Lấy thông tin sản phẩm
  var productName = document.getElementById("productDetailName").innerText;
  var productPrice = 650000; // Giá sản phẩm, bạn có thể lấy giá từ dữ liệu sản phẩm hoặc cố định

  // Tạo một mục mới trong giỏ hàng
  var cartItem = document.createElement("li");
  cartItem.textContent = productName + " - Giá: " + productPrice + "đ";

  // Thêm mục vào trong giỏ hàng
  document.getElementById("cartItems").appendChild(cartItem);

  // Cập nhật tổng giá
  var totalPriceElement = document.getElementById("totalPrice");
  var totalPrice = parseInt(totalPriceElement.textContent.split(": ")[1]);
  totalPrice += productPrice;
  totalPriceElement.textContent = "Tổng giá: " + totalPrice + "đ";

  // Hiển thị thông tin giỏ hàng
  document.getElementById("cartInfo").style.display = "block";
});
document.getElementById("checkoutBtn").addEventListener("click", function () {
  // Thực hiện chuyển hướng đến trang thanh toán
  // Ví dụ:
  window.location.href = "path/to/checkout/page";
});
