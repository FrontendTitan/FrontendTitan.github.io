/**
 * @file nav.mobile.ts
 * @description This file contains the code for the mobile navigation.
 */

let isNavActive = false
document.querySelector('.mobile-nav-button')!.addEventListener('click', () => {
    const mobileButtonsDisplay: HTMLElement = document.getElementById('mobile-buttons-display')!
    const mobileSocialsDisplay: HTMLElement = document.getElementById('mobile-socials-display')!

    const arr = [mobileButtonsDisplay, mobileSocialsDisplay]
    arr.forEach((el) => {
        switch (isNavActive) {
            case true:
                el!.style.display = 'none'
                break
            case false:
                el!.style.display = 'flex'
                break
        }
    }); isNavActive = !isNavActive
})