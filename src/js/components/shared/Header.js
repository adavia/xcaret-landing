import React from 'react';
import { 
    FaUserAlt, 
    FaPhone, 
    FaShoppingCart, 
    FaDiceD20, 
    FaSearch, 
    FaQuestionCircle,
    FaCaretDown
} from 'react-icons/fa';
import logo from '../../../images/logo.svg';
import Banner from './Banner';

const NavBar = () => {
    return (
        <React.Fragment>   
            <header className="bg-green-800">
                <nav className="flex items-center md:px-2">
                    <div className="mr-auto p-1">
                        <img src={logo} className="w-40 md:w-56 lg:w-64" alt="Logo XCARET"/>
                    </div>
                    <ul className="flex items-center md:hidden">
                        <li className="flex items-center self-stretch border-l">
                            <a className="block text-white text-sm p-4" href="#">
                                <FaUserAlt />
                            </a>
                        </li>
                        <li className="flex items-center self-stretch border-l">
                            <a className="block text-white text-sm p-4" href="#">
                                <FaPhone />
                            </a>
                        </li>
                        <li className="flex items-center self-stretch border-l">
                            <a className="block text-white text-sm p-4" href="#">
                                <FaShoppingCart />
                            </a>
                        </li>
                        <li className="flex items-center self-stretch border-l">
                            <a className="block text-white text-sm p-4" href="#">
                                <FaDiceD20 />
                            </a>
                        </li>
                    </ul>
                    <div>
                        <ul className="hidden lg:flex items-center">
                            <li>
                                <div className="relative mx-auto p-4 text-gray-600">
                                    <input className="bg-white h-6 px-5 pr-16 rounded-full text-sm focus:outline-none"
                                        type="search" name="search" />
                                    <button type="submit" className="absolute right-0 top-0 mt-5 mr-6">
                                        <FaSearch />
                                    </button>
                                </div>
                            </li>
                            <li>
                                <a className="flex items-center text-white text-xs p-3" href="">
                                    <FaQuestionCircle className="mr-2" /> Preguntas Frecuentes
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center text-white text-xs p-3" href="">
                                    <FaPhone className="mr-2" /> Atención a clientes
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center text-white text-xs p-3" href="">
                                    <FaUserAlt className="mr-2" /> Tu cuenta
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center text-white text-xs p-3" href="">
                                    USD <FaCaretDown className="ml-2" />
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center text-white text-xs p-3" href="">
                                    ES <FaCaretDown className="ml-2" />
                                </a>
                            </li>
                        </ul>
                        <ul className="hidden md:flex items-center justify-end">
                            <li className="flex items-center self-stretch">
                                <a className="block uppercase text-white text-xs p-4" href="#">
                                    Parques
                                </a>
                            </li>
                            <li className="flex items-center self-stretch">
                                <a className="block uppercase text-white text-xs p-4" href="#">
                                    Tours
                                </a>
                            </li>
                            <li className="flex items-center self-stretch">
                                <a className="block uppercase text-white text-xs p-4" href="#">
                                    Actividades
                                </a>
                            </li>
                            <li className="flex items-center self-stretch">
                                <a className="block uppercase text-white text-xs p-4" href="#">
                                Hotel Xcaret
                                </a>
                            </li>
                            <li className="flex items-center self-stretch">
                                <a className="block uppercase text-white text-xs p-4" href="#">
                                Promociones y descuentos
                                </a>
                            </li>
                            <li className="flex items-center self-stretch">
                                <a className="flex items-center uppercase text-white text-xs p-4" href="#">
                                    Carrito <FaShoppingCart className="ml-2" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="text-center bg-green-600 border-t text-white md:hidden p-3">
                    Admisión Parque Xcaret
                </div>
                <Banner />
            </header>
        </React.Fragment>
    );
}
 
export default NavBar;
