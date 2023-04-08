import React from 'react'
import { Link } from 'react-router-dom'
const PaymentSuccess = () => {
  return (
<>
<div className="body" >
<div class="card">
<div style={{borderRadius:'200px', height:'200px', width:'200px', background:' #F8FAF5', margin:'0 auto'}}>
  <i className="checkmark">✓</i>
</div>
  <h1 >Purchased Success!</h1> 
  <p>We received your purchase request;<br/>Your Payment has been Done. <br /> Thanks for purchasing!</p>
  <Link to={'/'}><button  style={{marginTop:'10px',background:'orangered',color:'white',fontSize:'16px',border:'0px solid',padding:'10px 16px',borderRadius:'12px',cursor:'pointer'}}>Go to Home</button></Link>
</div>
</div>


</>  )
}

export default PaymentSuccess