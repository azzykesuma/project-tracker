let hamburger = document.getElementById('hamburger')
let menu = document.querySelector('.menuMobile')

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active')
    if(menu.classList.contains('active')) {
        hamburger.src = './images/icon-close.svg'
    } else {
        hamburger.src = './images/icon-hamburger.svg'
    }
})