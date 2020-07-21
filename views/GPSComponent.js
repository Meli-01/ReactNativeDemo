import React, {Component} from "react";
import {Button, Text, View} from "react-native";
import Geolocation from "@react-native-community/geolocation";

export default class GPSComponent extends Component {
    constructor() {
        super();
        this.state = {labelText: 'no location'}
    }

    loadData = () => {
        Geolocation.getCurrentPosition(info => this.setState({labelText: 'Latitude: ' + info.coords.latitude + '\nLongitude: ' + info.coords.longitude}),
            error => this.setState({labelText: error.message}),
            {timeout: 3000});
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: "column", justifyContent: "center"}}>
                <Button
                    title="Load GPS Data"
                    onPress={this.loadData}
                    color="green"
                />
                <Text style={{marginTop: 10, textAlign: "center"}}>{this.state.labelText}</Text>
            </View>
        );
    }
}
