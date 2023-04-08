import React from 'react'
import { Button, Stack } from '@mui/material'
import { useFilterContext } from '../../Context/FilterContext'
import numberFormat from '../essentail/numberFormat'

const Filter = () => {
  const {filterProducts,clearFilters, all_products, TextFilter, filter: { price, min, max } } = useFilterContext();
  const UniqueProductCategory = (data, set) => {
    let Category = data.map((ele) => {
      return ele[set];

    })
    return (
      Category = ['All', ...new Set(Category)]
    )
  };

  let GetOriginal = UniqueProductCategory(all_products, "category");
  const GetCompany = UniqueProductCategory(all_products, "company");
  return (
    <>
      <Stack className='filterSideBar' flexDirection={'column'} height={'100vh'} p={1} >
        <br /> <h1>Category</h1> <br /> <hr /> <br />
        <p style={{fontSize:'1.6rem'}}>All Category</p>
        {GetOriginal && GetOriginal.map((ele, index) => {
          return (
            <Button sx={{ fontSize: '12px', fontWeight: 'bold' }} fullWidth='100%' name='category' key={index} value={ele} onClick={TextFilter} >
               {ele}
            </Button>
          )
        })
        

        } <hr />
        <Stack gap={2} m={1} direction={'column'} alignItems={'center'}>
          <div>
            
            <p style={{fontSize:'1.8rem',marginBottom:'5px'}}>Company</p>
            <select name='company' id="company" onChange={TextFilter}>
              {
                GetCompany && GetCompany.map((elem, index) => {

                  return (
                    <option key={index} name="company" value={elem}>{elem}</option>
                  )
                })
              }
            </select>
            
          </div>

          <div className="priceRange">
            <p style={{fontSize:'1.8rem',textAlign:'center'}} >Products in range <span style={{ color: '#2369c0' }}> {numberFormat(price)}</span></p>
            <input type="range" name='price' max={max} min={min} value={price} step={'1000'} onChange={TextFilter} />

          </div>
          <button className='heroBut3' onClick={()=>clearFilters()}>Clear</button>

        </Stack>

      </Stack>


    </>)
}

export default Filter