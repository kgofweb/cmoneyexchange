// DOM HANDLE
const montant = document.getElementById('montant')
const equivalance = document.getElementById('equivalance')
const divEquivalance = document.querySelector('.equivalance')
const montantRub = document.getElementById('montant-rub')
const equivalanceRub = document.getElementById('equivalance-rub')
const divEquivalanceRub = document.querySelector('.equivalance-rub')

// EVENT LISTENER
montant.addEventListener('input', conversion)
montantRub.addEventListener('input', conversionRub)

// ================= AO ================= //
// Init Rate
let rate = 0.096
let rateRub = 9.6153846

function conversion () {
  // Get user input value
  const userInputValue = montant.value
  // Conersion
  const tatalMoney = new Intl.NumberFormat().format(userInputValue * rate)
  // Insert to HTML
  equivalance.innerHTML = `<b>${tatalMoney}</b>`

  // Dynamic show div equivalance
  if (userInputValue) {
    divEquivalance.style.display = 'flex'
  } else {
    divEquivalance.style.display = 'none'
  }
}

function conversionRub() {
  // Get user input value
  const userInputVal = montantRub.value
  // Conersion
  const tatalMoney = new Intl.NumberFormat().format(userInputVal * rateRub)
  // Insert to HTML
  equivalanceRub.innerHTML = `<b>${tatalMoney}</b>`

  // Dynamic show div equivalance
  if (userInputVal) {
    divEquivalanceRub.style.display = 'flex'
  } else {
    divEquivalanceRub.style.display = 'none'
  }
}
