import CarritoLogo from './assets/carritoIcono.png'

const CartWidget = ()=>{
    return(
        <div className='divCarrito'>
         <img src={CarritoLogo}/>
         <h4 className='h4Carrito'>1</h4>
        </div>
    );
}

export default CartWidget;