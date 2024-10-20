import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];

console.log("Bem-vindo ao Carro de Compras da Shopee \n");

const item1 = await createItem("hotwheels ferrari", 20.9, 2);
const item2 = await createItem("hotwheels lambo", 39.8, 8);

// adiciona itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// remove item
await cartService.removeItem(myCart, item1)

// mostra todos os itens do carrinho
await cartService.displayCart(myCart);

console.log("\nTotal da compra é:");
await cartService.calculateTotal(myCart);

//deleta itens do carrinho
//console.log("Vamos realizar o Delete dos itens!")

//await cartService.deleteItem(myCart, item1.name);
//await cartService.deleteItem(myCart, item2.name);

console.log("Resultado final:");
await cartService.calculateTotal(myCart);
