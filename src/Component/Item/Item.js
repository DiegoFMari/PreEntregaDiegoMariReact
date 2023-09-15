import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

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
          <Link to={`/productos/${id}`} className='BtnDetail'>Ver Detalles</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
