let sidebar = document.getElementsByClassName('sidebar-container')[0];
let homeBtns = document.getElementsByClassName('home');
let clickableTxts = document.querySelectorAll('.clickable-text');
let clickableImgs = document.querySelectorAll('.clickable-img-round');

document.getElementsByClassName('hamburger-btn')[0].addEventListener('click', () => {
    setTimeout(() => {
        sidebar.classList.add('sidebar-opened');
    }, 200);
});

for (let i = 0; i < homeBtns.length; i++) {
    homeBtns[i].addEventListener('click', () => {
        setTimeout(() => {
            sidebar.classList.remove('sidebar-opened');
        }, 200);
    })
};

if (window.innerWidth < 1024) {
    for (let i = 0; i < clickableTxts.length; i++) {
        let txt = clickableTxts[i]
        txt.addEventListener('click', () => {
            txt.classList.add('txt-clicked');
            setTimeout(() => {
                txt.classList.remove('txt-clicked');
            }, 200);
        })
    };

    for (let i = 0; i < clickableImgs.length; i++) {
        let img = clickableImgs[i]
        img.addEventListener('click', () => {
            img.classList.add('round-img-clicked');
            setTimeout(() => {
                img.classList.remove('round-img-clicked');
            }, 3000);
        })
    };
}
