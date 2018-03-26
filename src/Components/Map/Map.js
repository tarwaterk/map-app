import React, { Component } from 'react';
import './Map.css';

class Map extends Component {
    render() {
        return (
            <div className="Map">
                <iframe className="Map__embedded-map"
                        frameBorder="0" 
                        src="https://www.google.com/maps/embed/v1/place?q=salt%20lake%20city&key=AIzaSyBiSBc0fbnq7vd1Eda-NWnjYVosi5uuYos" 
                        allowFullScreen></iframe>
            </div>
        );
    }
}

export default Map;