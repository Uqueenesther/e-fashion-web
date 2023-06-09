import {useContext} from 'react';
import { CartContext } from '../../context/Cart.context';
import './Cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

 const CartIcon = () =>{
  
  const {isCartOpen, setIsCartOpen} = useContext(CartContext)
   
  const ToggleIsCartOpen = ()=> {
    setIsCartOpen(!isCartOpen)
  }
  
  return(
    <div className='cart-icon-container'>
        <ShoppingIcon className='shopping-icon' onClick={ToggleIsCartOpen}/>
        <span className='item-count'>0</span>
    </div>
  )
};

export default CartIcon;