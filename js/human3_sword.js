const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
  smallCups.forEach((cup, idx2) => {
    if(idx2 <= idx) {
      cup.classList.add('empty')
    } else {
      cup.classList.remove('empty')
    }
  })

  updateBigCup()
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.empty').length
  const totalCups = smallCups.length

  if(fullCups === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${fullCups / totalCups * 330}px`
    percentage.innerText = `${fullCups / totalCups *100}%`

    if(fullCups === totalCups) {
      remained.style.visibility = 'hidden'
      remained.style.height = 0
    } else {
      remained.style.visibility = 'visible'
    }
  }

  if(fullCups === 8) {
    document.getElementById("visible").style.visibility = "visible";
    }
  console.log(fullCups)
}

