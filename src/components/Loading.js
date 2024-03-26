import React from 'react';
import LoadingAnimation from 'react-simple-loading';

import "./Loading.css"

const Loading = () => {
    return (
        <div className="loadingScreen">
            <LoadingAnimation color="#ffffff"/>
        </div>
    );
};

export default Loading;
