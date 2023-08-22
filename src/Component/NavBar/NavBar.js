import CartWidget from '../CartWidget/CartWidget';
import Logo from './assets/IconoNavBar.png'
import { NavLink } from "react-router-dom"

const NavBar =()=>{
    return (
        <nav className="divNavBar">
               <NavLink to="/">
                <img src={Logo} alt="iconoLogo" className="IconoLogo" />
            </NavLink>
            <div className='divLogoSlogan'>
            <h3>Guitar House</h3>
            </div>
            <div className='buttonNavBar'>
            <NavLink to={`/category/Fender`} className={({isActive})=> isActive ? "ActiveOption" : "Option"}>Fender</NavLink>
            <NavLink to={`/category/Gibson`} className={({isActive})=> isActive ? "ActiveOption" : "Option"}>Gibson</NavLink>
            <NavLink to={`/category/Ibanez`} className={({isActive})=> isActive ? "ActiveOption" : "Option"}>Ibanez</NavLink>
            <NavLink to={`/category/Krammer`} className={({isActive})=> isActive ? "ActiveOption" : "Option"}>Krammer</NavLink>
            <NavLink to={`/category/Texas`} className={({isActive})=> isActive ? "ActiveOption" : "Option"}>Texas</NavLink>
            <NavLink to={`/category/Epiphone`} className={({isActive})=> isActive ? "ActiveOption" : "Option"}>Epiphone</NavLink>
            </div>
            <div className="carrito">
            <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;
