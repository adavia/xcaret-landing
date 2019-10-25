import React from 'react';
import about1 from '../../images/about_1.jpg';
import about2 from '../../images/about_2.jpg';
import about3 from '../../images/about_3.jpg';

const About = () => {
    return (  
        <div className="mx-4 mt-5">
            <p className="text-sm text-gray-700 mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin tincidunt gravida augue eu pretium. Integer lobortis urna ut tortor bibendum vulputate. 
                Quisque bibendum augue nec metus mattis lacinia. Quisque in sollicitudin felis. 
                Nulla iaculis leo id commodo molestie. Sed maximus arcu euismod lobortis egestas. 
                Proin nec finibus ipsum.
            </p>
            <p className="text-sm font-semibold mb-3">
                Los visitantes que compraron su admisión a Parque Xcaret también compraron:
            </p>
            <div className="flex -mx-2 mb-3 md:mb-5">
                <div className="sm:w-1/2 md:w-1/3 px-2">
                    <img className="object-cover h-56 w-full rounded-lg" src={about1} />
                </div>
                <div className="sm:w-1/2 md:w-1/3 px-2">
                    <img className="object-cover h-56 w-full rounded-lg" src={about2} />
                </div>
                <div className="hidden w-1/3 px-2 md:block">
                    <img className="object-cover h-56 w-full rounded-lg" src={about3} />
                </div>
            </div>
        </div>
    );
}
 
export default About;
