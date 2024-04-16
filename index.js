const mainContainer = document.querySelector('.main-container')
const prompt = document.querySelector('.prompt')

prompt.addEventListener('click', () => {
  mainContainer.classList.toggle('full-size')
})