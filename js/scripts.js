var pingPong = function(num) {
  console.log(num);

  if (!num.toString().match(/^[0-9]*$|^\s+/gmi)) {
    return false
  } else {
    if (num % 15 === 0) {
      return "pingpong"
    } else if (num % 5 === 0) {


    }
  }
}
