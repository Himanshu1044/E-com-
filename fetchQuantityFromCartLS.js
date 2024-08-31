import { getCartProductFromLS } from "./getCartProduct";

export const fetchQuantityFromCartLS = (id, price) => {
    let cartProducts = getCartProductFromLS();

    let existingProduct = cartProducts.find((curprod) => curprod.id === id);
    let quantity = 1;
    if (existingProduct) {
        quantity = existingProduct.quantity;
        price = existingProduct.price;
    }
    return { price, quantity }
}