function previousScreen() {
  const actualFile = document.title.toLowerCase().split(' ')
  const previousFile = actualFile[0] + (+actualFile.pop() - 1)
  window.location.href = './' + previousFile + '.html'
}

function nextScreen(button) {
  let isValid = true

  const actualFile = document.title.toLowerCase().split(' ')
  if (actualFile[1] == '1') {
    localStorage.clear()
  }

  if (button.textContent === 'Next') {
    if (
      !(
        validationSelect(actualFile) &&
        validationRadio(actualFile) &&
        validationCheckbox(actualFile) &&
        validationTextarea(actualFile)
      )
    ) {
      isValid = false
    }
  }

  if (isValid) {
    const nextFile = actualFile[0] + (+actualFile.pop() + 1)
    if (document.title === 'Success') {
      window.location.href = './tela1.html'
    } else {
      window.location.href = './' + nextFile + '.html'
    }
  }
}

function validationSelect(actualFile) {
  const invalidMessage = document.querySelector('#select-empty')

  if (actualFile[1] === '3' || actualFile[1] === '4') {
    const dropdown = document.getElementById('dropdown')
    if (dropdown.value) {
      localStorage.setItem(
        actualFile[1] === '3' ? 'typeAccount' : 'investmentSituation',
        dropdown.value
      )
      invalidMessage.innerHTML = null
      return true
    }

    invalidMessage.innerHTML = '*Choose an option to continue'
    return false
  }
  return true
}

function validationRadio(actualFile) {
  if (actualFile[1] === '3') {
    const invalidMessage = document.querySelector('#choice-empty')

    const ratioOptions = document.getElementsByClassName('choice-radio')
    const options = [...ratioOptions]
    let chosenOption

    options.forEach(option => {
      if (option.checked) chosenOption = option.value
    })

    if (chosenOption) {
      localStorage.setItem('financialMarkets', chosenOption)

      invalidMessage.innerHTML = null
      return true
    }

    invalidMessage.innerHTML = '*Choose an option to continue'
    return false
  }
  return true
}

function validationCheckbox(actualFile) {
  if (actualFile[1] === '4') {
    const invalidMessage = document.querySelector('#checkbox-empty')

    const checkboxOptions = document.getElementsByClassName('choice-checkbox')
    const options = [...checkboxOptions]
    let chosenOptions = []

    options.forEach(option => {
      if (option.checked) {
        chosenOptions.push(option.value)
      }
    })

    // console.log(chosenOptions)
    if (chosenOptions.length > 0) {
      localStorage.setItem('trainingResource', chosenOptions)

      invalidMessage.innerHTML = null
      return true
    }

    invalidMessage.innerHTML = '*Choose one or more options'
    return false
  }

  return true
}

function validationTextarea(actualFile) {
  if (actualFile[1] === '5') {
    const invalidMessage = document.querySelector('#textarea-empty')

    const textArea = document.getElementById('text-area').value

    if (textArea) {
      if (textArea.length <= 130) {
        localStorage.setItem('investmentLoss', textArea)

        invalidMessage.innerHTML = null
        return true
      } else {
        invalidMessage.innerHTML = '*The limit has been exceeded'
        return false
      }
    }

    invalidMessage.innerHTML = '*Enter some text in the field'
    return false
  }
  return true
}

function wordLength(event, text) {
  let cont = text.length

  if (event.keyCode === 8) {
    cont--
  } else if (text.length >= 0) {
    cont++
  }

  const textLength = document.getElementById('word-length')
  if (cont > 0) {
    textLength.innerHTML = cont + '/130'
  } else {
    textLength.innerHTML = null
  }

  const invalidMessage = document.querySelector('#textarea-empty')
  if (cont > 130) {
    textLength.style.color = 'red'
  } else {
    invalidMessage.innerHTML = null
    textLength.style.color = 'rgb(62, 178, 94)'
  }
}
