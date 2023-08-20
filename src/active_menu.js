const sectionIds = ['#home', '#about', '#skills', '#mywork', '#testimonial', '#contact'];

const sections = sectionIds.map((id)=> document.querySelector(id));
const navItems = sectionIds.map((id) => document.querySelector(`[href="${id}"]`));
const visibleSections = sectionIds.map(() => false);

let activeNavItem = navItems[0];

const options = {
    rootMargin : '-20% 0px 0px 0px',
    threshold : [0, 0.98],
};

const observer = new IntersectionObserver(obsCallback, options);
    sections.forEach((section) => observer.observe(section));

function obsCallback(entries) {
    let selectLast;
entries.forEach(entry => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;
    selectLast = index === sectionIds.length - 1 && entry.isIntersecting && entry.intersectionRatio >= 0.95;
});

const navIndex = selectLast ? sectionIds.length - 1 : findFirstIntersecting(visibleSections); 
selectNavItem(navIndex);



function findFirstIntersecting(visible){
    const index = visible.indexOf(true);
    return index >=0 ? index : 0;
}

function selectNavItem(index){
    const navItem = navItems[index];
    if (!navItem) return;
    activeNavItem.classList.remove('active');
    activeNavItem = navItem;
    activeNavItem.classList.add('active');
}
}