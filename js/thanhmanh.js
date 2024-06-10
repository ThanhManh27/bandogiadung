

    // Function to add items to cart
    function addToCart(itemName, price) {
        var quantity = parseInt(prompt("Enter the quantity:", "1"));
        if (quantity > 0) {
            var total = quantity * price;
            var cartItem = "<tr><td>" + itemName + "</td><td>" + quantity + "</td><td>$" + total + "</td></tr>";
            $(".show-cart").append(cartItem);
            $(".total-cart").text(getTotalCart());
        } else {
            alert("Please enter a valid quantity!");
        }
    }

    // Function to calculate total price of items in cart
    function getTotalCart() {
        var total = 0;
        $(".show-cart").find("tr").each(function() {
            var price = parseFloat($(this).find("td").eq(2).text().replace("$", ""));
            total += price;
        });
        return total.toFixed(2);
    }

    // When document is ready
    $(document).ready(function() {
        // Example of adding items to cart
        $("#add-to-cart-button").click(function() {
            addToCart("Item Name", 10); // Replace "Item Name" and 10 with actual item name and price
        });
    });

