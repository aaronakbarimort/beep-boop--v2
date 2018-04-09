$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefualt();

    var userInput = $("#userInput").val();

    function evaluateInputValue(inputValue) {
      if (userInput % 3 === 0) {
        return "I'm Sorry...";
      }
      else if (userInput === 1) {
        return "Boop!";
      }
      else if (userInput === 0) {
        return "Beep!";
      }
      else {
        return userInput;
      }
    }

    $("#results").text(inputValue);
  });
});
