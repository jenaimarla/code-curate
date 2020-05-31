
const link = document.querySelector('#code-path') // Ton lien
const blockShow = document.querySelector('.flipShow') // Le block qui apparaît
const blockHide = document.querySelector('.flipHide') // Le block qui disparait

link.addEventListener('click', () => {
  blockShow.classList.add('flipShow')
  blockHide.classList.add('flipHide')
})
