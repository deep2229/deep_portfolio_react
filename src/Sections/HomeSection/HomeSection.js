import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./HomeSection.css"
import deepPic from "../../MainData/deep1.jpg"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
export const HomeSection = () => {
    useEffect(() => {
        var checkLoaded = true
        checkLoaded = JSON.parse(localStorage.getItem('loaded')) == null ? true : JSON.parse(localStorage.getItem('loaded')) == null
        console.log(checkLoaded);
        if (checkLoaded) {
            toast("Hi,Welcome To My Profile");
            localStorage.setItem('loaded', "false");
        }
    }, [])

    return (
        <div>
            <div>
                <ToastContainer autoClose={2000} position="top-center" />
            </div>
            <div className='mainContainer'>
                <main className="container">
                    <div style={{display:"flex",alignItems:"center"}}>
                        <p>Hello 👋 I'm</p>
                        <section className="animation">
                            <div className="first"><div>Deep Thakkar</div></div>
                            <div className="second"><div>Web Developer</div></div>
                        </section>
                    </div>
                    <button class="glow-on-hover" type="button"  download ><a href="Deep.Thakkar.pdf" download target='_blank'>Download Resume&nbsp;</a><ArrowCircleDownIcon/></button>
                </main>
                <div className='imageContainer'>
                    <img src={deepPic} className="deep" />
                </div>
            </div>
        </div >
    )
}
