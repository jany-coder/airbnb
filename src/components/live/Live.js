import React from 'react';
import './_live.scss';

const img = "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480";
const img02 = "https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480";
const img03 = "https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480";

const Live = () => {
    return (
        <div id='live'>
            <div className='l-container'>
                <h2 className='head-title'>Live anywhere</h2>
                <div className='img-wrap'>
                    <div className='box'>
                        <img src={img} alt='f'/>
                        <h4>Outdoor gataways</h4>
                    </div>
                    <div className='box'>
                        <img src={img02} alt='f'/>
                        <h4>Unique Stays</h4>
                    </div>
                    <div className='box'>
                        <img src={img03} alt='f'/>
                        <h4>Entire Home</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Live;
