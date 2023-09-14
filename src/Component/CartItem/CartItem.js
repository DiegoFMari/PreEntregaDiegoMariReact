import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"

const CartItem =({item})=>{
    const{deleteItem}= useContext(CartContext)
    return(
        <div className="d-flex justify-content-around aling-item-center">
            <img src={item.imagen} alt={item.modelo}/>
            <p>Marca:{item.marca}</p>
            <p>Modelo:{item.modelo}</p>
            <p>Cantida:{item.quantity}</p>
            <p>${item.precio}</p>
            <p>Sub Total: {item.quantity * item.precio}</p>
            <button className="btnBorrarCarrito" onClick={()=>deleteItem(item.id)}>⛔</button>
        </div>
    )
}

export default CartItem