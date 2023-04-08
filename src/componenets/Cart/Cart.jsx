import React, { useState } from 'react'
import '../Cart/index.css'
import { useEffect } from 'react'
import { Stack } from '@mui/material'
import numberFormat from '../essentail/numberFormat'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useAuthContext } from '../../Context/AuthContext'
import { db } from '../../Config/Firebase'
import { collection, onSnapshot, doc, deleteDoc, writeBatch, getDocs } from "firebase/firestore";
import Navbar from '../home/navbar'
import EmptyCart from './EmptyCart'
import { Link } from 'react-router-dom'
import Loader from '../essentail/loader'
import Paymentss from './Payment'

const Cartss = () => {
  const { user } = useAuthContext();
  const [showChildComponent, setShowChildComponent] = useState(false);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const handleCheck = () => {
    setShowChildComponent(true);
  };

  const Delete = async (id) => {
    try {
      await deleteDoc(doc(db, user.uid, id));
    } catch (error) {
      console.log(error);
    }
  };
  const deleteAllProducts = async () => {
    const productRef = collection(db, user.uid);
    const allProducts = await getDocs(productRef);
    const batch = writeBatch(db);
    allProducts.forEach((product) => {
      batch.delete(product.ref);
    });
    await batch.commit();
  };
  let NewData =
    data &&
    data.reduce((initialValue, curElem) => {
      const { Amount, price } = curElem;
      initialValue = initialValue + Amount * price;
      return initialValue;
    }, 0);

  useEffect(() => {
    const uuid = user.uid;
    if (!uuid) {
      console.error('uuid is not defined or empty');
      return;
    }
    setIsLoading(true);
    const unsubscribe = onSnapshot(
      collection(db, uuid),
      (snapshot) => {
        const List = [];
        snapshot.docs.forEach((doc) => {
          List.push({ id: doc.id, ...doc.data() });
        });
        setData(List);
        setIsLoading(false); // set isLoading to false once data is fetched
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsubscribe();
    };
  }, [user]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {showChildComponent ? <Paymentss data={NewData} /> :


        <div>
          <Navbar />
          {data.length === 0 && <EmptyCart />}
          {data.length > 0 &&
            <Stack p={2}>
              <Stack direction={'row'} justifyContent='space-between' p={2} flexWrap='wrap'>
                <h1 className='carthead' >ShoppingCart..</h1>
                <Stack direction={'row'} gap={2} sx={{ display: { xs: 'none', sm: 'flex' } }} >
                  <button className='heroBut3' onClick={() => deleteAllProducts()}>Clear All </button>

                  <Link to={'/products'}>
                    <button className='heroBut3'>Continue Shopping</button>

                  </Link>
                </Stack>

              </Stack>
              <div className="shopping-carts">
                <div className="column-labels">
                  <label className="product-image">Image</label>
                  <label className="product-details">Product</label>
                  <label className="product-price">Price</label>
                  <label className="product-quantity">Quantity</label>
                  <label className="product-removal">Remove</label>
                  <label className="product-line-price">Total</label>
                </div>

                {
                  data && data.map((ele, index) => {
                    let { image, id, Name, Color, Amount, price } = ele;

                    return (
                      <div className="product">
                        <div className='product-image'>
                          <Link className='featurehover' to={`/Product/${id}`}>
                            <img src={image[0].url} alt="" />
                          </Link>
                        </div>
                        <div className="product-details">
                          <div className="product-title">ProductId: {id}</div>
                          <p className="product-description">{Name}</p>
                          <div className="product-title">Color: <button disabled className='Color' style={{ backgroundColor: Color }}></button> </div>

                        </div>
                        <div className="product-price">{numberFormat(price)}</div>
                        <div className="product-quantity">
                          <Link className='featurehover' to={`/Product/${id}`}>

                            {Amount}
                          </Link>
                        </div>
                        <div className="product-removal">
                          <IconButton onClick={() => Delete(id)} color='error' aria-label="delete">
                            <DeleteIcon sx={{ height: '1.5em', width: '1.5em' }} />
                          </IconButton>
                        </div>
                        <div className="product-line-price">{numberFormat(Amount * price)}</div>
                      </div>
                    )
                  })
                }



                <div className="totals">
                  <div className="totals-item">
                    <label>Subtotal</label>
                    <div className="totals-value" id="cart-subtotal">{numberFormat(NewData)}</div>
                  </div>
                  <div className="totals-item">
                    <label>Tax</label>
                    <div className="totals-value" id="cart-tax">{numberFormat(20.60)}</div>
                  </div>
                  <div className="totals-item">
                    <label>Shipping</label>
                    <div className="totals-value" id="cart-shipping">{numberFormat(100.00)}</div>
                  </div>
                  <div className="totals-item totals-item-total">
                    <label>Grand Total</label>
                    <div className="totals-value" id="cart-total">{numberFormat(NewData + 20.60 + 100)}</div>
                  </div>
                </div>

                <button className="checkout" onClick={() => handleCheck()}>Checkout</button>

              </div>

            </Stack>

          }
        </div>
      }

    </>
  )
}

export default Cartss