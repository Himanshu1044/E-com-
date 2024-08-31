import { addtoCart } from "./add-to-cart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContaier = document.querySelector('.container');
const productTemplate = document.querySelector('#productTemplate');

export const showProductContainer = (products) => {
    if (!products) {
        return false;
    }

    products.forEach((currElm) => {
        const { id, name, catogery, price, stock, description, image } = currElm;

        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector('#cardValue').setAttribute('id', `card${id}`);
        productClone.querySelector('.ProductHeading').textContent = name;
        productClone.querySelector('.imageofCard').src = image;
        productClone.querySelector('.description').textContent = description;
        productClone.querySelector('.originalPrice').textContent = `$${price}`;
        productClone.querySelector('.ActualPrice').textContent = `$${price * 4}`;
        productClone.querySelector('.StocksNo').textContent = stock;
        productClone.querySelector('#catogery').textContent = catogery;

        productClone.querySelector('.PlusMinus').addEventListener('click', (event) => {
            homeQuantityToggle(event, id, stock);
        })

        productClone.querySelector('.add-to-cart').addEventListener('click', (event) => {
            addtoCart(event, id, stock);
        })
        productContaier.append(productClone);
    });



}