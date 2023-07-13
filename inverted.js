document.getElementById("patternForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var rowsInput = document.getElementById("rowsInput");
    var rows = parseInt(rowsInput.value);
    var pattern = "";
  
    for (var row = rows; row >= 1; row--) {
      for (var col = 1; col <= row; col++) {
        pattern += "*";
      }
      pattern += "<br>";
    }
  
    document.getElementById("pattern").innerHTML = pattern;
    rowsInput.value = ""; // Clear the input field
  });
  