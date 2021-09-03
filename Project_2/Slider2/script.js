const firstSlideIndex = 1
const lastSlideIndex = 3

let currentSlideIndex = 2

function changeSlide() {
  const radio = document.querySelector('#radio' + currentSlideIndex)
  radio.checked = true
  currentSlideIndex++
  if (currentSlideIndex > lastSlideIndex){
    currentSlideIndex = firstSlideIndex
  }
}

setInterval(changeSlide, 4000)
