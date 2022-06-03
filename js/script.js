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

// Init Rate
let rate = 0.1005
let rateRub = 8.69565217

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

function conversionRub() {
  // Get user input value
  const userInputVal = montantRub.value
  // Conersion
  const tatalMoney = new Intl.NumberFormat().format(userInputVal * rateRub)
  // Insert to HTML
  equivalanceRub.innerHTML = `<b>${tatalMoney}</b>`

  // Dynamic show div equivalance
  if (userInputVal) {
    divEquivalanceRub.style.display = 'block'
  } else {
    divEquivalanceRub.style.display = 'none'
  }
}

// ============== Scroll Reveal ============== //
const sr = ScrollReveal({
  distance: '90px',
  duration: 1500,
})

sr.reveal(`.title`, { origin: 'top', delay: 300 })
sr.reveal(`.card-1`, { origin: 'left', delay: 500 })
sr.reveal(`.card-2`, { origin: 'right', delay: 700 })
