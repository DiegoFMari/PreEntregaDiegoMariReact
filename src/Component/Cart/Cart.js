import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clear, total } = useContext(CartContext);

  return (
    <div>
      {cart.length ? (
        <div>
            {cart.map((item)=> <CartItem key={item.id} item={item}/>)}
          <p>Total a pagar: $ {total()}</p>
          <div>
            <button className="btnVaciar" onClick={clear}>
              Vaciar Carrito
            </button>
            <Link to="/checkout" className="btnTerminarCompra" >
              Terminar Compra
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <h3>Tu Carrito Está Vacío!</h3>
          <Link to="/">Ir a Comprar</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;