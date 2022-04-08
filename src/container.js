import React, { Component } from 'react'
import { detailSticker, storedStickers } from './data';
import Swal from 'sweetalert2'

const StickerContext = React.createContext();

class StickerProvider extends Component {
    state={
        stickers:[],
        detailSticker: detailSticker,
        cart:[],
        modalOpen:true,
        modalSticker:detailSticker,
        cartTotal:0,
    };

    componentDidMount(){
      this.setStickers();
    }

    setStickers = () =>{
      let tempStickers = [];
      storedStickers.forEach(item =>{
        const singleItem = {...item};
        tempStickers = [...tempStickers,singleItem];

      })
      this.setState(()=>{
        return { stickers:tempStickers };
      })
    }

    getItem = (id) =>{
      const sticker = this.state.stickers.find(item => item.id === id);
      return sticker;
    }

    handleDetail = (id) =>{
        const sticker = this.getItem(id);
        this.setState(()=>{
          return {detailSticker:sticker}
        })
    }

    addToCart = (id) =>{
        let tempStickers = [...this.state.stickers];
        const index = tempStickers.indexOf(this.getItem(id));
        const sticker = tempStickers[index];
        sticker.inCart = true;
        sticker.count = 1;
        const price = sticker.price;
        sticker.total = price;
        sticker.currentStock -= 1;

        this.setState(()=>{
          return {stickers: tempStickers, cart:[...this.state.cart,sticker]};
        },()=>{console.log(this.state);});
    };
    openModal = id =>{
      
      const sticker = this.getItem(id);
      this.setState(()=>{
        return {modalStiker:sticker,modalOpen:true}
      },
      () => {
        this.addTotals();
      }
      )
    }

    increment = (id) =>{
      let tempCart = [...this.state.cart];
      const selectedSticker = tempCart.find(item=>item.id === id);
      const index = tempCart.indexOf(selectedSticker);
      const sticker = tempCart[index];

      const decreaseStock = () =>{
        sticker.currentStock = sticker.currentStock - 1;
      }
      
      if(sticker.currentStock > 0){
        sticker.count = sticker.count + 1;
        decreaseStock();
      }
      sticker.total = sticker.count * sticker.price;
      console.log(sticker.currentStock)

      if(sticker.currentStock === 0){
        sticker.currentStock = 0;
      }

      this.setState(()=>{return{cart:[...tempCart]}},()=>{this.addTotals()})
    }

    decrement = (id) =>{
      let tempCart = [...this.state.cart];
      const selectedSticker = tempCart.find(item=>item.id === id);
      const index = tempCart.indexOf(selectedSticker);
      const sticker = tempCart[index];

      sticker.count = sticker.count - 1;

      const increaseStock = () =>{
        sticker.currentStock = sticker.currentStock + 1;
      }

      if(sticker.count === 0){
        sticker.currentStock = sticker.stock;
        this.removeItem(id);
      } else {
        increaseStock();
        sticker.total = sticker.count * sticker.price;
        this.setState(()=>{return{cart:[...tempCart]}},()=>{this.addTotals()})
      }

      console.log(sticker.currentStock)
      
    }

    removeItem = (id) =>{
      let tempStickers = [...this.state.stickers];
      let tempCart = [...this.state.cart];

      tempCart = tempCart.filter(item => item.id !== id);

      const index = tempStickers.indexOf(this.getItem(id));
      let removedSticker = tempStickers[index];
      removedSticker.inCart = false;
      removedSticker.count = 0;
      removedSticker.total = 0;
      removedSticker.stock = 10;

      this.setState(()=>{
        return{
          cart:[...tempCart],
          stickers:[...tempStickers]
        }
      },
      ()=>{
        this.addTotals();
      })
    }

    clearCart= () =>{
      this.setState(()=>{
        return{cart: [] }
      },()=>{
        this.setStickers();
      }
      )
    }

    addTotals = () =>{
      let total = 0;;
      this.state.cart.map(item=>(total += item.total));
      this.setState(()=>{
        return{
          cartTotal:total
        }
      })
    }

  render() {
    return (
      <StickerContext.Provider 
      value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal:this.openModal,
        closeModal:this.closeModal,
        increment:this.increment,
        decrement:this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart
      }}
      >
          {this.props.children}
      </StickerContext.Provider>
    )
  }
}

const StickerConsumer = StickerContext.Consumer;


export {StickerProvider, StickerConsumer};
