import React from 'react'
import { StickerConsumer } from '../container';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

const details = () => {
  return (
    <StickerConsumer>
      {(value)=>{
        const {id,name,size,info,image,price,inCart}=
        value.detailSticker;
        return (

          <div className="container py-5">
          {/* Tittle */}
          <div className="row">
            <div className="col-10 mx-auto text-center text-slanted text orange my-3">
              <h1 className='detailsTitle'>{name}</h1>
            </div>
          </div>
          {/* end title */}
          {/* Sticker info */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <img src={image} alt="sticker" className='img-fluid'/>
            </div>
            <div className="col-10 mx-auto col-md-6 my-3 text-capitalized">
              <h4 className='text-title text-muted mt-3 mb-2'>Size: <span className='text-uppercase'>{size}</span></h4>
              <h4 className='text-title text-muted mt-3 mb-2'>
                price: <span>${price}</span>
              </h4>
              <p className='font-weight-bold mt-3 mb-0'>
                Some info:
              </p>
              <p className='text-muted lead'>
                {info}
              </p>
              <div>
                <Link to='/'>
                  <ButtonContainer>
                    Back
                  </ButtonContainer>
                </Link>

                <ButtonContainer cart disabled={inCart ? true:false}
                onClick={()=>{
                  value.addToCart(id);
                  value.openModal(id);
                }}>
                  {inCart? "In cart" : "Add to Cart"}
                </ButtonContainer>
                
              </div>
            </div>
          </div>
          </div>
          
        )
      }}
    </StickerConsumer>
  );
}

export default details