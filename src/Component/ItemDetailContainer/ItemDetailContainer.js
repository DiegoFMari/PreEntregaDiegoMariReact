import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../Firebase/firebase';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const refDocs = doc(collection(db, "productos"), itemId);

    getDoc(refDocs)
      .then((response) => {
        if (response.exists()) {
          setProducto({ id: itemId, ...response.data() });
        } else {
          console.log("No se encontró el producto.");
        }
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