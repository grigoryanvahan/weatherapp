import React from 'react';

const Weather = props => (
        <div>
            { props.city &&
            <div className='infoWeath'>
                <p>Местоположение: {props.city}, {props.country}</p>
                <p>Температура: {props.temp}</p>
                <p>Давление: {props.pressure}</p>
                <p>Восход солнца: {props.sunset}</p>
            </div>
            }
        </div>
    )

export default Weather;