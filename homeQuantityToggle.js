export const homeQuantityToggle = (event, id, stock) => {
    const currCardELm = document.querySelector(`#card${id}`);

    const productQuantity = currCardELm.querySelector('.qunatityNo');
    // console.log(productQuantity);

    let quantity = parseInt(productQuantity.getAttribute('data-quantity')) || 1;

    if (event.target.className === 'increment') {
        if (quantity < stock) {
            quantity += 1;
        }
        else if (quantity === stock) {
            quantity = stock;
        }
    }

    if (event.target.className === 'decrement') {
        if (quantity > 1) {
            quantity -= 1;
        }
    }

    productQuantity.innerText = quantity;
    productQuantity.setAttribute('data-quantity', quantity);
    // return quantity;
};