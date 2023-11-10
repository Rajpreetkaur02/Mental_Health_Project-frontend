import React, { useEffect, useState } from 'react';
import '../styles/Map.css';

function Map() {
    const [mapShown, setMapShown] = useState(false);
    useEffect(() => {
        getClientLocation();
    })

    function getClientLocation(){
        navigator.permissions.query({ name: "geolocation" })
        .then((result) => {
            if (result.state === "granted" || result.state === "prompt") {
                console.log(result.state);
                displayMap();
            } else if (result.state === "denied") {
                console.log(result.state);
            }
        });
    }
      
    function displayMap(){
        const mapFrame = document.querySelector(".map iframe");
        if (!mapFrame || (mapFrame && mapFrame.getAttribute("src") === "")) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
                const mapUrl = "http://www.google.com/maps?q=psychiatrist+near+me/" + position.coords.latitude + "," + position.coords.longitude + "&z=13&output=embed";
                if (mapFrame) {
                    mapFrame.setAttribute("src", mapUrl);
                    setMapShown(true);
                }
            });
        } else {
            if (mapFrame) {
                setMapShown(!mapShown);
            }
        }
    }
    
    return (
        <div>
            <div class="map">
                <h3 id="map-text">Find psychiatrists in your area</h3>
                <iframe
                    title="Google Map"
                    width="1000"
                    height="450"
                    src=""
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}

export default Map