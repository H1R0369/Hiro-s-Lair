let sidebar = document.querySelector('.sidebar-container');
let homeBtns = document.querySelectorAll('.home');
let clickableTxts = document.querySelectorAll('.clickable');
let clickableImgs = document.querySelectorAll('.clickable-img-round');
let popOutElements = document.querySelectorAll('.pop-out-trigger');

window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        document.querySelector('.scroll-txt').style.display = 'block';
    } else {
        document.querySelector('.scroll-txt').style.display = 'none';
    }
}, { passive: true });

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

let popOutInterval = 100;
let display = null;

popOutElements.forEach(el => {
    el.classList.add('pop-out-pre')
});

popOutElements.forEach(el => {
    display = el.style.display;
    el.style.display = 'none';
    setTimeout(() => {
        el.style.display = display;
        el.classList.add('pop-out')
    }, popOutInterval);
    popOutInterval += 100;
    console.log(popOutInterval);
});

popOutElements.forEach(el => {
    setTimeout(() => {
        el.classList.remove('pop-out')
    }, popOutInterval);
    popOutInterval += 100;
    console.log(popOutInterval);
});

if (window.innerWidth < 1024) {
    clickableTxts.forEach(txt => {
        txt.addEventListener('click', () => {
            txt.classList.add('clicked');
            setTimeout(() => {
                txt.classList.remove('clicked');
            }, 200);
        })
    });

    clickableImgs.forEach(img => {
        img.addEventListener('click', () => {
            img.classList.add('round-img-clicked');
            setTimeout(() => {
                img.classList.remove('round-img-clicked')
            }, 2000);
        })
    })
}
