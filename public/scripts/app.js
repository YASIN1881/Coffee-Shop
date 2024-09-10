const toggleThemeBtns = document.querySelectorAll('.toggle-theme');
const submenuOpenBtn = document.querySelector('.submenu__open--btn');
const submenu = document.querySelector('.submenu');
const navOpenBtn = document.querySelector('.nav-icon');
const navCloseBtn = document.querySelector('.nav-close-btn');
const nav = document.querySelector('.nav');
const cartOnpenBtn = document.querySelector('.cart-icon');
const cartCloseBtn = document.querySelector('.cart-close-btn');
const cart = document.querySelector('.cart');
const overlay = document.querySelector('.overlay');


toggleThemeBtns.forEach( (btn) => {
    btn.addEventListener('click', () => {
        if(localStorage.theme === 'dark'){
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
        }else{
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        }
    })
})

submenuOpenBtn.addEventListener('click', (e) => {
    e.currentTarget.parentElement.classList.toggle('text-orange-300')
    submenu.classList.toggle("submenu--open")
})

navOpenBtn.addEventListener('click', () => {
    nav.classList.remove('-right-64')
    nav.classList.add('right-0')
    overlay.classList.add('overlay--visible')
})

cartOnpenBtn.addEventListener('click', () => {
    cart.classList.remove('-left-64')
    cart.classList.add('left-0')
    overlay.classList.add('overlay--visible')
})

function closeNav () {
    nav.classList.remove('right-0')
    overlay.classList.remove('overlay--visible')
    nav.classList.add('-right-64')
}

function closeCart () {
    cart.classList.add('-left-64')
    cart.classList.remove('left-0')
    overlay.classList.remove('overlay--visible')
}


navCloseBtn.addEventListener('click', closeNav)
cartCloseBtn.addEventListener('click', closeCart)
overlay.addEventListener('click', closeNav)
