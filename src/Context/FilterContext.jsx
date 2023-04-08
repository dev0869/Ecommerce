

import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./Context";
import FilterReducer from '../Reducer/FilterReducer'

const FilterContext = createContext();

const initialState = {
  filterProducts: [],
  all_products: [],
  gridView: true,
  listView: false,
  sorting: "Lowest",
  filter: {
    text: '',
    category: 'All',
    company: 'All',
    price: 0,
    min: 0,
    max: 0,

  }
};

export const FilterProvider = ({ children }) => {
  const { product } = useProductContext();

  const [state, dispatch] = useReducer(FilterReducer, initialState);

  // to set the grid view
  const setGridView = () => {
    return dispatch({ type: "GRID" });
  };

  // to set the list view
  const setListView = () => {
    return dispatch({ type: "List" });
  };
  // sort
  const Sorting_product = () => {
    return dispatch({ type: 'sort' })
  };

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
    console.log('ss')
  };

  const TextFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    return dispatch({ type: 'Text', payload: { name, value } })
  }
  useEffect(() => {

    dispatch({ type: "FILTER", payload: product });
 
  }, [product]);

 
  useEffect(() => {
    dispatch({ type: 'Search_Engine' })
    
  }, [state.filter]);

  useEffect(() => {
    
    dispatch({ type: "SortProdcut", payload: product });
  }, [state.sorting]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, Sorting_product, TextFilter ,clearFilters}}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};