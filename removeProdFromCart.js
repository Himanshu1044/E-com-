import { getCartProductFromLS } from "./getCartProduct";
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);
    ``
    localStorage.setItem('cartProductsLS', JSON.stringify(cartProducts));

    let removeDiv = document.querySelector(`#card${id}`);

    if (removeDiv) {
        removeDiv.remove();
        showToast('delete', id);
    }
    updateCartValue(cartProducts);
    updateCartProductTotal();

}