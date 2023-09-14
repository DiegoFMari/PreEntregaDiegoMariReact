import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const { categoryID } = useParams();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const itemCollection = categoryID
          ? query(collection(db, "productos"), where("marca", "==", categoryID))
          : collection(db, "productos");
        const querySnapshot = await getDocs(itemCollection);
        const productList = querySnapshot.docs.map((product) => ({
          id: product.id,
          ...product.data(),
        }));
        setProductos(productList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductos();
  }, [categoryID]);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;