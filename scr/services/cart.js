//Ações do carrinho

//Adicionar item no carrinho

async function addItem(userCart, item) {
    userCart.push(item);
}

// Excluir um item do carrinho - o correto é a utilização de ID e não de nome

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index !==-1){
        userCart.splice(index, 1);
    }
}

// Remover um item

async function removeItem(userCart, item) {
    //achar o índice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    //caso não encontre
    if (indexFound == -1) {
        console.log("Item não localizado");
        return;
    }

     // subtrair  ou deletar o item
     if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
        return;
    }

    // se o item for maior que 1
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }
   
}

async function displayCart(userCart) {
    console.log("Lista de produtos no carrinho: \n");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = R$ ${item.subtotal()}`);
    });
}
// Calcular o total

async function calculateTotal(userCart) {
   const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
   console.log(result);
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart
}