import { useState, useEffect } from "react";
import { productoDetalleId, getProducts } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail"; // Importa el componente ItemDetail

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { productoId } = useParams();

useEffect(() => {
    const asyncFunc = productoId ? productoDetalleId : getProducts;

    asyncFunc(productoId)
      .then((response) => {
        setProducto(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productoId]);
  return (
    <div className="ItemDetailContainer">
      <ItemDetail productoId={producto} />
    </div>
  );
};

export default ItemDetailContainer;


// useEffect(() => {
//     productoDetalleId(productoId)
//       .then((response) => {
//         console.log(response); // Agrega este console.log para verificar la respuesta
//         setProducto(response);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [productoId]);

//   return (
//     <div className="ItemDetailContainer">
//       {producto && <ItemDetail {...producto} />}
//     </div>
//   );
// };
