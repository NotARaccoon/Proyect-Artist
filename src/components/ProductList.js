import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import { StickerConsumer } from '../container'

export default class ProductList extends Component{
  render(){
  return (
    <React.Fragment>
      <div className='py-5'>
        <div className='container'>
          <Title name='our' title=' Stickers'></Title>
          <div className='row'>
            <StickerConsumer>
              {value => {
                return value.stickers.map(sticker=>{
                  return <Product key={sticker.id} sticker={sticker}/>;
                });
              }}
            </StickerConsumer>
          </div>
        </div>
      </div>
      
    </React.Fragment>
  )}
}