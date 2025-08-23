document.getElementsByClassName('hamburger-btn')[0].addEventListener('click', () => {
    setTimeout(() => {
        document.getElementsByClassName('dropdown-menu')[0].style.display = 'flex';
    }, 200);
});

document.getElementsByClassName('home-btn')[0].addEventListener('click', () => {
    setTimeout(() => {
        document.getElementsByClassName('dropdown-menu')[0].style.display = 'none';
    }, 200);
});

if (window.innerWidth < 1024) {

    let clickables = document.querySelectorAll('.clickable');

    for (let i = 0; i < clickables.length; i++) {
        clickables[i].addEventListener('click', () => {
            clickables[i].style.transition = "0.5s";
            clickables[i].style.transform = "scale(1.2, 1.2)"
            setTimeout(() => {
                clickables[i].style.transform = "scale(1, 1)"
            }, 200);
        })
    }
}
