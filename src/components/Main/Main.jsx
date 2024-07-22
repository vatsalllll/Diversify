import React from 'react';
import './Main.css';

const Main = () => {
    return (
        <div className="main">
            <div className='hero'>
                <h1>Cross-Platform <span className='highlight'>Content</span> Diversification Tool</h1>
                <h2>Bridge Platforms Seamlessly. Empower Your Presence Everywhere.</h2>
                <div className="buttons">
                    <button className='convertbutton'>Convert &#128260;</button>
                    <h4>or</h4>
                    <button className='startwrittingbutton'>Start Writting &#9999;&#65039;</button>
                </div>
                <div className="herofooter">
                    <h4>View <a href="/">Compatible Platforms &#8594;</a></h4>
                </div>
            </div>
        </div>
    );
}

export default Main;