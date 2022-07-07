const navbar = document.querySelector('.top-section')
const newsletter = document.querySelector('.newsletter-section')

window.addEventListener('scroll', () => {
    if(scrollY >= 105){
        navbar.classList.add('bg')
    }
    else{
        navbar.classList.remove('bg')
    }

    if(scrollY >= 1076) {
        newsletter.classList.add('newsletter-animation')
    }
    else{
        newsletter.classList.remove('newsletter-animation')
    }
    console.log(Math.floor(scrollY))
})