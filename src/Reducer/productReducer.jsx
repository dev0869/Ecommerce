
const productReducer = (state, action) => {

    switch (action.type) {
        case 'loading':

            return {
                ...state,
                isLoading: true,
            };

        case 'MY_API':
            const featureData = action.payload && action.payload.filter((cur) => {
                return cur.featured === true;

            })

            return {
                ...state,
                isLoading: false,
                product: action.payload,
                featureProduct: featureData


            };

        case 'Error':

            return {
                ...state,
                isError: true,

            };
        // ------------for single products=============


        case 'SINGLEError':

            return {
                ...state,
                SingleError: true,
                isSingleLoading: false,

            };

        case 'singleLoading':

            return {
                ...state,
                isSingleLoading: true,

            };
            case 'SINGLE':

                return {
                    ...state,
                    isSingleLoading: false,
                    single:action.payload,
    
                };
            












        default:
            return state;
    }

}

export default productReducer