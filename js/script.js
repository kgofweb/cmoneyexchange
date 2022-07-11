// DOM HANDLE
const title = document.querySelector('.title')
const card = document.querySelector('.card')
const montant = document.getElementById('montant')
const equivalance = document.getElementById('equivalance')
const divEquivalance = document.querySelector('.equivalance')
const montantRub = document.getElementById('montant-rub')
const equivalanceRub = document.getElementById('equivalance-rub')
const divEquivalanceRub = document.querySelector('.equivalance-rub')

const montantAc = document.getElementById('montant-ac')
const equivalanceAc = document.getElementById('equivalance-ac')
const divEquivalanceAc = document.querySelector('.equivalance-ac')
const montantRubAc = document.getElementById('montant-rub-ac')
const equivalanceRubAc = document.getElementById('equivalance-rub-ac')
const divEquivalanceRubAc = document.querySelector('.equivalance-rub-ac')

// EVENT LISTENER
montant.addEventListener('input', conversion)
montantRub.addEventListener('input', conversionRub)

// ================= AO ================= //
// Init Rate
let rate = 0.0970
let rateRub = 10.1

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


// ================= AC ================= //
let rateAc = 0.0970
let rateRubAc = 10.1

montantAc.addEventListener('input', () => {
  // Get user input value
  const userInputValue = montantAc.value
  // Conersion
  const tatal = new Intl.NumberFormat().format(userInputValue * rateAc)
  // Insert to HTML
  equivalanceAc.innerHTML = `<b>${tatal}</b>`

  // Dynamic show div equivalance
  if (userInputValue) {
    divEquivalanceAc.style.display = 'flex'
  } else {
    divEquivalanceAc.style.display = 'none'
  }
})

montantRubAc.addEventListener('input', () => {
  // Get user input value
  const userInputValue = montantRubAc.value
  // Conersion
  const tatal = new Intl.NumberFormat().format(userInputValue * rateRubAc)
  // Insert to HTML
  equivalanceRubAc.innerHTML = `<b>${tatal}</b>`

  // Dynamic show div equivalance
  if (userInputValue) {
    divEquivalanceRubAc.style.display = 'flex'
  } else {
    divEquivalanceRubAc.style.display = 'none'
  }
})

// ============== Scroll Reveal ============== //
const sr = ScrollReveal({
  distance: '90px',
  duration: 1500,
})

sr.reveal(`.title`, { origin: 'top', delay: 300 })
sr.reveal(`.card-1`, { origin: 'left', delay: 500 })
