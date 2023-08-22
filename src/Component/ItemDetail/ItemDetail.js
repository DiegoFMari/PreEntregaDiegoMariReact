import ItemCount from "../ItemCount/ItemCount"
import { useState, useEffect } from "react";


const ItemDetail = ({ id, marca, modelo, color, precio, stock, tipo, origen }) => {
    return (
      <div className="ItemDetailDiv">
        <div className="divDetail">
          <h3>{marca}</h3>
          <h4>{modelo}</h4>
          <h2>$ {precio}</h2>
          <h2>{color}</h2>
          <h2>{id}</h2>
          <h2>{tipo}</h2>
          <h2>{origen}</h2>
          <ItemCount
            initial={1}
            stock={stock}
            agregarCarrito={(cantidad) => console.log("cantidad agregada", cantidad)}
          />
        </div>
      </div>
    );
  };
  
  export default ItemDetail;
// import React, { useState } from "react";
// import ItemCount from "../ItemCount/ItemCount";
// import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

// const Item = ({ id, imagen, marca, modelo, precio, stock }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   const handleDetailsClick = () => {
//     setShowDetails(true);
//   };

//   return (
//     <div className="ItemDiv">
//       <div className="ItemDivCard">
//         <div className="ItemDivImg">
//           <img src={imagen} alt={modelo} />
//         </div>
//         <div className="ItemDivText">
//           <h3>{marca}</h3>
//           <h4>{modelo}</h4>
//           <h2>$ {precio}</h2>
//           <ItemCount
//             initial={1}
//             stock={stock}
//             agregarCarrito={(cantidad) =>
//               console.log("cantidad agregada", cantidad)
//             }
//           />
//           <button onClick={handleDetailsClick}>detalles</button>
//         </div>
//       </div>
//       {showDetails && <ItemDetailContainer productoID={id} />}
//     </div>
//   );
// };

// export default Item;