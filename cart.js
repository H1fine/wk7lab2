"use strict";

let products = [
    { id: 1, name: 'Echo Dot', price: 29.99, quantity: 1 },
    { id: 2, name: 'Fire TV Stick', price: 39.99, quantity: 2 },
    { id: 3, name: 'Kindle Paperwhite', price: 119.99, quantity: 1 },
    { id: 4, name: 'Echo Show 5', price: 89.99, quantity: 0 },
    { id: 5, name: 'Fire Tablet', price: 49.99, quantity: 3 },
    { id: 6, name: 'Ring Video Doorbell', price: 99.99, quantity: 1 }
];

// Function to calculate total invoice amount
function calculateTotal() {
    let total = 0;
    for (let product of products) {
        total += product.price * product.quantity;
    }
    return total.toFixed(2);
}

// Function to render cart items
function renderCartItems() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    for (let product of products) {
        if (product.quantity > 0) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>$${product.price.toFixed(2)}</td>
                <td>${product.quantity}</td>
                <td>$${(product.price * product.quantity).toFixed(2)}</td>
            `;
            cartItems.appendChild(row);
        }
    }
    document.getElementById('totalAmount').innerText = `Total Amount: $${calculateTotal()}`;
}

// Event listener for "Show Cart" button
document.getElementById('showCart').addEventListener('click', renderCartItems);
