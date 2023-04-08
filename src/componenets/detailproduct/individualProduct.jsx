import React, { useEffect, useState } from 'react'
import Navbar from '../home/navbar'
import { Link, useParams } from 'react-router-dom'
import { CardContent, Stack } from '@mui/material'
import numberFormat from '../essentail/numberFormat'
import Myimg from '../detailproduct/myimg'
import Loader from '../essentail/loader'
import Stars from '../detailproduct/stars'
import { db } from '../../Config/Firebase'
import { FaCheck } from 'react-icons/fa'
import { setDoc, doc } from 'firebase/firestore'
import CartBut from './CartBut'
import { useProductContext } from '../../Context/Context'
import { useAuthContext } from '../../Context/AuthContext'
import SignIn from '../Signin/SignIn'

const Api = 'https://long-cyan-snapper-belt.cyclic.app/DeveshApi/Products/'

const IndividualProduct = () => {
    const value='Please Sign in To Unlock Cart';
    const classes='signinalert';
    const { _id } = useParams();
    const [Color, setColor] = useState(['']);
    const { user } = useAuthContext();
    const { isSingleLoading, getSingleProduct, single, } = useProductContext();
    const { colors, company, description, _id: dev, image, name, price, reviews, stars, stock } = single
    useEffect(() => {
        getSingleProduct(`${Api}?_id=${_id}`)
    }, [])



    const [message, setMessage] = useState('');
    const [act, setAct] = useState(false)
    const showMessage = (text) => {
        setMessage(text);
        setTimeout(() => setMessage(''), 3000);
        setTimeout(() => setAct(false), 3000) // Hide message after 3 seconds
    };

    const [Amount, setAmount] = useState(1)
    const decrease = () => {
        Amount > 1 ? setAmount(Amount - 1) : setAmount(1)
    }
    const increase = () => {
        Amount < (stock) ? setAmount(Amount + 1) : setAmount(stock)
    }
    if (isSingleLoading) return <Loader />

    const handleCart = async () => {
        const data = single;
        const col = Color;
        const currentUSER = user.uid
        const ProductId = data._id + col;
        const amt = Amount;
        setAct(true)
        await showMessage(<p style={{color:'white'}}><span style={{ position: 'relative',color:'white', top: '2px', left: '-2px' }}><FaCheck /></span>Item successfully added to Cart!</p>)
        await setDoc(doc(db, currentUSER, ProductId), {
            Amount: amt,
            Color: col,
            Name: data.name,
            id: ProductId,
            image: data.image,
            price: data.price * amt,
            stock: data.stock,
  

        });
    }
    return (
        <>
            <Navbar />
            <div className={act ? 'start' : 'closed'} >
                <h3 style={{fontSize:'14px'}}>{message}</h3>
            </div>

            <Stack direction={'row'} justifyContent={'space-around'} alignItems={'center'} flexWrap={'wrap'}>

                <Myimg img={image} />

                <CardContent className='detailproducttext cardcontent' sx={{ width: 400 }}  >
                    <h1>{name}</h1>
                    <br />
                    <Stars starss={stars} review={reviews} />
                    <h3>MRP <del>{numberFormat(single.price + 2500)}</del></h3>
                    <br />
                    <h2 style={{ color: 'blueviolet' }}>Deal of the Day {numberFormat(price)} </h2>
                    <br />
                    <div>
                        <p className='ratings'>{description}</p>
                    </div><br />

                    <p className='ratings'>Brand :  <span style={{ fontWeight: 'bold' }}> {company}</span> </p>
                    <p className='ratings'>Available :  <span style={{ fontWeight: 'bold' }}> In Stocks</span> </p>
                    <br />
                    <hr />
                    {/* -----------colors------------------- */}                   
                    <br />
                    {!user && <SignIn val={value} classes={classes}/> }
                    {user && 
                    
                    (   <>
                        {
                            colors && colors.map((ele, id) => {
                                return (
                                    <button className={Color === ele ? 'colorButtona' : 'colorButton'} onClick={() => setColor(ele)} key={id} style={{ backgroundColor: ele }}>
                                        {
                                            Color === ele ? <FaCheck className='check' /> : ''
    
                                        }
                                    </button>
                                )
                            })
                        }
                    
                    
                    <CartBut amt={Amount} inc={increase} dcr={decrease} />
                    </>)
                    
                    }

                    {user && <Link className='cARTBUT' onClick={() => handleCart()}> Add to Cart </Link>
                    }
                </CardContent>
            </Stack>
        </>
    )
}

export default IndividualProduct