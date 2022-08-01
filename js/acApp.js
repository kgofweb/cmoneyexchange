// DOM
const montantAc = document.getElementById('montant-ac')
const equivalanceAc = document.getElementById('equivalance-ac')
const divEquivalanceAc = document.querySelector('.equivalance-ac')
const montantRubAc = document.getElementById('montant-rub-ac')
const equivalanceRubAc = document.getElementById('equivalance-rub-ac')
const divEquivalanceRubAc = document.querySelector('.equivalance-rub-ac')

// Rate Only AC
let rateAc = 0.093
let rateRubAc = 9.09090

montantAc.addEventListener('input', () => {
  // Get user input value
  const userInputValue = montantAc.value
  // Conersion
  const tatal = new Intl.NumberFormat().format(userInputValue * rateAc)
  // Insert to HTML
  equivalanceAc.innerHTML = `
    <span><i class="me-3 fa-solid fa-coins"></i> ${tatal}</span> <span>RUB</span>
  `
  

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
  equivalanceRubAc.innerHTML = `
    <span><i class="me-3 fa-solid fa-coins"></i> ${tatal}</span> <span>CFA</span>
  `

  // Dynamic show div equivalance
  if (userInputValue) {
    divEquivalanceRubAc.style.display = 'flex'
  } else {
    divEquivalanceRubAc.style.display = 'none'
  }
})
