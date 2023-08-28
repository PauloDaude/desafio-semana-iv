const incompleteName = document.querySelector('#incomplete-name')
const invalidEmail = document.querySelector('#invalid-email')
const form = document.getElementById('form')
let isValid = true

form.addEventListener('submit', event => {
  event.preventDefault()
  const nameFull = document.getElementById('name-full').value
  const email = document.getElementById('email').value
  const age = document.getElementById('age').value

  if (!(validationNameFull(nameFull) && validationEmail(email))) {
    isValid = false
  }

  if (isValid) {
    localStorage.setItem('nameFull', nameFull)
    localStorage.setItem('email', email)
    localStorage.setItem('age', age)

    window.location.href = './success.html'
  }
})

function limit(input) {
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

function validationNameFull(nameFull) {
  if (nameFull.split(' ').length < 2) {
    incompleteName.innerHTML = '*Please type your full name'
    return false
  }
  incompleteName.innerHTML = null
  return true
}

function validationEmail(email) {
  if (email.includes('@') === false || email.split('@')[1] === '') {
    invalidEmail.innerHTML = '*Please type your correct email address'
    return false
  }
  invalidEmail.innerHTML = null
  return true
}
