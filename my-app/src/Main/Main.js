import React from 'react';
import ReactDOM from 'react-dom';

import './Main.css';

function Main() {

    function SendEMail(e) {
        const Mail = "ikanishk1172@gmail.com";
        const Subject = "Contacting from kxnyshk.dev.web"
        e.preventDefault();
        window.open(
            "mailto:"+Mail+'?subject='+Subject,
            "_blank"
        );
    }

    return(
        <main>
            <div className='Main-div'>
                <div className='Main-Header'>
                    <h1 className='Name'>Kanishk Bhadauria</h1>
                    <h2 className='Dev'>React.js & Python Development</h2>
                </div>

                <div className='Main-Buttons'>
                    <form name='Form-EMail' action='/' method="GET">
                        <input onClick={SendEMail} className='E-Mail-button' type="submit" value="E-Mail"/>
                    </form>
                    <form name='Form-LinkedIn' action="https://www.linkedin.com/in/kanishkbhadauria" target="_blank" method="GET">
                        <input className='Linked-In-button' type="submit" value="LinkedIn"/>
                    </form>
                </div>

                <div className='Main-Body'>
                    <div className='About-section'>
                        <h1 className='About-header'>About 👋🏿</h1>
                        <h2 className='About-body'>
                            Hi! I am an undergrad Front-end developer, currently working my way through React.js, also working upon
                            Python development through automation, data visualization, API development, cryptography, alongside.
                            Currently studying in 3rd year of my Bachelor's undergrad programme in Computer Science from New Delhi, India.
                        </h2>
                    </div>

                    <div className='Interests-section'>
                        <h1 className='Interests-header'>Interests 🌈</h1>
                        <h2 className='Interests-body'>
                            Films | Jazz | Rock | Sufi | Poetry | Cooking | Photography
                        </h2>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main