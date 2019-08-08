import React from 'react';
import Info from './components/Info/info'
import Form from './components/Form/form'
import Weather from './components/Weather/weather'
import './App.css';

const API_KEY = '6ac4639c25cb1cb176cad731e6bc7a1e';

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
    }
    gettingWeather = async (e,error, info) => {
        e.preventDefault();
        var city = e.target.elements.city.value;
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();

        var sunset = data.sys.sunset;
        var date = new Date();
        date.setTime(sunset);
        var sunset_date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

        this.setState({
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            pressure: data.main.pressure,
            sunset: sunset_date,
        });
        console.log(data);
    }
    render() {
        return (
            <div>
                <div className='content'>
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className='col-sm-5 info'>
                                    <Info />
                                </div>
                                <div className='col-sm-7 form'>
                                    <Form weatherMethod={this.gettingWeather}/>
                                    <Weather {...this.state} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="area">
                    <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default App;
