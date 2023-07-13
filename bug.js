document.getElementById("fixButton").addEventListener("click", function() {
    var cart = [1, 2, 3, 4, 5]; // Example cart array
  
    // Fix the cart quantity bug
    var fixedCart = cart.map(function(quantity) {
      return quantity * 2;
    });
  
    var itemList = document.getElementById("itemList");
    itemList.innerHTML = ""; // Clear the item list
  
    // Display the fixed cart
    fixedCart.forEach(function(quantity, index) {
      var listItem = document.createElement("li");
      listItem.textContent = "Item " + (index + 1) + ": " + quantity;
      itemList.appendChild(listItem);
    });
  });
  