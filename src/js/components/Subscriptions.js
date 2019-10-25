import React from 'react';
import { FaEnvelopeOpen, FaMobileAlt, FaGooglePlay, FaApple } from 'react-icons/fa';

const Subscriptions = () => {
    return ( 
        <div className="mx-4 mb-4 md:hidden">
            <div className="bg-gray-100 border rounded p-4 mb-3">
                <FaEnvelopeOpen className="text-6xl mx-auto" />
                <p className="text-left mb-2">Recibe promociones y noticias de Xcaret para 
                    disfrutar en tus próximas vacaciones
                </p>
                <button className="bg-black uppercase text-tiny w-full hover:bg-gray-600 
                    text-white font-bold py-2 px-4 rounded-full">
                    Suscribirme
                </button>
            </div>
            <div className="flex bg-gray-100 border rounded p-4">
                <div className="w-1/4">
                    <FaMobileAlt className="text-6xl" />
                </div>
                <div className="w-3/4">
                    <p className="mb-2">Descarga gratis nuestra app y disfruta 
                        de una experiencia única en tu visita.
                    </p>
                    <div className="flex bg-gray-900 rounded p-2 mb-2">
                        <FaGooglePlay className="text-white text-2xl" />
                        <div className="text-white text-xs ml-3">
                            Disponible en
                            <strong className="block font-bold">Google Play</strong>
                        </div>
                    </div>
                    <div className="flex bg-gray-900 rounded p-2">
                        <FaApple className="text-white text-2xl" />
                        <div className="text-white text-xs ml-3">
                            Consíguelo en el
                            <strong className="block font-bold">App Store</strong>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
}
 
export default Subscriptions;
