const incompleteName = document.querySelector('#incomplete-name')
const invalidEmail = document.querySelector('#invalid-email')
const form = document.getElementById('form')
let isValid = true

form.addEventListener('submit', event => {
  event.preventDefault()

  const nameFull = document.getElementById('name-full').value
  const email = document.getElementById('email').value
  const age = document.getElementById('age').value

  if (nameFull.split(' ').length < 2) {
    incompleteName.innerHTML = '*Please type your full name'
    isValid = false
  } else {
    incompleteName.innerHTML = null
    isValid = true
  }

  if (email.includes('@') === false || email.split('@')[1] === '') {
    invalidEmail.innerHTML = '*Please type your correct email address'
    isValid = false
  } else {
    invalidEmail.innerHTML = null
    isValid = true
  }

  if (isValid) {
    localStorage.setItem('nameFull', nameFull)
    localStorage.setItem('email', email)
    localStorage.setItem('age', age)

    window.location.href = './success.html'
  }
})

function limite(input) {
  let countValue = ''
  let inputValue = input.value

  for (let i = 0; i < inputValue.length; i++) {
    if (!isNaN(inputValue[i])) {
      // o !isNaN() significa se caso for número
      countValue += inputValue[i]
    }
    if (countValue.length >= 2) {
      break
    }
  }

  input.value = countValue
}
