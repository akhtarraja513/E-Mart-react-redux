// Add Item in the card
export const AddItem = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}

// Delete Item in the card
export const DeleteItem = (product) => {
    return {
        type : "DELETEITEM",
        payload : product
    }
}