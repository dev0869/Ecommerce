import { createContext, useContext, useReducer, useEffect } from "react";
import CartReducer from "../Reducer/CartReducer";
const CartContext = createContext();
const Localdata = () => {
    let Storage = localStorage.getItem('DevStorage')
    if (Storage === []) {
        return [];
    }
    else {
        return JSON.parse(Storage)
    }
}
const initialValue = {
    Cart: Localdata(),
    totalItem:'',
    totalprice:''

}
const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(CartReducer, initialValue);
    const ADD = (dev, colors, image, price, Amount, single, Color) => {
        dispatch({ type: 'AddCart', payload: { dev, colors, image, price, Amount, single, Color } })
    }

    const Del = (id) => {
        dispatch({ type: 'DEL_CART', payload: { id } })
    }

    const Clear_Cart = () => {
        dispatch({ type: 'Clear' })
    }
    const Dcr = (id) => {
        dispatch({ type: 'Decrement', payload:  id  })
    }
    const Inc = (id) => {
        dispatch({ type: 'Increment', payload:  id  })
    }


    useEffect(() => {
        dispatch({type:'ShownCart'})
        dispatch({type:'TotalPrice'})
        localStorage.setItem('DevStorage', JSON.stringify(state.Cart))

    }, [state.Cart])

    return (

        <CartContext.Provider value={{ ...state, ADD, Del, Clear_Cart, Dcr,Inc }}>
            {children}
        </CartContext.Provider>
    )
}

const UseCartContext = () => {
    return useContext(CartContext)
}


export { CartProvider, UseCartContext }