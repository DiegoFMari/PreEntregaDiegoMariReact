import CarritoLogo from './assets/carritoIcono.png'

const CartWidget = ()=>{
    return(
        <div className='divCarrito'>
         <img src={CarritoLogo}/>
         <h6>1</h6>
        </div>
    );
}

export default CartWidget;