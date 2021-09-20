/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

const startingT = performance.now();

const nav = document.querySelector("#navbar__list");
const sec = document.querySelectorAll("section");


/*------------------------------Injecting dynamic <li> in nav menu & adding class menu_link----------------------- */
for (let i = 0; i < sec.length; i++){
    const navIt = document.createElement("li");
    navIt.innerHTML=`<a href="#${sec[i].id}" class="menu__link">${sec[i].getAttribute('data-nav')}</a>`
    nav.appendChild(navIt);
}

/*-----------------------------Add event Listener & apply Active Class----------------------- */

const navItems = document.querySelectorAll('.menu__link');

let counter = 0;

navItems.forEach((item,index) => {
    item.addEventListener('click', (e) => {
        smoothScroll(e,item);
        counter = index;
        setActiveClass();
        setActiveClassNav()
    })
})
/*------------------------smooth Scroll-------------------- */
function smoothScroll(e,item) {
    e.preventDefault();
    const href = item.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: "smooth" });
}

/*------------------------set active class---------------- */
function setActiveClass() {
    sec.forEach(s => {
        s.classList.remove("your-active-class");
    })
    sec[counter].classList.add("your-active-class");
}

function setActiveClassNav() {
    navItems.forEach(item => {
        item.classList.remove("active-class");
    })
    navItems[counter].classList.add("active-class");
}


/*-----------------------------apply Active Class on manual scrolling -------------------------- */

document.addEventListener('scroll', () => {
    sec.forEach((s,index) => {
        if (s.getBoundingClientRect().top <= 250 && s.getBoundingClientRect().top >= -250) {
            setActiveClass();
            counter = index;
            setActiveClassNav()
        }
    });
});

  
const endingT = performance.now();
console.log("performance time is:" + (endingT-startingT));