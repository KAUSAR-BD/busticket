const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    let cart = [];

    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        if (cart.length >= 4) {
          alert('You can only select up to 4 products at a time.');
          return;
        }

        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));

        if (cart.some(item => item.name === name)) {
          alert('You have already selected this product.');
          return;
        }

        cart.push({ name, price });
        renderCart();
      });
    });

    function renderCart() {
      cartItemsElement.innerHTML = '';
      let totalPrice = 0;

      cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name}: ${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);

        totalPrice += item.price;
      });

      cartTotalElement.textContent = `Total: ${totalPrice.toFixed(2)}`;
    }



      