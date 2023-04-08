
import { createContext, useContext, useEffect } from "react";
import { useReducer } from "react";
import axios from "axios";
import productReducer from "../Reducer/productReducer";


const AppContext = createContext();


const Api='https://long-cyan-snapper-belt.cyclic.app/DeveshApi/Products/'

const initialState = {
    isLoading: false,
    isError: false,
    product: [],
    featureProduct: [],
    
    isSingleLoading:false,
    single:{},
    SingleLoading:false,
    SingleError:false,

}


const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState)




    const getProducts = async (url) => {
        dispatch({type:'loading'})
        try {
            const res = await axios.get(url)
            const product = await res.data
         console.log(product)
            dispatch({type:'MY_API',payload:product})

        } catch (error) {
            dispatch({type:'Error'})

        }


    }


    const getSingleProduct=async(url)=>{
        dispatch({type:'singleLoading'})
        try {
            const res=await axios.get(url)
            const single=await res.data[0]
            dispatch({type:'SINGLE', payload:single})
         

            
        } catch (error) {
            dispatch({type:'SINGLEError'})
            
        }



    }


    useEffect(() => {
        getProducts(Api)

    }, [])


    return (
        <AppContext.Provider value={{ ...state,getSingleProduct }}>
            {children}
        </AppContext.Provider>
    )
}




const useProductContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useProductContext }