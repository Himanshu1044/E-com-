import { getCartProductFromLS } from "./getCartProduct";
import products from "./Api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { removeProdFromCart } from "./removeProdFromCart";
import { incrementDecrement } from "./incrementDecrement";
import { updateCartProductTotal } from "./updateCartProductTotal";


let cartProducts = getCartProductFromLS();

let filterPorducts = products.filter((curProd) => {
    return cartProducts.some((curElm) => curElm.id === curProd.id);
});
// console.log(filterPorducts);

const cartELement = document.querySelector('.containerOfCart');
const templateElement = document.querySelector('.templateElement')

// console.log(cartELement);
// console.log(templateElement);


const showCartProduct = () => {
    filterPorducts.forEach((curProd) => {
        const { catogery, id, image, name, stock, price } = curProd;

        let productClone = document.importNode(templateElement.content, true);

        const LSactualData = fetchQuantityFromCartLS(id, price);

        console.log(productClone);
        productClone.querySelector('#cardValue').setAttribute('id', `card${id}`);
        productClone.querySelector('.catogery').textContent = catogery;
        productClone.querySelector('.imagecard').src = image;
        productClone.querySelector('.productName').textContent = name;
        productClone.querySelector('.catogery').textContent = catogery;
        productClone.querySelector('.price').textContent = LSactualData.price;
        productClone.querySelector('.productQunatity').textContent = LSactualData.quantity;

        productClone.querySelector('.stockElement').addEventListener('click', (event) => {
            incrementDecrement(event, id, stock, price);
        });

        productClone.querySelector('.removeBtn').addEventListener('click', () => {
            removeProdFromCart(id);
        })

        cartELement.append(productClone);
    });
}

showCartProduct();

updateCartProductTotal();