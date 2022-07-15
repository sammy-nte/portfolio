const menuOpen = document.getElementById("menu-open")
const menuClose = document.getElementById("menu-close")
const mobileMenu = document.querySelector(".mobile-menu")
const logo = document.querySelector(".mobile-sn")

function openMenu(){
    mobileMenu.style.display = "block"
    menuOpen.style.display = "none"
    menuClose.style.display = "block"
    menuClose.style.color = "white"
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
    strings: ["First, solve the problem. Then, write the code.", "“A website without visitors is like a ship lost in the horizon -Dr. Christopher Dayagdag"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
})

function myWork(){
    window.location.href = "./mywork.html"
}

function aboutMe(){
    window.location.href = "./about.html"
}

function siteupdate(){
    document.getElementById("warning-display").style.display = 'block';
}

function closeSiteUpdate(){
    document.getElementById("warning-display").style.display = 'none';
}

document.querySelector(".mywork-btn").addEventListener('mouseover', ()=>{
    document.querySelector(".aboutme-btn").style.background = "var(--primary-color)";
    document.querySelector(".aboutme-btn").style.transition = "all 350ms ease";
    document.querySelector(".aboutme-btn").style.border = "none";
    document.querySelector(".aboutme-btn").style.color = "white";
    document.querySelector(".mywork-btn").style.background = "white";
    document.querySelector(".mywork-btn").style.transition = "all 350ms ease";
    document.querySelector(".mywork-btn").style.color = "var(--primary-color)";
})

document.querySelector(".mywork-btn").addEventListener('mouseleave', ()=>{
    document.querySelector(".aboutme-btn").style.background = "white";
    document.querySelector(".aboutme-btn").style.border = "1px solid var(--primary-color)";
    document.querySelector(".aboutme-btn").style.transition = "all 350ms ease";
    document.querySelector(".aboutme-btn").style.color = "var(--primary-color)";
    document.querySelector(".mywork-btn").style.background = "var(--primary-color)";
    document.querySelector(".mywork-btn").style.transition = "all 350ms ease";
    document.querySelector(".mywork-btn").style.color = "white";

})

document.querySelector(".aboutme-btn").addEventListener('mouseover', ()=>{
    document.querySelector(".aboutme-btn").style.background = "var(--primary-color)";
    document.querySelector(".aboutme-btn").style.transition = "all 350ms ease";
    document.querySelector(".aboutme-btn").style.border = "none";
    document.querySelector(".aboutme-btn").style.color = "white";
    document.querySelector(".mywork-btn").style.background = "white";
    document.querySelector(".mywork-btn").style.border = "1px solid var(--primary-color)";
    document.querySelector(".mywork-btn").style.transition = "all 350ms ease";
    document.querySelector(".mywork-btn").style.color = "var(--primary-color)";
})

document.querySelector(".aboutme-btn").addEventListener('mouseleave', ()=>{
    document.querySelector(".aboutme-btn").style.background = "white";
    document.querySelector(".aboutme-btn").style.border = "1px solid var(--primary-color)";
    document.querySelector(".aboutme-btn").style.transition = "all 350ms ease";
    document.querySelector(".aboutme-btn").style.color = "var(--primary-color)";
    document.querySelector(".mywork-btn").style.background = "var(--primary-color)";
    document.querySelector(".mywork-btn").style.transition = "all 350ms ease";
    document.querySelector(".mywork-btn").style.color = "white";

})
