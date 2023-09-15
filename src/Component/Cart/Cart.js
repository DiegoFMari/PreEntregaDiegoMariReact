import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clear, total } = useContext(CartContext);

  return (
    <div className="divCart">
      {cart.length ? (
        <div className="divBtnCart">
          <div className="divCardCart">
          {cart.map((item) => <CartItem key={item.id} item={item} />)}
          </div>
          <div className="totalCart">
          <p>Total a pagar: $ {total()}</p>
          </div>
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
        <div className="cartVacio0">
          <div>
          <h3 className="carritoVacio1">Tu Carrito Está Vacío!</h3>
          </div>
          <div className="btnCartVacio">
          <Link to="/">Ir a Comprar</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;