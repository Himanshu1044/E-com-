import { getCartProductFromLS } from "./getCartProduct";
import { updateCartValue } from "./updateCartValue";
import {showToast} from './showToast';

getCartProductFromLS();

export const addtoCart = (event, id, stock) => {

    let arrLocalStorageProduct = getCartProductFromLS();

    const currentProductElm = document.querySelector(`#card${id}`);

    let quantity = currentProductElm.querySelector(`.qunatityNo`).innerText;
    let price = currentProductElm.querySelector(`.originalPrice`).innerText;


    price = price.replace('$', '');

    let existingProd = arrLocalStorageProduct.find(
        (curProd) => curProd.id == id
    );

    if (existingProd && quantity > 1) {
        console.log(existingProd);
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price * quantity);

        let updateCart = { id, quantity, price };
        updateCart = arrLocalStorageProduct.map((curProd) => {
            return (curProd.id == id) ? updateCart : curProd;
        });
        localStorage.setItem('cartProductsLS', JSON.stringify(updateCart));
        showToast('add', id);
    }
    if (existingProd) {
        return false;
    }

    price = Number(price * quantity);
    quantity = Number(quantity);

    arrLocalStorageProduct.push({ id, quantity, price });

    localStorage.setItem('cartProductsLS', JSON.stringify(arrLocalStorageProduct));


    updateCartValue(arrLocalStorageProduct);
    showToast('add', id);

}