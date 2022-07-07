const menuOpen = document.getElementById("menu-open")
const menuClose = document.getElementById("menu-close")
const mobileMenu = document.querySelector(".mobile-menu")
const logo = document.querySelector(".logo")
const header = document.querySelector("header")

function openMenu(){
    mobileMenu.style.display = "block"
    menuOpen.style.display = "none"
    menuClose.style.display = "block"
    header.style.background = "rgba(70, 74, 143, 1)"
    logo.style.color = "white"
}

function closeMenu(){
    menuOpen.style.display = "block"
    menuClose.style.display = "none"
    mobileMenu.style.display = "none"
    header.style.background = "white"
    logo.style.color = "black"
}

menuOpen.onclick = openMenu
menuClose.onclick = closeMenu

const typed = new Typed(".typing",{
    strings: ["First, solve the problem. Then, write the code.", "“Website without visitors is like a ship lost in the horizon -Dr. Christopher Dayagdag", "hey"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
})