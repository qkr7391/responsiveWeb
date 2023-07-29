
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