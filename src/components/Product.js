import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { StickerConsumer } from '../container'

export default class Product extends Component{
  render(){
    const {id,name,image,price,inCart} = this.props.sticker;
    return (
      <StickerWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
        <div className="card">
          <StickerConsumer>
            {(value)=> (
              <div className="img-container p-4" onClick={() =>
                value.handleDetail(id)
              }>
              <Link to='/details'>
                <img src={image} alt="sticker" className='card-img-top'/>             
              </Link>
              <button className='cart-btn' disabled={inCart ? true : false} 
              onClick={()=>{
                value.addToCart(id);
                value.openModal(id);
                }}>
                {inCart?
                  (<p className='text-capitalize mb-0' disabled>{' '}in cart</p>):
                  (<i className='fa-solid fa-cart-shopping fa-xl'></i>)}
              </button>
              
            </div>
            )}
            
          </StickerConsumer>
          <div className="card-footer d-flex justify-content-between">
            <p className='align-self-center mb-0'>
              {name}
            </p>
            <h5 className='text-orange font-italic mb-0'>
                <span className="mr-1">${price}</span>
            </h5>
          </div>
        </div>
      </StickerWrapper>
    )
  }
}

const StickerWrapper = styled.div`
  .card{
    border-color: transparent;
    transition: all 1s linear
  }

  .card-footer{
    background: transparent;
    border-top:transparent;
  }

  .img-container{
    position:relative;
    overflow:hidden;
  }

  .card-img-top{
    transition: all .5s linear;
  }

  .img-container:hover .card-img-top{
    transform:scale(1.05);
  }

  .cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding: 0.3rem 0.4rem;
    background: var(--lightOrange);
    border: none;
    color: var(--mainRed);
    border-radius: 0.7rem 0 0 0;
    transform: translate(100%,100%);
    transition: all .5s linear;
  }

  .img-container:hover .cart-btn{
    transform:translate(0,0);
  }

  .cart-btn:hover{
    color:var(--mainWhite);
    transition: all .1s linear;
  }
`