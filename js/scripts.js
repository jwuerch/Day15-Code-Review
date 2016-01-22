var pingPong = function(num) {
    var arr = [];
    if (!num.toString().match(/^[0-9]*$|^\s+/gmi)) {
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
    $(".answer-box").show();
    for (var i =0; i < result.length; i++) {
      eval("var arr" + i + "= new Array();")
      eval("arr" + i + ".push(result[i])");
      console.log(eval("arr" + i))
    };


    console.log(result);












    (event).preventDefault();
  });
});
