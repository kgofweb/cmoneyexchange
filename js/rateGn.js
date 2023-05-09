// DOM
const montant_guinee = document.getElementById('guinee_vers_russie')
const equivalance_guinee = document.getElementById('equivalance-guinee')
const divEquivalance_guinee = document.querySelector('.equivalance-guinee')
const russ_vers_guinee = document.getElementById('russie_vers_guinee')
const equivalance_rub_guinee= document.getElementById('equivalance-rub-guinee')
const divEquivalance_rub_guinee = document.querySelector('.equivalance-rub-guinee')

// Rate Only AC
let guinee_vers_rus = 0.007596220
let russie_vers_gui = 107.261

montant_guinee.addEventListener('input', () => {
  // Get user input value
  const userInputValue = montant_guinee.value
  // Conersion
  const tatal = new Intl.NumberFormat().format(userInputValue * guinee_vers_rus)
  // Insert to HTML
  equivalance_guinee.innerHTML = `
    <span><i class="me-2 fa-solid fa-sack-dollar"></i> ${tatal}</span> <span><i class="fa-solid fa-ruble-sign"></i></span>
  `
  
  // Dynamic show div equivalance
  if (userInputValue) {
    divEquivalance_guinee.style.display = 'flex'
  } else {
    divEquivalance_guinee.style.display = 'none'
  }
})

russ_vers_guinee.addEventListener('input', () => {
  // Get user input value
  const userInputValue = russ_vers_guinee.value
  // Conersion
  const tatal = new Intl.NumberFormat().format(userInputValue * russie_vers_gui)
  // Insert to HTML
  equivalance_rub_guinee.innerHTML = `
    <span><i class="me-2 fa-solid fa-sack-dollar"></i> ${tatal}</span> <span class="fw-bold">FG</span>
  `

  // Dynamic show div equivalance
  if (userInputValue) {
    divEquivalance_rub_guinee.style.display = 'flex'
  } else {
    divEquivalance_rub_guinee.style.display = 'none'
  }
})
