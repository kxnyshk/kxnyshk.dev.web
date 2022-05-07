import React from 'react';
import ReactDOM from 'react-dom';

import './Header.css';
import HeaderImage from './levi-meir-clancy-jZaQOzrC3XU-unsplash.jpg'

function Photo() {
    return(
        <header>
            <div className='Header-div'>
                <img src={HeaderImage} className="Header-img"/>
            </div>
        </header>
    )
}

export default Photo