import React from 'react';
import banner from '../../../images/banner.jpg';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Banner = () => {
    return ( 
        <div className="relative">
            <img className="w-full object-cover" 
                style={{maxHeight: '35rem'}}
                src={banner} alt="Banner XCARET" />

            <button className="absolute left-0 rounded-full 
                shadow-md h-10 w-10 md:h-12 md:w-12 text-xl md:text-2xl text-white
                focus:outline-none focus:shadow-outline"
                style={{top: '50%', background: 'rgba(0, 0, 0, 0.6)', transform: 'translate(50%, -50%)'}}>
                <span className="flex items-center justify-center">
                    <FaChevronLeft />
                </span>
            </button>
            <button className="absolute right-0 rounded-full 
                shadow-md h-10 w-10 md:h-12 md:w-12 text-xl md:text-2xl text-white
                focus:outline-none focus:shadow-outline"
                style={{top: '50%', background: 'rgba(0, 0, 0, 0.6)', transform: 'translate(-50%, -50%)'}}>
                <span className="flex items-center justify-center">
                    <FaChevronRight />
                </span>
            </button>
        </div>
    );
}
 
export default Banner;
