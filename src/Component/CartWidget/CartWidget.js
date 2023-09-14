import CarritoLogo from './assets/carritoIcono.png'
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';


const CartWidget = ()=>{
    const {cartQuantity}= useContext(CartContext)
    return(
        <div className='divCarrito'>
         <img src={CarritoLogo}/>
         {cartQuantity()>0 && <h4 className='h4Carrito'>{cartQuantity()}</h4>}
        </div>
    );
}

export default CartWidget;


