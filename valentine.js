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

document.addEventListener('DOMContentLoaded', function() {
    const productsPerPage = 6;
    const productCards = document.querySelectorAll('.product-card');
    const totalPages = Math.ceil(productCards.length / productsPerPage);
    let currentPage = 1;

    const paginationNumbers = document.querySelector('.pagination-numbers');
    const prevButton = document.querySelector('.pagination-btn.prev');
    const nextButton = document.querySelector('.pagination-btn.next');

    
    for(let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.classList.add('pagination-btn');
        button.textContent = i;
        if(i === 1) button.classList.add('active');
        
        button.addEventListener('click', () => {
            setCurrentPage(i);
        });
        
        paginationNumbers.appendChild(button);
    }

    function setCurrentPage(pageNum) {
        currentPage = pageNum;
        
        document.querySelectorAll('.pagination-numbers .pagination-btn').forEach((button, index) => {
            button.classList.toggle('active', index + 1 === currentPage);
        });

        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;

        // Show/hide products
        productCards.forEach((card, index) => {
            const startIndex = (currentPage - 1) * productsPerPage;
            const endIndex = startIndex + productsPerPage;
            
            if(index >= startIndex && index < endIndex) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    }

    prevButton.addEventListener('click', () => {
        if(currentPage > 1) setCurrentPage(currentPage - 1);
    });

    nextButton.addEventListener('click', () => {
        if(currentPage < totalPages) setCurrentPage(currentPage + 1);
    });

    setCurrentPage(1);
});

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-20px';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
    heart.style.opacity = '0.5';

    document.getElementById('hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

document.styleSheets[0].insertRule(`
    @keyframes fall {
        to {
            transform: translateY(100vh);
        }
    }
`, document.styleSheets[0].cssRules.length);