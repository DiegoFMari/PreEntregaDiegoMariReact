import { useState } from "react"

const ItemCount = ({stock, initial, agregarCarrito})=>{
    const [cantidad, setCantidad]=useState(initial)

    const agregar = ()=>{
        if(cantidad < stock){
            setCantidad(cantidad+1)
        }
    }

    const restar=()=>{
        if(cantidad>1){
            setCantidad(cantidad-1)
        }
    }

    return(
        <div className="ItemCountDiv">
            <div className="BotoneraCounter">
                <button className="ButtonCounter" onClick={restar}>-</button>
                <p className="CantidadItems">{cantidad}</p>
                <button className="ButtonCounter" onClick={agregar}>+</button>
                <button className="ButtonCounter" onClick={()=>agregarCarrito(cantidad)} disabled={!cantidad}>Agregar Al Carrito</button>
            </div>
        </div>

    )
}


export default ItemCount