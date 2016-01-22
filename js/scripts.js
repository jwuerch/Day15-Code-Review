var pingPong = function(num) {
  if (!num.toString().match(/^[0-9]*$|^\s+/gmi)) {
    console.log(num)
    return false;
  } else {
    if (num % 15 === 0) {
      return "pingpong";
    } else if (num % 5 === 0) {
      return "pong";
    } else if (num % 3 === 0) {
      return "ping";
    } else {
      return num;
    };
  };
};

$(document).ready(function() {
  $("#answerForm").submit(function(event) {
    var num = $("#numberInput").val();
    var result = pingPong(num)
    $("#answerList").show().text(result);

    (event).preventDefault();
  });
});
