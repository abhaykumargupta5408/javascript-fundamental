document.getElementById("addItemForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var itemInput = document.getElementById("itemInput");
    var item = itemInput.value;
  
    if (item !== "") {
      var itemList = document.getElementById("itemList");
      var existingItems = itemList.getElementsByTagName("li");
      var isDuplicate = false;
  
      // Check for duplicate item
      for (var i = 0; i < existingItems.length; i++) {
        if (existingItems[i].textContent === item) {
          isDuplicate = true;
          break;
        }
      }
  
      if (!isDuplicate) {
        var listItem = document.createElement("li");
        listItem.textContent = item;
        itemList.appendChild(listItem);
      } else {
        alert("Item is already in the cart!");
      }
  
      itemInput.value = ""; // Clear the input field
    }
  });
  