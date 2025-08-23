let dropdown = document.getElementsByClassName('dropdown-menu-container')[0];
let homeBtns = document.getElementsByClassName('home')
let clickables = document.querySelectorAll('.clickable');

document.getElementsByClassName('hamburger-btn')[0].addEventListener('click', () => {transitionMenu('open')});

for (let i = 0; i < homeBtns.length; i++) {
        document.getElementsByClassName('home')[i].addEventListener('click', () => {transitionMenu('close')});
};

if (window.innerWidth < 1024) {
    for (let i = 0; i < clickables.length; i++) {
        clickables[i].addEventListener('click', () => {
            clickables[i].style.transform = 'scale(1.2, 1.2)';
            setTimeout(() => {
                clickables[i].style.transform = 'scale(1, 1)';
            }, 200);
        });
    };
}

function transitionMenu(action) {
    let xTranslation = action == 'open' ? '0' : '100%';
    let delay = innerWidth < 1024 ? 200 : 0;
    setTimeout(() => {
        dropdown.style.transform = `translate(${xTranslation}, 0)`;
    }, delay);
};
