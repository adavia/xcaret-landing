import React from 'react';
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';

const PaymentInfo = () => {
    return (  
        <div className="m-4 md:hidden">
            <h3 className="text-center mb-2">Hasta <strong>12 meses</strong> sin intereses</h3>
            <div className="flex items-center justify-center mb-2">
                <FaCcVisa className="text-gray-500 text-3xl mr-3" />
                <FaCcMastercard className="text-gray-500 text-3xl mr-3" />
                <FaCcPaypal className="text-gray-500 text-3xl mr-3" />
                <FaCcMastercard className="text-gray-500 text-3xl mr-3" />
                <FaCcVisa className="text-gray-500 text-3xl mr-3" />
                <FaCcPaypal className="text-gray-500 text-3xl" />
            </div>
            <p className="text-sm font-light">Con los principales bancos y tarjetas emitidas en México</p>
            <p className="text-sm font-light">* No aplica Paypal <strong className="font-bold">Más opciones >></strong></p>
        </div>
    );
}
 
export default PaymentInfo;
