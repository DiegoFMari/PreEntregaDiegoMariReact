import { useContext, useState } from "react"
import { CartContext } from "../CartContext/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import { Link } from "react-router-dom";

const Checkout = () => {
    const [user, setUser] = useState({});
    const [pedidoID, setPedidoID]=useState('')
    const {cart, total, clear} = useContext(CartContext)
    const datosCompra = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }
    const finalizarCompra =(e)=>{
        e.preventDefault()
        if(!user.nombre && !user.Tel){
            alert("los campos son obligatorios")
        }else{
            let pedido ={
                user,
                item:cart,
                total:total(),
                date: serverTimestamp()
            }
            const venta = collection(db,"pedido")
            addDoc(venta,pedido)
            .then((res)=> {
                setPedidoID(res.id)
                clear()
            })
            .catch((error)=>console.error(error))
        }
    }
    ;

    return (
       <div>
        {pedidoID !==''
        ?<div className="finish0">
            <div className="finishBuy">
            <h1>FELICITACIONES!</h1>
            <h4>Tu Compra fue realizada</h4>
            <h3>Sigue tu pedido con esta ID {pedidoID}</h3>

            </div>
            <div className="backHome">
            <Link to="/" >Volver al HOME</Link>

            </div>
        </div>
        : <div className="divForum0">
        <h1 className="h1forum">Finalizar Compra</h1>
        <h5 className="h5forum">Completa con tus datos!</h5>
        <form onSubmit={finalizarCompra}>
            <div className="divForum1">
                <label>Nombre Completo=</label>
                <input onChange={datosCompra} className="datosForm" type="text" placeholder="Nombre y Apellido" name="nombre" />
            </div>
            <div className="divForum1">
                <label>Telefono de contacto=</label>
                <input onChange={datosCompra} className="datosForm" type="number" placeholder="Ingresa tu Telefono de contacto" name="Tel" />
            </div>
            <div className="divForum1">
                <label>Mail=</label>
                <input onChange={datosCompra} className="datosForm" type="email" placeholder="Ingresa tu E-mail" name="mail" />
            </div>
            <div className="divForum1">
                <label>Repite Mail=</label>
                <input className="datosForm" type="email" placeholder="Repite tu E-mail" name="repiteMail" />
            </div>
            <div>
                <button>Terminar Compra</button>
            </div>
        </form>
    </div>}
       </div>
    );
}

export default Checkout;