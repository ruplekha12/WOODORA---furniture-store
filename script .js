let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  cart.forEach((product, index) => {
    let li = document.createElement("li");
    li.textContent = `${product.item} — ₹${product.price}`;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = `Total: ₹${total}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".add-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const name = btn.getAttribute("data-name");
      const price = parseInt(btn.getAttribute("data-price"));
      addToCart(name, price);
    });
  });
});