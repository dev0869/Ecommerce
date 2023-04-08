import React from 'react'
import Navbar from '../home/navbar'
import { Stack } from '@mui/system'
import Singleview from './Singleview'
import Gridview from './gridview'
import { useFilterContext } from '../../Context/FilterContext'
import AppsIcon from '@mui/icons-material/Apps';
import ReorderIcon from '@mui/icons-material/Reorder';
import Filter from './filter'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
const Products = () => {
  const { filterProducts, gridView, setGridView, setListView, Sorting_product, TextFilter, filter: { text } } = useFilterContext();
  const [tog, setTog] = useState(true)
  const [filter, setFilter] = useState(false)
  console.log(filterProducts)
  return (
    <>
      <Navbar />
      <Stack direction={'row'} textAlign={'center'} p={{ sm: 0, md: 2 }} gap={1} sx={{ backgroundColor: '#FAFAFA' }} >
        <div flex={2} className={filter ? 'filtershow' : 'filterHide'}>
          <Filter />
        </div>
        <Stack flex={8} p={2}>

          <input type="text" name='text' placeholder=' Product Search...' autoComplete='off' value={text} onChange={TextFilter} />
          <br />

          <Stack p={1} direction={'row-reverse'} justifyContent={'space-between'} alignItems={'center'}>
            <p className='filter_p' onClick={() => setFilter(!filter)}><span style={{ position: 'relative', top: '3px' }}> {filter ? <CloseIcon sx={{ fontSize: '29px' }} /> : <FilterAltIcon sx={{ fontSize: '29px' }} />} </span>Filter & Refine </p>


            <Stack direction={'row-reverse'} alignItems={'center'} gap={1}>
              <form action="" className='sort'>
                <label htmlFor="sort"></label>
                <select id="sort" onClick={Sorting_product}>
                  <option value="all" disabled >sortBy</option>
                  <option value="Lowest">Price(Lowest)</option>
                  <option value="Highest">Price(Highest)</option>
                  <option value="big">Alphabet(a-z)</option>
                  <option value="small">Alphabet(z-a)</option>
                </select>
              </form>

              <AppsIcon sx={{ fontSize: '30px' }} onClick={() => setGridView(true)} className={gridView ? 'sorticon' : 'sorticon2'} />
              <ReorderIcon sx={{ fontSize: '30px' }} onClick={() => setListView(true)} className={gridView ? 'sorticon2' : 'sorticon'} />

            </Stack>
          </Stack>
          <h2 className='tproduct' style={{ textAlign: 'center', padding: '4px' }}><span style={{ color: 'orangered' }}>{filterProducts && filterProducts.length} </span> Products Found!</h2>
          <br />
          {gridView ? <Gridview product={filterProducts} /> : <Singleview product={filterProducts} />}
        </Stack>
      </Stack>
    </>
  )
}

export default Products