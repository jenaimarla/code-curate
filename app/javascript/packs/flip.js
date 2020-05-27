var link = document.querySelector('#code-path') // Ton lien
var blockShow = document.querySelector('.flipShow') // Le block qui apparaît
var blockHide = document.querySelector('.flipHide') // Le block qui disparait

link.addEventListener('click', () => {
  blockShow.classList.add('flipShow')
  blockHide.classList.add('flipHide')
})
