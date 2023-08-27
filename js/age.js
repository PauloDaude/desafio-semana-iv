function limite(input) {
  let countValue = '';
  let inputValue = input.value;

  for (let i = 0; i < inputValue.length; i++) {
    if (!isNaN(inputValue[i])) { // o !isNaN() significa se caso for número
      countValue += inputValue[i];
    }
    if (countValue.length >= 2) {
      break;
    }
  }

  input.value = countValue;
  
}
