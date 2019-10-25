import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo_xelha from '../../../images/logo_xelha.svg'; 
import logo_grupo from '../../../images/logo_grupo.svg'; 
import logo_experiencias from '../../../images/logo_experiencias.svg'; 
import logo_expeditions from '../../../images/logo-expeditions.svg'; 
import logo_xichen from '../../../images/logo-xichen.svg'; 

const Footer = () => {
    return (  
        <footer className="bg-green-600">
                <div className="md:flex md:items-center md:justify-center md:pt-5 md:pb-8">
                    <div className="flex items-center justify-center md:justify-between 
                        p-5 md:p-0 md:mr-8">
                        <img className="w-20 mr-8" src={logo_xelha} alt="Logo Xelha"/>
                        <img className="w-20 mr-8" src={logo_xelha} alt="Logo Xelha"/>
                        <img className="w-20" src={logo_xelha} alt="Logo Xelha"/>
                    </div>
                    <div className="flex items-center justify-center md:justify-between 
                        pb-6 px-5 md:pb-0 md:px-0 md:mr-8">
                        <img className="w-20 mr-8" src={logo_xelha} alt="Logo Xelha"/>
                        <img className="w-20 mr-8" src={logo_xelha} alt="Logo Xelha"/>
                        <img className="w-20" src={logo_xelha} alt="Logo Xelha"/>
                    </div>
                    <div className="flex items-center justify-center md:justify-between 
                        pb-5 px-5 md:pb-0 md:px-0">
                        <img className="w-20 mr-8" src={logo_xelha} alt="Logo Xichen"/>
                        <img className="w-20" src={logo_xelha} alt="Logo Xichen"/>
                    </div>
                </div>
            <div className="flex items-center justify-center pb-8 px-5">
                <img className="w-32 mr-8" src={logo_experiencias} alt="Logo Experiencias"/>
                <img className="w-32" src={logo_experiencias} alt="Logo Experiencias"/>
            </div>
            <div className="pb-8">
                <img className="w-32 mx-auto" src={logo_expeditions} alt="Logo Expeditions"/>
            </div>
            <div className="flex items-center justify-center pb-8 px-5">
                <img className="w-20 mr-8" src={logo_xelha} alt="Logo Xelha"/>
                <img className="w-20 mr-8" src={logo_xelha} alt="Logo Xelha"/>
                <img className="w-20" src={logo_xelha} alt="Logo Xelha"/>
            </div>
            <div className="pb-8">
                <img className="w-32 mx-auto" src={logo_grupo} alt="Logo Grupo"/>
            </div>

            <div className="text-white px-4 mb-6">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="">
                        <h3 className="text-sm font-bold border-b pb-2 mb-2">Destinos</h3>
                        <ul className="mb-8">
                            <li className="text-sm mb-2">Cancun</li>
                            <li className="text-sm mb-2">Playa del Carmen</li>
                            <li className="text-sm mb-2">Tulum</li>
                            <li className="text-sm mb-2">Playa del Carmen</li>
                            <li className="text-sm mb-2">Cancun</li>
                            <li className="text-sm mb-2">Tulum</li>
                            <li className="text-sm mb-2">Playa del Carmen</li>
                        </ul>
                    </div>

                    <div className="">
                        <h3 className="text-sm font-bold border-b pb-2 mb-2">Sitios Xcaret</h3>
                        <ul className="mb-8">
                            <li className="text-sm mb-2">Acerca de Xcaret</li>
                            <li className="text-sm mb-2">Acerca de Xel-Há</li>
                            <li className="text-sm mb-2">Acerca de Xplor</li>
                            <li className="text-sm mb-2">Acerca de Xel-Há</li>
                            <li className="text-sm mb-2">Acerca de Xcaret</li>
                            <li className="text-sm mb-2">Acerca de Xplor</li>
                            <li className="text-sm mb-2">Acerca de Xel-Há</li>
                        </ul>
                    </div>

                    <div>
                    <h3 className="text-sm font-bold border-b pb-2 mb-2">Comprar</h3>
                    <ul className="mb-8">
                        <li className="text-sm mb-2">Comprar Xcaret</li>
                        <li className="text-sm mb-2">Comprar Xel-Há</li>
                        <li className="text-sm mb-2">Comprar Xplor</li>
                        <li className="text-sm mb-2">Comprar Xel-Há</li>
                        <li className="text-sm mb-2">Comprar Xcaret</li>
                        <li className="text-sm mb-2">Comprar Xplor</li>
                        <li className="text-sm mb-2">Comprar Xel-Há</li>
                    </ul>
                    </div>

                    <div>
                    <h3 className="text-sm font-bold border-b pb-2 mb-2">Sobre Xcaret</h3>
                    <ul className="mb-8">
                        <li className="text-sm mb-2">Mapa de sitio</li>
                        <li className="text-sm mb-2">Blog de Xcaret</li>
                        <li className="text-sm mb-2">Atracciones en Xcaret</li>
                        <li className="text-sm mb-2">Blog de Xcaret</li>
                        <li className="text-sm mb-2">Mapa de sitio</li>
                        <li className="text-sm mb-2">Atracciones en Xcaret</li>
                        <li className="text-sm mb-2">Blog de Xcaret</li>
                    </ul>
                    </div>

                    <div>
                    <h3 className="text-sm font-bold border-b pb-2 mb-2">Otros</h3>
                    <ul className="mb-8">
                        <li className="text-sm mb-2">Acerca de Grupo Xcaret</li>
                        <li className="text-sm mb-2">Contáctanos</li>
                        <li className="text-sm mb-2">Afiliados</li>
                        <li className="text-sm mb-2">Contáctanos</li>
                        <li className="text-sm mb-2">Acerca de Grupo Xcaret</li>
                        <li className="text-sm mb-2">Grupos</li>
                        <li className="text-sm mb-2">Prensa</li>
                    </ul>
                    </div>
                </div>

                <div className="md:flex md:flex-row-reverse md:-mx-4">
                    <div className="md:w-3/5 mb-5 md:px-4">
                        <h3 className="text-sm font-bold border-b pb-2 mb-2">Customer Service / Sales</h3>
                        <div className="my-6">
                            <p className="text-xs font-light">Monday to Friday from 7:00 AM to 12:00 AM /</p>
                            <p className="text-xs font-light">Saturday and Sunday from 7:00 AM to 10:00 PM.</p>
                            <p className="text-xs font-light">LocalTime.</p>
                        </div>

                        <h3 className="text-xs font-bold mb-2">Toll free number within México</h3>
                        <div className="flex -mx-2 items-center mb-2">
                            <div className="w-1/2 px-2">
                                <div className="bg-green-900 rounded-lg py-2 px-3 text-center">
                                    <h4 className="text-xs">Cancun:</h4>
                                    <p className="text-xs">998-883-3143</p>
                                </div>
                            </div>
                            <div className="w-1/2 px-2">
                                <div className="bg-green-900 rounded-lg py-2 px-3 text-center">
                                    <h4 className="text-xs">Cancun:</h4>
                                    <p className="text-xs">998-883-3143</p>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-xs font-bold mb-2">Rest of the world</h3>
                        <div className="flex flex-wrap -mx-2 items-center mb-2 -mb-3">
                            <div className="w-1/2 px-2 mb-3">
                                <div className="bg-green-900 rounded-lg py-2 px-3 text-center">
                                    <h4 className="text-xs">Cancun:</h4>
                                    <p className="text-xs">998-883-3143</p>
                                </div>
                            </div>
                            <div className="w-1/2 px-2 mb-3">
                                <div className="bg-green-900 rounded-lg py-2 px-3 text-center">
                                    <h4 className="text-xs">Cancun:</h4>
                                    <p className="text-xs">998-883-3143</p>
                                </div>
                            </div>
                            <div className="w-1/2 px-2 mb-3">
                                <div className="bg-green-900 rounded-lg py-2 px-3 text-center">
                                    <h4 className="text-xs">Cancun:</h4>
                                    <p className="text-xs">998-883-3143</p>
                                </div>
                            </div>
                            <div className="w-1/2 px-2 mb-3">
                                <div className="bg-green-900 rounded-lg py-2 px-3 text-center">
                                    <h4 className="text-xs">Cancun:</h4>
                                    <p className="text-xs">998-883-3143</p>
                                </div>
                            </div>
                            <div className="w-1/2 px-2 mb-3">
                                <div className="bg-green-900 rounded-lg py-2 px-3 text-center">
                                    <h4 className="text-xs">Cancun:</h4>
                                    <p className="text-xs">998-883-3143</p>
                                </div>
                            </div>
                            <div className="w-1/2 px-2 mb-3 ">
                                <div className="bg-green-900 rounded-lg py-2 px-3 text-center">
                                    <h4 className="text-xs">Cancun:</h4>
                                    <p className="text-xs">998-883-3143</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="md:w-2/5 border-b md:border-b-0 text-white pb-1 mb-4 md:px-4">
                        <h3 className="hidden md:block text-sm font-bold border-b pb-2 mb-2">Redes Sociales</h3>
                        <div className="flex items-center justify-around md:justify-start md:items-start">
                            <FaFacebookF className="text-2xl md:mr-4" />
                            <FaTwitter className="text-2xl md:mr-4" />
                            <FaInstagram className="text-2xl md:mr-4" />
                            <FaYoutube className="text-2xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-4 text-white pb-6">
                <p className="text-xs mb-2">
                    Xcaret - México, Carretera Chetumal - Puerto Juárez km 282 Int.
                    Colonia Rancho Xcaret, Playa del Carmen, Quintana Roo. México. CP 77580.
                </p>
                <p className="text-xs mb-2">
                    Teléfono Cancún: 998-883-3143 www.xcaret.com/es/ Horario del Parque: 
                    De lunes a domingo de 8:30 a.m. a 10:30 p.m. (EST)
                </p>
                <p className="text-xs">
                    © Copyright 2019 Grupo Xcaret Parques, S.A.P.I. de C.V
                </p>
            </div>
        </footer>
    );
}
 
export default Footer;
