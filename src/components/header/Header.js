import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import './_header.scss';
const Header = () => {

    const [scroll, setScroll] = useState(false);

    const handleScroll = () => {
        const offset = window.screenY;
        if (offset > 3350) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <div id="header">
            <Navbar />
            <div>
                <h4>Not sure where to go? Perfect</h4>
                <h5>I'm flexible</h5>
            </div>
            <div>
                <div className={`res-footer`} style={{bottom: scroll ? '-48px' : '0'}}>
                    <i className='fas fa-search'></i>
                    <i className="far fa-heart"></i>
                    <i className="far fa-user-circle"></i>
                </div>
            </div>
        </div>
    );
};

export default Header;