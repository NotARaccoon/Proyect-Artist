import React from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import {StickerConsumer} from '../../container'
import CartList from './CartList'
import CartTotals from './CartTotals'

const Cart = () => {
  return (
    <section>
        <StickerConsumer>
          {value =>{
            const {cart} = value;
            if(cart.length>0){
              return(
                <React.Fragment>
                  <Title title='Cart'></Title>
                  <CartColumns></CartColumns>
                  <CartList value={value}></CartList>
                  <CartTotals value={value}></CartTotals>
                </React.Fragment>
              );
            } else{
              return <EmptyCart ></EmptyCart>
            }
          }}
        </StickerConsumer>
    </section>
  )
}

export default Cart