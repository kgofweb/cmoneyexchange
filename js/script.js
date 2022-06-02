// DOM HANDLE
const montant = document.getElementById('montant')
const equivalance = document.getElementById('equivalance')
const divEquivalance = document.querySelector('.equivalance')

// EVENT LISTENER
montant.addEventListener('input', conversion)

// Init Rate
let rate = 0.102

function conversion () {
  // Get user input value
  const userInputValue = montant.value
  // Conersion
  const tatalMoney = new Intl.NumberFormat().format(userInputValue * rate)

  // Insert to HTML
  equivalance.innerHTML = `<b>${tatalMoney}</b>`

  // Dynamic show div equivalance
  if (userInputValue) {
    divEquivalance.style.display = 'block'
  } else {
    divEquivalance.style.display = 'none'
  }
}