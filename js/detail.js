function showProductDetail() {
    var modal = document.getElementById("productDetailModal");
    modal.style.display = "block";
}

function closeProductDetail() {
    var modal = document.getElementById("productDetailModal");
    modal.style.display = "none";
}
function highlightProduct(element) {
    element.classList.add("selected");
}

function unhighlightProduct(element) {
    element.classList.remove("selected");
}
