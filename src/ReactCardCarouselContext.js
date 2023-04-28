import { createContext, useState } from "react";
import { productsArray,getProductData } from "./productStore";

export const CartContext = createContext({

    items: [],
    getProductQuantity: () => { },
    addOneToCart: () => { },
    removeOneFromToCart: () => { },
    deleteFromCart: () => { },
    getTotalCost: () => { },



});
export function CartProvider({ gym }) {
    const [cartProducts, setCartProducts] = useState([]);

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if (quantity === undefined) {
            return 0;
        }
        return quantity
    }
    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) {
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else {
            setCartProducts(

                cartProducts.map(
                    product =>
                        product.id === id
                            ? { ...product, quantity: product.quantity + 1 }
                            : product
                )
            )
        }
    }
    function removeOneFromToCart(id) {
        const quantity = getProductQuantity(id);
        if (quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id
                            ? { ...product, quantity: product.quantity + 1 }
                            : product
                )
            )
        }

    }
    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
        });
        return totalCost;
    }
function deleteFromCart(id){
    setCartProducts(
        cartProducts =>
        cartProducts.filter( currentProduct => {
            return currentProduct.id !== id ;
        
        })
    )
}
    const contexValue = {

        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromToCart,
        deleteFromCart,
        getTotalCost,

    }
    return (
        <CartContext.Provider value={contexValue}>
            {gym}
        </CartContext.Provider>
    )

}
 export default CartProvider