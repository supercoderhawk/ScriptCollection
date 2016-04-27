function getFixedNumber(number, digit){
  return parseFloat(number).toFixed(digit + 1).substring(0, number.toString().lastIndexOf('.') + digit + 1);
}
