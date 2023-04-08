import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './componenets/home/Home'
import Products from './componenets/product/products'
import IndividualProduct from './componenets/detailproduct/individualProduct'
import About from './componenets/about'
import ShoppingCart from './componenets/Cart/ShoppingCart'
import Contact from './componenets/home/contact/contact'
import PaymentSuccess from './componenets/Cart/paymentSuccess'
import Error from './componenets/error'

const App = () => {
  return (
    <>

      <Routes>

        <Route path='/' exact element={<Home />}>   </Route>
        <Route path='/Products' element={<Products />}>   </Route>
        <Route path='/Product/:_id' element={<IndividualProduct />}>   </Route>
        <Route path={'/about'} element={<About />}>   </Route>
        <Route path='/contact' element={<Contact />}> </Route>
        <Route path='/cart' element={<ShoppingCart />}> </Route>
        <Route path='/cart/PaymentSucess' element={<PaymentSuccess />}> </Route>

        <Route path='*' element={<Error />}> </Route>

      </Routes>


    </>
  )
}

export default App