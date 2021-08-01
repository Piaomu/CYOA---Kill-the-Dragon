const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const forest = document.getElementById('btn-forest')
const mountains = document.getElementById('btn-mountains')
const countryside = document.getElementById('btn-countryside')

let activeSlide = 0

function showButtons() {
  if(activeSlide === 0) {
    forest.style.visibility = 'visible'
    mountains.style.visibility = 'hidden'
    countryside.style.visibility = 'hidden'
  } else if(activeSlide === 1) {
    forest.style.visibility = 'hidden'
    mountains.style.visibility = 'visible'
    countryside.style.visibility = 'hidden'
  } else {
    forest.style.visibility = 'hidden'
    mountains.style.visibility = 'hidden'
    countryside.style.visibility = 'visible'
  }

}

rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }
  

  setBgToBody()
  setActiveSlide()
  showButtons()
  
})

leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setBgToBody()
  setActiveSlide()
  showButtons()
})

setBgToBody()
showButtons()

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}
