const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            // check if product is already exist
            const exist = state.find((ele) => ele.id === product.id)
            if(exist) {
                // increase the quantity
                return state.map((ele) => (
                    ele.id === product.id ? {...ele, qty: ele.qty + 1} : ele
                ))
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1
                    }
                ]
            }
            break;

            case "DELETEITEM":
                const exist1 = state.find((ele) => ele.id === product.id);
                if(exist1.qty === 1) {
                    return state.filter((ele) => ele.id !== product.id);
                } else {
                    return state.map((ele) => (
                        ele.id === product.id ? {...ele, qty: ele.qty-1} : ele
                    ))
                }
                break;
    
        default:
            return state;
            break;
    }
}

export default handleCart;