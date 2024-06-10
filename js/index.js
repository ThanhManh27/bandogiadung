function showProductDetail(imageUrl, name, description, price, stock) {
    var productDetail = document.getElementById("productDetail");
    var productDetailImage = document.getElementById("productDetailImage");
    var productDetailName = document.getElementById("productDetailName");
    var productDetailDescription = document.getElementById("productDetailDescription");
    var productDetailPrice = document.getElementById("productDetailPrice");
    var productDetailStock = document.getElementById("productDetailStock");

    // Populate product detail
    productDetailImage.src = imageUrl;
    productDetailName.textContent = name;
    productDetailDescription.innerHTML = '<p>' + description + '</p>';
    productDetailPrice.textContent = "Price: " + price;
    productDetailStock.textContent = "Sold: " + stock;

    // Show product detail
    productDetail.classList.remove("hidden");
}

function closeProductDetail() {
    var productDetail = document.getElementById("productDetail");
    productDetail.classList.add("hidden");
}
