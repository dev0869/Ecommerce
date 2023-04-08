const FilterReducer = (state, action) => {



    switch (action.type) {
        case 'FILTER':
            let Price = action.payload.map((ele) => {
                return (ele.price)
            })

            let MaxPrice = Math.max(...Price)

            return {
                ...state,
                filterProducts: [...action.payload],
                all_products: [...action.payload],
                filter: {
                    ...state.filter, price: MaxPrice, max: MaxPrice,
                }

            };

        case 'GRID':
            return {
                ...state,
                gridView: true,
            };
        case 'List':
            return {
                ...state,
                listView: true,
                gridView: false,
            };
        case 'sort':
            let userSort = document.getElementById('sort')
            let Sortvalue = userSort.options[userSort.selectedIndex].value;
            console.log(Sortvalue)
            return {
                ...state,
                sorting: Sortvalue,

            };
        case 'SortProdcut':
            let Newdata;
            let hyp = [...action.payload];
            const { filterProducts, sorting } = state;
            let tempSortProduct = filterProducts;

            const sortingProduct = (a, b) => {
                if (sorting === 'big') {
                    return a.name.localeCompare(b.name)
                }

                if (state.sorting === 'small') {
                    return b.name.localeCompare(a.name)
                }
                if (state.sorting === 'Lowest') {
                    return parseFloat(a.price) - parseFloat(b.price)
                }
                if (state.sorting === 'Highest') {
                    return parseFloat(b.price) - parseFloat(a.price)


                }
            }

            const newSortData = tempSortProduct.sort(sortingProduct)




            return {
                ...state,
                filterProducts: newSortData,
            };

        case 'Text':
            const { name, value } = action.payload;
            return {
                ...state,
                filter: {
                    ...state.filter,
                    [name]: value,
                }


            };
        case 'Search_Engine':


            let { all_products } = state;
            let data = [...all_products];
            let { text, category, company, price, max, min } = state.filter;
            if (text) {
                data = data.filter((ele) => {
                    return ele.name.toLowerCase().includes(text.toLowerCase());
                })
            }
            if
                (company !== 'All') {
                data = data.filter((ele) => {
                    return ele.company === company;

                })
            }
            if
                (category !== 'All') {
                data = data.filter((ele) => {
                    return ele.category === category

                })
            }

            if (price) {
                data = data.filter((ele) => {
                    return ele.price <= price

                })
            }
            ;

            return {
                ...state,
                filterProducts: data,

            };


        case "CLEAR_FILTERS":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    text: '',
                    category: 'All',
                    company: 'All',
                
                },
            };


        default:
            return state;
    }




}
export default FilterReducer;