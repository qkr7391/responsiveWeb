'use strict';

// Project filtering Logic

const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
categories.addEventListener('click', (event) => {
    const filtering = event.target.dataset.filter;
    if (filtering == null) {
        return;
    }
    projects.forEach((project) => {
        if (filtering === 'all' || filtering === project.dataset.type)  {
            project.style.display = 'block';
        }
        else{
            project.style.display = 'none';
        }
    })
})
