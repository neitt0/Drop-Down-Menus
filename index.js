const mainContainer = document.querySelector('.main-container')
const prompt = document.querySelector('.prompt')
const options = document.querySelectorAll('.options')
const arrow = document.querySelector('.arrow')

options.forEach(option => {
  option.addEventListener('click', () => {
    mainContainer.classList.toggle('full-size')
    arrow.classList.toggle('opened')

    // replace text with option selected
    prompt.children[0].innerText = option.innerText
  })
})