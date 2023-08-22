import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productoDetalleId } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    productoDetalleId(itemId)
      .then((response) => {
        setProducto(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;