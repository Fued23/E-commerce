
const productsArray = [
    {
        id: "1",
        title: "nero",
        price: "12,50",
    },
    {
        id: "2",
        title: "blu",
        price: "12,50",
    },
    {
        id: "3",
        title: "barra",
        price: "36,90",
    },
    {
        id: "4",
        title: "gancio",
        price: "19,90"
    },
    {
        id: "5",
        title: "cintura",
        price: "20,90"
    },
    {
        id: "6",
        title: "tav",
        price: "19,90"
    }
]

function getProductData (id) {  
    let productData = productsArray.find(product => product.id === id)
    
    if (productData === undefined) {
        console.log ("Il prodotto non esiste con questo ID: " + id)
        return undefined;

    }

return productData;
}
export {productsArray,getProductData}