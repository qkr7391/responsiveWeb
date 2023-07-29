
 // Different styling if scrolling Y coordinate is greater than headerHeight
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > headerHeight){
        header.classList.add('header_dark');
    }
    else{
        header.classList.remove('header_dark');
    }
});


//As you scroll down in the Home section, it becomes more and more transparent.
const home = document.querySelector('.home_container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', ()=>{
    home.style.opacity = 1 - window.scrollY / homeHeight;
});


// As you scroll down in the Home section, arrow will show on the site.

const arrow = document.querySelector('.arrow_up');
document.addEventListener('scroll', ()=>{
    arrow.style.opacity = window.scrollY / homeHeight;
});