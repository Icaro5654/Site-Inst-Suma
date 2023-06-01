import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

//img
import logo from "../img/logo.png"



const Navbar = () => {
    return(
        <nav className={styles.navbar}>
            <NavLink to='/home'>
                <img src={logo} alt="Instituto Sumaúma" width="70px"/>
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">Sobre</NavLink>
                </li>
                <li>
                    <NavLink to="/project">Projetos</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contatos</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;