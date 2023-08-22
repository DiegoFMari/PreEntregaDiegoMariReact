import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ producto }) => {
  if (!producto) {
    return null;
  }

  const { id, marca, modelo, color, precio, stock, tipo, origen, Cuerdas, imagen } = producto;

  return (
    <div className="ItemDetailDiv">
      <div className="divDetail">
      <div className="ItemDivImg">
          <img src={imagen} alt={modelo} />
        </div>
        <h3>{marca}</h3>
        <h4>{modelo}</h4>
        <h2>$ {precio}</h2>
        <h2>{color}</h2>
        <h2>{Cuerdas}</h2>
        <h2>{id}</h2>
        <h2>{tipo}</h2>
        <h2>{origen}</h2>
        <ItemCount
          initial={1}
          stock={stock}
          agregarCarrito={(cantidad) => console.log('cantidad agregada', cantidad)}
        />
      </div>
    </div>
  );
};

export default ItemDetail;