import React from 'react';
import { FaHome, FaClock, FaHeart } from 'react-icons/fa';

const Content = () => {
    return (  
        <section className="text-gray-800">
            <span className="flex items-center text-sm mb-3">
                <FaHome className="mr-2" /> Home // Admisiones
            </span>
            <h1 className="uppercase text-lg font-bold mb-5">Entrada Xcaret Parque</h1>
            <p className="text-sm font-semibold mb-5">
                Esta es una prueba para validar la descripción del producto
            </p>
            <h3 className="uppercase text-gray-600 font-bold mb-5">Entrada Xcaret Parque</h3>

            <ul className="text-sm font-semibold mb-6">
                <li className="flex items-center">
                    <FaClock className="mr-2" /> Duración <span className="text-gray-600 font-light ml-1">12 Horas</span>
                </li>
                <li className="flex items-center">
                    <FaHeart className="mr-2" />Categoría <span className="text-gray-600 font-light ml-1">Aventura</span>
                </li>
                <li className="flex items-center">
                    <FaClock className="mr-2" />Horario <span className="text-gray-600 font-light ml-1">Vespertino</span>
                </li>
            </ul>   

            <ul className="flex border-b border-green-600 mr-4">
                <li className="-mb-px mr-1">
                    <a className="w-48 bg-white inline-block border-l border-green-600 
                        border-t border-r rounded-t py-2 px-4 text-sm text-green-700 
                        text-center font-semibold" 
                        href="#">Primer tab
                    </a>
                </li>
                <li className="mr-1">
                    <a className="w-48 bg-white inline-block py-2 px-4 text-gray-800 text-sm 
                        text-center font-semibold" href="#">
                        Segundo tab
                    </a>
                </li>
                <li className="mr-1">
                    <a className="w-48 bg-white inline-block py-2 px-4 text-gray-800 text-sm 
                        text-center font-semibold" href="#">
                        Tercer tab
                    </a>
                </li>
            </ul>

            <ul className="list-inside list-disc mb-10">
                <li className="px-6 py-2 text-sm">Etiam vestibulum, diam sit amet consectetur hendrerit, augue mauris porttitor lectus</li>
                <li className="px-6 pb-2 text-sm">Etiam vestibulum, diam sit amet consectetur hendrerit, augue mauris porttitor lectus</li>
                <li className="px-6 pb-2 text-sm">Etiam vestibulum, diam sit amet consectetur hendrerit, augue mauris porttitor lectus</li>
                <li className="px-6 pb-2 text-sm">Etiam vestibulum, diam sit amet consectetur hendrerit, augue mauris porttitor lectus</li>
                <li className="px-6 pb-2 text-sm">Etiam vestibulum, diam sit amet consectetur hendrerit, augue mauris porttitor lectus</li>
                <li className="px-6 pb-2 text-sm">Etiam vestibulum, diam sit amet consectetur hendrerit, augue mauris porttitor lectus</li>
                <li className="px-6 pb-2 text-sm">Etiam vestibulum, diam sit amet consectetur hendrerit, augue mauris porttitor lectus</li>
                <li className="px-6 pb-2 text-sm">Etiam vestibulum, diam sit amet consectetur hendrerit, augue mauris porttitor lectus</li>
                <li className="px-6 pb-2 text-sm">Etiam vestibulum, diam sit amet consectetur hendrerit, augue mauris porttitor lectus</li>
                <li className="px-6 pb-2 text-sm">Etiam vestibulum, diam sit amet consectetur hendrerit, augue mauris porttitor lectus</li>
                <li className="px-6 pb-2 text-sm">Etiam vestibulum, diam sit amet consectetur hendrerit, augue mauris porttitor lectus</li>
            </ul>

            <div className="flex items-center justify-between mr-4 mb-4">
                <button className="w-40 text-center text-gray-500 border border-gray-500 
                    text-sm py-2 px-4 rounded-full">
                    Xcaret total
                </button>
                <button className="w-40 text-center text-gray-500 border border-gray-500 
                    text-sm py-2 px-4 rounded-full">
                    Xcaret Plus
                </button>
            </div>
        </section>
    );
}
 
export default Content;
