"use strict";
const nav = {
    homeButton: document.getElementById('nav-home-btn'),
    homeButtonLogo: document.getElementById('nav-home-logo-btn'),
    contactButton: document.getElementById('nav-contact-btn'),
    projectsButton: document.getElementById('nav-projects-btn'),
    blogButton: document.getElementById('nav-blog-btn'),
    githubLogo: document.getElementById('github-nav-logo'),
    youtubeLogo: document.getElementById('youtube-nav-logo'),
};
nav.homeButton.addEventListener('click', () => {
    window.location.href = '/';
});
nav.homeButtonLogo.addEventListener('click', () => {
    window.location.href = '/';
});
nav.contactButton.addEventListener('click', () => {
    window.location.href = '/contact';
});
nav.projectsButton.addEventListener('click', () => {
    window.location.href = '/projects';
});
nav.blogButton.addEventListener('click', () => {
    window.location.href = '/blog';
});
nav.githubLogo.addEventListener('click', () => {
    window.open('https://github.com/FrontendTitan', '_blank');
});
nav.youtubeLogo.addEventListener('click', () => {
    window.open('https://youtube.com/@FrontendTitan?si=aTr5UtnhxzOIuLmJ', '_blank');
});
