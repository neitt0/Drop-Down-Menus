const mainContainer = document.querySelector('.main-container')
const prompt = document.querySelector('.prompt')
const options = document.querySelectorAll('.options')
const arrow = document.querySelector('.arrow')
const fruitImgContainer = document.querySelector('.fruit-images')
const fruitImages = fruitImgContainer.getElementsByTagName('img')


options.forEach(option => {
  option.addEventListener('click', () => {
    mainContainer.classList.toggle('full-size')
    arrow.classList.toggle('opened')
    
    // replace text with option selected
    prompt.children[0].innerText = option.innerText
  })

  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('mouseover', () => {
      fruitImages[i].style.transition = '.05s ease-in'

      fruitImages[i].style.opacity = '100'  
    })
    options[i].addEventListener('mouseout', () => {
      fruitImages[i].style.transition = '.3s ease-out'
      fruitImages[i].style.opacity = '0'  
    })
  }
})
