const allLocalStorage = {
  typeAccount: localStorage.getItem('typeAccount'),
  financialMarkets: localStorage.getItem('financialMarkets'),
  investmentSituation: localStorage.getItem('investmentSituation'),
  trainingResource: localStorage.getItem('trainingResource'),
  nameFull: localStorage.getItem('typeAccount'),
  email: localStorage.getItem('email'),
  age: localStorage.getItem('age')
}

const keys = Object.keys(allLocalStorage)

keys.forEach(key => {
  let value = allLocalStorage[key]
  if (key === 'trainingResource') {
    const array = allLocalStorage[key].split(',')
    console.log('trainingResource: ', array)
  } else {
    console.log(`${key}: ${value}`)
  }
})

function success() {
  if (document.title === 'Success') {
    localStorage.clear()
    window.location.href = './tela1.html'
  }
}