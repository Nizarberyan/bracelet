function updateQuantity(change) {
    const quantityInput = document.getElementById('quantity');
    let newValue = parseInt(quantityInput.value) + change;
    if (newValue >= 1) {
        quantityInput.value = newValue;
    }
}




function submitForm(event) {
    event.preventDefault();
    
    const name = encodeURIComponent(document.getElementById('name').value);
    const address = encodeURIComponent(document.getElementById('address').value);
    const phone = encodeURIComponent(document.getElementById('phone').value);
    const design = encodeURIComponent(document.getElementById('design').value);
    const quantity = encodeURIComponent(document.getElementById('quantity').value);
    
    const message = ` New Bracelet Order%0A%0A
 Name: ${name}%0A
 Address: ${address}%0A
 Phone: ${phone}%0A
 Quantity: ${quantity}%0A
 Design Details: ${design}`;
    
    window.open(`https://wa.me/+212707858759?text=${message}`, '_blank');
    
    document.getElementById('braceletForm').reset();
}
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
