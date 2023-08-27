function limite(input) {
  var countValue = '';
  var inputValue = input.value;

  for (var i = 0; i < inputValue.length; i++) {
    if (!isNaN(inputValue[i])) { // o !isNaN() significa se caso for número
      countValue += inputValue[i];
    }
    if (countValue.length >= 2) {
      break;
    }
  }

  input.value = countValue;
  
}
