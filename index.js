let sidebar = document.querySelector('.sidebar-container');
let homeBtns = document.querySelectorAll('.home');
let clickableTxts = document.querySelectorAll('.clickable-text');
let clickableImgs = document.querySelectorAll('.clickable-img-round');

document.getElementsByClassName('hamburger-btn')[0].addEventListener('click', () => {
    setTimeout(() => {
        sidebar.classList.add('sidebar-opened');
    }, 200);
});

homeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        setTimeout(() => {
            sidebar.classList.remove('sidebar-opened')
        }, 200);
    })
})

document.querySelectorAll('.btn-anchor').forEach(link => {
    link.addEventListener('click', () => {
        setTimeout(() => {
            sidebar.classList.remove('sidebar-opened');
        }, 200);
    })
})

if (window.innerWidth < 1024) {
    clickableTxts.forEach(txt => {
        txt.addEventListener('click', () => {
            txt.classList.add('txt-clicked');
            setTimeout(() => {
                txt.classList.remove('txt-clicked');
            }, 200);
        })
    })

    clickableImgs.forEach(img => {
        img.addEventListener('click', () => {
            img.classList.add('round-img-clicked');
            setTimeout(() => {
                img.classList.remove('round-img-clicked')
            }, 2000);
        })
    })
}
