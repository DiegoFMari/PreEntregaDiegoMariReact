import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../CartContext/CartContext';

const ItemDetail = ({ producto }) => {
  const [quantiyAdded, setquantiyAdded]=useState('')
  const { addItem } = useContext(CartContext);
  
  const onAdd = (cantidad) => {
    setquantiyAdded(cantidad)
    addItem(producto, cantidad);
  };

  
  if (!producto) {
    return null;
  }

  const { marca, modelo, color, precio, stock, tipo, Cuerdas, imagen } = producto;
  

  return (
    <div className="ItemDetailDiv">
      <div className="divDetail">
        <div className="ItemDivImg">
          <img src={imagen} alt={modelo} />
        </div>
        <h3>Marca: {marca}</h3>
        <h4>Modelo: {modelo}</h4>
        <h2>$ {precio}</h2>
        <h2>Color: {color}</h2>
        <h2>Cantidad de Cuerdas: {Cuerdas}</h2>
        <h2>Tipo: {tipo}</h2>
        <ItemCount
          initial={1}
          stock={stock}
          agregarCarrito={(cantidad) => onAdd(cantidad)}
        />
      </div>
    </div>
  );
};

export default ItemDetail;