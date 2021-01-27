// rfce
import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100){
                handleShow(true)
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className='nav__logo'
                src='https://karakoymono.com/wp-content/uploads/2018/06/1528954094_Netflix_Logo_RGB.jpg'
                alt='Netflix logo'
            />
            <img 
                className='nav__avatar'
                src='https://avatars.mds.yandex.net/get-zen_doc/3839286/pub_5f5d3b1ed7092473172853f8_5f5d465293cc6c72ff3ae46c/scale_1200'
                alt='Netflix logo'
            />
            
        </div>
    )
}

export default Nav
