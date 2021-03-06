var pingPong = function(num) {
    var arr = [];
    if (!num.toString().match(/^[0-9]*$|^\s+/gmi) || num.toString() === "0") {
      return("Please enter an integer.");
    } else {
      for (num; num > 0; num--) {
        if (num % 15 === 0) {
          arr.unshift("pingpong");
        } else if (num % 5 === 0) {
          arr.unshift("pong");
        } else if (num % 3 === 0) {
          arr.unshift("ping");
        } else {
          arr.unshift(num);
        };
      };
      return arr;
    };
};

$(document).ready(function() {
  $("#answerForm").submit(function(event) {
    var num = $("#numberInput").val();
    var result = pingPong(num);
    $("#answerList").empty();
    if (result !== "Please enter an integer.") {
      for (i = 0; i < result.length; i++) {
        var listItem = document.createElement("li");
        listItem.innerHTML = result[i];
        document.getElementById("answerList").appendChild(listItem);
      };
    } else {
      $("#answerList").text(result);
    };
    (event).preventDefault();
  });
});
