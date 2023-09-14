import CartWidget from '../CartWidget/CartWidget';
import Logo from './assets/IconoNavBar.png'
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="divNavBar">
            <NavLink to="/">
                <img src={Logo} alt="iconoLogo" className="IconoLogo" />
            </NavLink>
            <div className='divLogoSlogan'>
                <h3>Guitar House</h3>
            </div>
            <div className='buttonNavBar'>
                <NavLink to="/category/Fender" className="Option">Fender</NavLink>
                <NavLink to="/category/Gibson" className="Option">Gibson</NavLink>
                <NavLink to="/category/Ibanez" className="Option">Ibanez</NavLink>
                <NavLink to="/category/Krammer" className="Option">Krammer</NavLink>
                <NavLink to="/category/Texas" className="Option">Texas</NavLink>
                <NavLink to="/category/Epiphone" className="Option">Epiphone</NavLink>
            </div>
            <div className="carrito">
                <NavLink to="/Cart">
                    <CartWidget />
                </NavLink>
            </div>
        </nav>
    );
};

export default NavBar;