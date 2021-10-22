import React from 'react'
import Phone from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero=()=> {
    const {closeSubmenu}= useGlobalContext();
 
    return (
        <div>
           <section className='hero' onMouseOver={closeSubmenu}>
               <div className='hero-center'>
               <article className='hero-info'>
          <h1>
            Payments infrastructure <br />
            for the internet
          </h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className='btn'>Start now</button>
        </article>
                   <article className='hero-images'>
                       <img className='phone-img' src={Phone}/>
                   </article>
               </div>

           </section>
        </div>
    )
}

export default Hero
