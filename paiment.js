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
    
    const message = `🎁 New Bracelet Order%0A%0A
👤 Name: ${name}%0A
📍 Address: ${address}%0A
📞 Phone: ${phone}%0A
🔢 Quantity: ${quantity}%0A
✨ Design Details: ${design}`;
    
    window.open(`https://wa.me/+212611394586?text=${message}`, '_blank');
    
    document.getElementById('braceletForm').reset();
}