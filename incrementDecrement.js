import { getCartProductFromLS } from "./getCartProduct";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event, id, stock, price) => {
    const currentCardElement = document.querySelector(`#card${id}`);
    // console.log(currentCardElement);

    const productQunatity = currentCardElement.querySelector('.productQunatity')
    const productPrice = currentCardElement.querySelector('.price')

    // console.log(productPrice);
    let quantity = 1;
    let localStoragePrice = 0;

    let localCartProducts = getCartProductFromLS();

    let existingProd = localCartProducts.find((curPod) => curPod.id == id);

    if (existingProd) {
        quantity = existingProd.quantity;
        localStoragePrice = existingProd.price;
    }
    else {
        localStoragePrice = price;
        price = price;
    }
    if (event.target.className === 'increment') {
        if (quantity < stock) {
            quantity += 1;
            localStoragePrice = price * stock;
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
    localStoragePrice = price * quantity;
    localStoragePrice = Number(localStoragePrice.toFixed(2));

    let updateCart = { id, quantity, price: localStoragePrice };
    updateCart = localCartProducts.map((curProd) => {
        return (curProd.id == id) ? updateCart : curProd;
    });
    localStorage.setItem('cartProductsLS', JSON.stringify(updateCart));


    productQunatity.innerText = quantity;
    productPrice.innerText = localStoragePrice;

    updateCartProductTotal();
};