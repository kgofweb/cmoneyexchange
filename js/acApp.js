// DOM
const montantAc = document.getElementById('montant-ac')
const equivalanceAc = document.getElementById('equivalance-ac')
const divEquivalanceAc = document.querySelector('.equivalance-ac')
const montantRubAc = document.getElementById('montant-rub-ac')
const equivalanceRubAc = document.getElementById('equivalance-rub-ac')
const divEquivalanceRubAc = document.querySelector('.equivalance-rub-ac')

// Rate Only AC
let rateAc = 0.12200
let rateRubAc = 7.326

montantAc.addEventListener('input', () => {
  // Get user input value
  const userInputValue = montantAc.value
  // Conersion
  const tatal = new Intl.NumberFormat().format(userInputValue * rateAc)
  // Insert to HTML
  equivalanceAc.innerHTML = `
    <span><i class="me-2 fa-solid fa-sack-dollar"></i> ${tatal}</span> <span><i class="fa-solid fa-ruble-sign"></i></span>
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
    <span><i class="me-2 fa-solid fa-sack-dollar"></i> ${tatal}</span> <span class='fw-bold'>CFA</span>
  `

  // Dynamic show div equivalance
  if (userInputValue) {
    divEquivalanceRubAc.style.display = 'flex'
  } else {
    divEquivalanceRubAc.style.display = 'none'
  }
})
