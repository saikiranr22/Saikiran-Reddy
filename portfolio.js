/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

const roles = ['Java Developer', 'Web Developer'];
let roleIndex = 0;
const roleElement = document.getElementById('developer-role');

function typeRole() {
    const role = roles[roleIndex];
    let currentIndex = 0;
    const interval = setInterval(() => {
        roleElement.textContent = role.slice(0, currentIndex);
        currentIndex++;
        if (currentIndex > role.length) {
            clearInterval(interval);
            setTimeout(eraseRole, 1000); // Wait for 1 second before erasing
        }
    }, 200); // Typing speed
}

function eraseRole() {
    let currentIndex = roles[roleIndex].length;
    const interval = setInterval(() => {
        roleElement.textContent = roles[roleIndex].slice(0, currentIndex);
        currentIndex--;
        if (currentIndex === 0) {
            clearInterval(interval);
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeRole, 500); // Wait for 0.5 second before typing the next role
        }
    }, 100); // Backspacing speed
}

// Start the typing animation
typeRole();