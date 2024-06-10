// Lấy thẻ popup và các phần tử bên trong
const cartPopup = document.getElementById("cart-popup");
const popupImg = document.getElementById("popup-img");
const popupProduct = document.getElementById("popup-product");

// Lấy thẻ logo giỏ hàng và nút thêm vào giỏ hàng
const cartLogo = document.getElementById("cart-logo");
const addToCartBtn = document.getElementById("add-to-cart-btn");

// Đặt sự kiện click cho nút thêm vào giỏ hàng
addToCartBtn.addEventListener("click", function() {
    // Tăng số lượng trong giỏ hàng khi nhấn vào
    cartCount++;
    // Cập nhật số lượng trong logo giỏ hàng
    cartLogo.textContent = cartCount;
    // Hiển thị popup
    showPopup();
});

// Hiển thị popup
function showPopup() {
    cartPopup.style.display = "block";
    // Thay đổi hình ảnh và thông tin sản phẩm trong popup
    popupImg.src = "product-image.jpg"; // Thay đổi đường dẫn hình ảnh sản phẩm
    popupProduct.textContent = "Sản phẩm A"; // Thay đổi thông tin sản phẩm
    // Tự động ẩn popup sau 3 giây
    setTimeout(function() {
        hidePopup();
    }, 3000);
}

// Ẩn popup
function hidePopup() {
    cartPopup.style.display = "none";
}
