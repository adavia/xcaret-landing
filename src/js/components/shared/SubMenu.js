import React from 'react';

const SubMenu = ({ items }) => {
    const renderItems = Object.keys(items).map(key => 
        <li key={key} className="w-1/4 flex items-center self-stretch border-l 
            first:border-l-0 first:bg-green-800">
            <a className="inline-block text-white uppercase text-tiny 
                text-center m-auto py-2" href="#">
                {items[key]}
            </a>
        </li>
    );

    // bg-green-800 relative callout
    return (  
        <ul className="inline-flex items-center bg-green-600 
            w-screen overflow-x-scroll md:hidden">
            {renderItems}
        </ul>
    );
}
 
export default SubMenu;
