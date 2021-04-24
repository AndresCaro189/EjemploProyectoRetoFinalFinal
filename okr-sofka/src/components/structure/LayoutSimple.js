import React from 'react'
import { Outlet } from 'react-router-dom';

const LayoutSimple = () => {
    return(
        <div>
             <p>layout main</p>           
             <Outlet />
        </div>
       
    )

}

export default LayoutSimple