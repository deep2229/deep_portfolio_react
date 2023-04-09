import React from 'react'
import { NavMenu } from "../../MainData/MainData"
import "./Topbar.css"
import { Outlet, Link } from "react-router-dom";
const Topbar = () => {
    return (
        <div className='topbar'>
       
            <div> {NavMenu.map((i) =>
                <Link to={i.url}> <li>{i.label}</li> </Link>
            )}
            </div>
        </div>
    )
}

export default Topbar