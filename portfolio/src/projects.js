'use strict';

// Project filtering Logic
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectcontainer = document.querySelector('.projects');
categories.addEventListener('click', (event) => {
    const filtering = event.target.dataset.filter;
    if (filtering == null) {
        return;
    }

//active menu reset
const active = document.querySelector('.category_selected');
active.classList.remove('category_selected');
event.target.classList.add('category_selected');

//project filtering process
projectcontainer.classList.add('anim_out');
    projects.forEach((project) => {
        if (filtering === 'all' || filtering === project.dataset.type)  {
            project.style.display = 'block';
        }
        else{
            project.style.display = 'none';
        }
    });
    setTimeout(()=>{
        projectcontainer.classList.remove('anim_out');
    }, 250)
});
