import { Children } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { getProducts } from "../../asyncMock"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { NavLink } from "react-router-dom";


const Item = ({ imagen, marca, modelo, precio, stock, id }) => {
    return (
        <div className="ItemDiv">
            <div className="ItemDivCard">
                <div className="ItemDivImg">
                    <img src={imagen} alt={modelo} />
                </div>
                <div className="ItemDivText">
                    <h3>{marca}</h3>
                    <h4>{modelo}</h4>
                    <h2>$ {precio}</h2>
                    <ItemCount
                        initial={1}
                        stock={stock}
                        agregarCarrito={(cantidad) => console.log("cantidad agregada", cantidad)} />
                    <NavLink to={`/productos/${id}`}>
                        Ver Detalles
                    </NavLink>;
                </div>
            </div>

        </div>
    )

}

export default Item