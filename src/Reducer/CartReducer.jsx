const CartReducer = (state, action) => {
    switch (action.type) {
        case 'AddCart':
            let { dev, image, price, Amount, single, Color } = action.payload;
            let existingProduct = state.Cart && state.Cart.find((ele) => {
                return ele.id === dev + Color


            })

            if (existingProduct) {
                let updatedProduct = state.Cart && state.Cart.map((curElem) => {
                    if (curElem.id === dev + Color) {
                        let newAmount = curElem.Amount + Amount;

                        if (newAmount >= curElem.stock) {
                            newAmount = curElem.stock
                        }
                        return {
                            ...curElem,
                            Amount: newAmount,
                        };
                    } else {
                        return curElem;
                    }
                });
                return {
                    ...state,
                    Cart: updatedProduct,
                };
            } else {
                let cartProduct = {
                    id: dev + Color,
                    Color,
                    Amount,
                    price,
                    Name: single.name,
                    image: image[0].url,
                    stock: single.stock
                };

                return {
                    ...state,
                    Cart: [...state.Cart, cartProduct],
                };
            }


        case 'Decrement':

            let updatedProduct = state.Cart.map((curElem) => {
                if (curElem.id === action.payload) {
                    let decAmount = curElem.Amount - 1;
                    console.log('yres')

                    if (decAmount <= 1) {
                        decAmount = 1;
                    }

                    return {
                        ...curElem,
                        Amount: decAmount,
                    };
                } else {
                    return curElem;
                }
            });
            return { ...state, Cart: updatedProduct };

        case 'Increment':

            let UpdatedProduct = state.Cart.map((curElem) => {
                if (curElem.id === action.payload) {
                    let INCAmount = curElem.Amount + 1;

                    if (INCAmount >= curElem.stock) {
                        INCAmount = curElem.stock;
                    }

                    return {
                        ...curElem,
                        Amount: INCAmount,
                    };
                } else {
                    return curElem;
                }
            });
            return { ...state, Cart: UpdatedProduct };

        case 'ShownCart':
            let ShownNumber = state.Cart && state.Cart.reduce((initialValue, curElem) => {
                let { Amount } = curElem
                initialValue = initialValue + Amount
                return initialValue
            }, 0)
            return {
                ...state,
                totalItem: ShownNumber


            };
        case 'TotalPrice':

            let NewData = state.Cart &&  state.Cart.reduce((initialValue, curElem) => {
                const { Amount, price } = curElem
                initialValue = initialValue + (Amount * price)
                return initialValue

            }, 0)

            return {
                ...state,
                totalprice: NewData


            };





        case 'DEL_CART':
            const { id } = action.payload;
            let DelItem = state.Cart.filter((ele) => {
                return ele.id !== id

            })

            return {
                ...state,
                Cart: DelItem

            };

        case 'Clear':

            return {
                ...state,
                Cart: []
            };


        default:
            return state;
    }




}
export default CartReducer;