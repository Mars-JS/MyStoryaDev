import React from 'react';

const Landing = () => {
    return (
        <div>MyStorya</div>,
        <div style={{ textAlign: 'center'}}>
            <img src={require('./img/splashPage.png')} alt="MyStorya.com" />
            <div
                className="fb-like"
                data-share="true"
                data-width="450"
                data-show-faces="true">
            </div>
        </div>
    );
};

export default Landing;
