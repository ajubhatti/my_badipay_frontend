
import React, { useEffect, useState } from 'react';

const GeolocationPage = () => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);

    useEffect(() => {
        getLocation()
    }, [])

    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            setStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null);
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
                fetchLocationName(position.coords.latitude, position.coords.longitude)
                getAddress(position.coords.latitude, position.coords.longitude).then(res =>
                    console.log(res)
                ).catch(
                    console.error
                );
            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }

    function getAddress(latitude, longitude) {
        return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();

            var method = 'GET';
            var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&sensor=true';
            var async = true;

            request.open(method, url, async);
            request.onreadystatechange = function () {
                if (request.readyState == 4) {
                    if (request.status == 200) {
                        var data = JSON.parse(request.responseText);
                        console.log("address ---", data)
                        var address = data.results[0];
                        resolve(address);

                    }
                    else {
                        reject(request.status);
                    }
                }
            };
            request.send();
        });
    };

    const fetchLocationName = async (lat, lng) => {
        await fetch(
            'https://www.mapquestapi.com/geocoding/v1/reverse?key=API-Key&location=' + lat + '%2C' + lng + '&outFormat=json&thumbMaps=false',
        )
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(
                    'ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson),
                );
            });
    };

    return (
        <div className="App">
            <h1>Coordinates</h1>
            <p>{status}</p>
            {lat && <p>Latitude: {lat}</p>}
            {lng && <p>Longitude: {lng}</p>}
        </div>
    );
}

export default GeolocationPage;