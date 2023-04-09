import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import PhoneIcon from '@mui/icons-material/Phone';
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import './Footerfab.css'
import { Outlet, Link } from "react-router-dom";
const FooterFab = () => {
    return (
        <div className='fab'>
            <Fab
                icon={<AddIcon />}
                alwaysShowTitle={true}
            >
                <Action
                    text="Home"
                >
                    <Link to='/'><HomeIcon className='icon' /></Link>
                </Action>
                <Action
                    text="Contact"
                >
                    <Link to='/contact'><PhoneIcon className='icon' /></Link>
                </Action>
                <Action
                    className='icon'
                    text="About me"
                >
                    <Link to='/about'><LocalLibraryIcon className='icon' /></Link>
                </Action>

            </Fab>
        </div>
    )
}

export default FooterFab