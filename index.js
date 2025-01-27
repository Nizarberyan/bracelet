const menuIcon = document.querySelector('.menu-icon');
const closeMenu = document.querySelector('.close-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const viewers = document.querySelectorAll('.viewers span');

menuIcon.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
});

function updateViewers() {
    viewers.forEach(viewer => {
        const currentCount = parseInt(viewer.textContent);
        const randomChange = Math.floor(Math.random() * 10) - 5;
        const newCount = Math.max(30, Math.min(60, currentCount + randomChange));
        viewer.textContent = `${newCount} viewing now`;
    });
}

setInterval(updateViewers, 15000);