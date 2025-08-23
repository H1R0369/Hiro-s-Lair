document.getElementsByClassName('hamburger-btn')[0].addEventListener('click', () => {
    document.getElementsByClassName('dropdown-menu')[0].style.display = 'flex';
});

document.getElementsByClassName('home-btn')[0].addEventListener('click', () => {
    document.getElementsByClassName('dropdown-menu')[0].style.display = 'none';
})
