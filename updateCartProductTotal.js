import { getCartProductFromLS } from "./getCartProduct"

export const updateCartProductTotal = () => {

    let productsubTotal = document.querySelector('.subTotalPrice');
    let productFinalTotal = document.querySelector('.finalTotal');


    let localCartProducts = getCartProductFromLS();
    let initialvalue = 0;

    let totalProductPrice = localCartProducts.reduce((accum, curElm) => {
        let productPrice = parseInt(curElm.price) || 0;
        return accum + productPrice;
    }, initialvalue);
    // console.log(totalProductPrice);

    productsubTotal.innerText = `$${totalProductPrice}`;
    productFinalTotal.innerText = `$${totalProductPrice + 50}`;
}