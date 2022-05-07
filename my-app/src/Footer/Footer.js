import React from 'react';
import ReactDOM from 'react-dom';

import './Footer.css';

function Footer() {
    return(
        <footer>
            <div className='Footer-div'>
                <div className='Icons Twitter'>
                    <a className='Links' href='https://twitter.com/kxnyshk' target={'_blank'}><i className="fa fa-brands fa-twitter Twitter-Icon"></i></a>
                </div>

                <div className='Copyright'>
                    © kxnyshk dev.| 2022
                </div>
                <div className='Icons GitHub'>
                    <a className='Links' href='https://github.com/kxnyshk' target={'_blank'}><i className="fa fa-brands fa-github GitHub-Icon"></i></a> 
                </div>
            </div>
        </footer>
    )
}

export default Footer