import React, {Component} from "react";
import {Button, Text, View} from "react-native";

export default class RemoteAPIComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: '',
            temp: '',
            humidity: '',
            windSpeed: '',
        }
    }

    loadData = () => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Bern&lang=en&units=metric&APPID=your_key')
            .then(res => res.json())
            .then((r) => {
                this.setState({weather: "Weather: " + r.weather[0].description});
                this.setState({temp: "Temperature: " + r.main.temp + " °C"});
                this.setState({humidity: "Humidity: " + r.main.humidity + " %"});
                this.setState({windSpeed: "Wind Speed: " + r.wind.speed + " m/s"});
            })
            .catch((e) => console.log(e));
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                <Button title="Load data" onPress={this.loadData}/>
                <Text style={{padding: 15, fontWeight: 'bold'}}>Weather for Bern</Text>
                <Text style={{padding: 15}}>{this.state.weather}</Text>
                <Text style={{padding: 15}}>{this.state.temp}</Text>
                <Text style={{padding: 15}}>{this.state.humidity}</Text>
                <Text style={{padding: 15}}>{this.state.windSpeed}</Text>
            </View>
        );
    }
}
