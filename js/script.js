// DOM HANDLE
const title = document.querySelector('.title')
const card = document.querySelector('.card')
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
let rateXOF = 0.08981

let rateRUB = 9.8

function conversion () {
  // Get user input value
  const userInputValue = montant.value
  // Conersion
  const tatalMoney = new Intl.NumberFormat().format(userInputValue * rateXOF)
  // Insert to HTML
  equivalance.innerHTML = `<span><i class="me-3 fa-solid fa-coins"></i> ${tatalMoney}</span> <span>RUB</span>`

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
  const tatalMoney = new Intl.NumberFormat().format(userInputVal * rateRUB)
  // Insert to HTML
  equivalanceRub.innerHTML = `<span><i class="me-3 fa-solid fa-coins"></i> ${tatalMoney}</span> <span>CFA</span>`

  // Dynamic show div equivalance
  if (userInputVal) {
    divEquivalanceRub.style.display = 'flex'
  } else {
    divEquivalanceRub.style.display = 'none'
  }
}
