import React from 'react';
import './_footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <div className='left'>
                    <p>© Airbnb,inc . Privacy . Terms . Sitemap </p>
                </div>
                <div style={{color: 'gray'}}>
                    <p>©CopyRight {new Date().getFullYear()} by Md. Azizul Haque Jany</p>
                </div>
                <div className='right'>
                    <div className='place'>
                        <i className="fas fa-globe"></i>
                        <h4>English(US)</h4>
                    </div>
                    <div className='state'>
                        $ <span>USD</span>
                    </div>
                    <div className='icons'>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer