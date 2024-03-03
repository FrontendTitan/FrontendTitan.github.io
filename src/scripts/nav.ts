interface iNav {
    homeButton: HTMLHeadingElement,
    homeButtonLogo: HTMLHeadingElement,
    contactButton: HTMLHeadingElement,
    projectsButton: HTMLHeadingElement,
    blogButton: HTMLHeadingElement,
    ps5Button: HTMLHeadingElement,
    githubLogo: HTMLImageElement,
    youtubeLogo: HTMLImageElement,
}

const nav: iNav = {
    homeButton: document.getElementById('nav-home-btn') as HTMLHeadingElement,
    homeButtonLogo: document.getElementById('nav-home-logo-btn') as HTMLHeadingElement,
    contactButton: document.getElementById('nav-contact-btn') as HTMLHeadingElement,
    projectsButton: document.getElementById('nav-projects-btn') as HTMLHeadingElement,
    blogButton: document.getElementById('nav-blog-btn') as HTMLHeadingElement,
    ps5Button: document.getElementById('nav-ps5-btn') as HTMLHeadingElement,
    githubLogo: document.getElementById('github-nav-logo') as HTMLImageElement,
    youtubeLogo: document.getElementById('youtube-nav-logo') as HTMLImageElement,
}

nav.homeButton.addEventListener('click', () => {
    window.location.href = '/'
})

nav.homeButtonLogo.addEventListener('click', () => {
    window.location.href = '/'
})

nav.contactButton.addEventListener('click', () => {
    window.location.href = '/contact'
})

nav.projectsButton.addEventListener('click', () => {
    window.location.href = '/projects'
})

nav.blogButton.addEventListener('click', () => {
    window.location.href = '/blog'
})

nav.ps5Button.addEventListener('click', () => {
    window.location.href = '/ps5'
})

nav.githubLogo.addEventListener('click', () => {
    window.open('https://github.com/FrontendTitan', '_blank')
})

nav.youtubeLogo.addEventListener('click', () => {
    window.open('https://youtube.com/@FrontendTitan?si=aTr5UtnhxzOIuLmJ', '_blank')
})