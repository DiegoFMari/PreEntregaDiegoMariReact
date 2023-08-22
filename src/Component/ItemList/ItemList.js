import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ productos }) => {
  return (
    <div className="ItemListDiv">
      {productos.map((prod) => (
        <Item
          key={prod.id}
          imagen={prod.imagen}
          marca={prod.marca}
          modelo={prod.modelo}
          precio={prod.precio}
          stock={prod.stock}
        />
      ))}
    </div>
  );
};

export default ItemList;