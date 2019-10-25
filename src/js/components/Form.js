import React from 'react';
import { FaQuestionCircle, FaBus, FaUtensils, FaCamera } from 'react-icons/fa';

const Form = () => {
    return (  
        <div className="bg-gray-200 shadow rounded p-4">
            <h1 className="uppercase text-gray-700 text-center font-semibold mb-6">
                Hasta 12 meses sin
                <span className="flex items-center justify-center">intereses 
                    <FaQuestionCircle className="ml-2" />
                </span>
            </h1>

            <div className="flex -mx-2 mb-3">
                <div className="w-1/2 px-2">
                    <label className="block tracking-wide text-gray-700 
                        text-xs text-center mb-2 mx-auto" htmlFor="grid-first-name">
                        Adultos:
                        <span className="block">$93.49 USD</span>
                    </label>
                    <input className="appearance-none block w-full bg-gray-100 text-gray-700 
                        text-sm border border-gray-400 rounded leading-tight 
                        focus:outline-none focus:border-gray-500 py-3 px-4 " 
                        id="grid-first-name" type="text" placeholder="Adultos (12+ años)" />
                </div>
                <div className="w-1/2 px-2">
                    <label className="block tracking-wide text-gray-700 
                        text-xs text-center mb-2 mx-auto" htmlFor="grid-last-name">
                        Niños:
                        <span className="block">$46.75 USD</span>
                    </label>
                    <input className="appearance-none block w-full bg-gray-100 
                        text-gray-700 text-sm border border-gray-400 rounded 
                        leading-tight focus:outline-none focus:border-gray-500 py-3 px-4 " 
                        id="grid-last-name" type="text" placeholder="Niños (5-11 años)" />
                </div>
            </div>
            <div className="flex -mx-3 mb-3">
                <div className="w-full px-3">
                    <input className="appearance-none block w-full bg-gray-100 
                        text-gray-700 text-sm border border-gray-400 rounded 
                        leading-tight focus:outline-none focus:border-gray-500 py-3 px-4" 
                        id="grid-password" type="password" placeholder="Fecha de visita" />
                </div>
            </div>
            <div className="flex -mx-1 mb-3">
                <div className="w-5/6 px-1">   
                    <button className="flex items-center justify-center bg-transparent 
                        w-full text-gray-800 text-sm py-2 px-4 border border-gray-700 
                        hover:border-gray-900 rounded-full">
                        Agregar <FaBus className="mx-1" /> transportación
                    </button>
                </div>
                <div className="w-1/6 px-1">   
                    <button className="bg-transparent w-full text-gray-800 text-sm py-2 
                        border border-gray-700 hover:border-gray-900 rounded-full">
                        info
                    </button>
                </div>
            </div>
            <div className="flex -mx-1 mb-3">
                <div className="w-5/6 px-1">   
                    <button className="flex items-center justify-center bg-transparent 
                        w-full text-gray-800 text-sm py-2 px-4 border border-gray-700 
                        hover:border-gray-900 rounded-full">
                        Agregar <FaUtensils className="mx-1" /> alimentos y bebidas
                    </button>
                </div>
                <div className="w-1/6 px-1">   
                    <button className="bg-transparent w-full text-gray-800 text-sm py-2 
                        border border-gray-700 hover:border-gray-900 rounded-full">
                        info
                    </button>
                </div>
            </div>
            <div className="flex -mx-1 mb-5">
                <div className="w-5/6 px-1">   
                    <button className="flex items-center justify-center bg-transparent 
                        w-full text-gray-800 text-sm py-2 px-4 border border-gray-700 hover:border-gray-900 rounded-full">
                        Agregar <FaCamera className="mx-1" /> Fotopass
                    </button>
                </div>
                <div className="w-1/6 px-1">   
                    <button className="bg-transparent w-full text-gray-800 
                        text-sm py-2 border border-gray-700 hover:border-gray-900 rounded-full">
                        info
                    </button>
                </div>
            </div>
            <div className="mb-4">
                <h2 className="uppercase font-bold text-xl text-center mb-2">
                    Total: $93.49 USD
                </h2>
                <p className="text-sm text-gray-900 text-center">*Precios sujeto a cambio sin previo aviso. Aplican restricciones</p>
            </div>
            <div className="flex -mx-2 mb-3">
                <div className="w-1/2 px-2">   
                    <button className="bg-red-500 w-full uppercase text-gray-100 
                        text-sm py-2 px-4 rounded-full">
                        Agregar al carrito
                    </button>
                </div>
                <div className="w-1/2 px-2">   
                    <button className="h-full bg-red-600 w-full uppercase text-gray-100 
                        text-sm py-2 px-4 rounded-full">
                        Pagar
                    </button>
                </div>
            </div>
            <div className="flex -mx-3">
                <div className="w-full px-3">  
                    <button className="h-12 bg-transparent w-full text-gray-800 text-sm 
                        py-2 px-4 border border-gray-700 hover:border-gray-900 rounded-full">
                        Ver descuentos y beneficios
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default Form;
