import CartWidget from '../CartWidget/CartWidget';
import Logo from './assets/IconoNavBar.png'

const NavBar =()=>{
    return (
        <nav className="divNavBar">
            <img src={Logo} alt='iconoLogo' className='IconoLogo'/>
            <div className='divLogoSlogan'>
            <h3>Guitar Hose</h3>
            </div>
            <div className='buttonNavBar'>
            <button>Guitarras</button>
            <button>Amplificadores</button>
            <button>Accesorios</button>
            <button>Efectos</button>
            </div>
            <div className="carrito">
            <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;
