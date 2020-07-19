import React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from '@react-navigation/drawer';
import GPSComponent from "./views/GPSComponent";
import CameraGalleryComponent from "./views/CameraGalleryComponent";
import ContactsComponent from "./views/ContactsComponent";
import RemoteAPIComponent from "./views/RemoteAPIComponent";

function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, flexDirection: 'column', justifyContent: "center"}}>
            <View style={{paddingBottom: 20}}>
                <Button
                    title="GPS"
                    onPress={() => navigation.navigate('GPS')}
                />
            </View>
            <View style={{paddingBottom: 20}}>
                <Button
                    title="Camera and Gallery"
                    onPress={() => navigation.navigate('Camera')}
                />
            </View>
            <View style={{paddingBottom: 20}}>
                <Button
                    title="Contacts"
                    onPress={() => navigation.navigate('Contacts')}
                />
            </View>
            <View>
                <Button
                    title="Remote API Request"
                    onPress={() => navigation.navigate('API')}
                />
            </View>
        </View>
    );
}

function GPSScreen() {
    return (<GPSComponent/>);
}

function CameraScreen() {
    return <CameraGalleryComponent/>;
}

function ContactsScreen() {
    return <ContactsComponent/>;
}

function APIScreen() {
    return <RemoteAPIComponent/>;
}

const Drawer = createDrawerNavigator();

const App: () => React$Node = () => {
    return (
        <>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeScreen} />
                    <Drawer.Screen name="GPS" component={GPSScreen}/>
                    <Drawer.Screen name="Camera" component={CameraScreen}/>
                    <Drawer.Screen name="Contacts" component={ContactsScreen}/>
                    <Drawer.Screen name="API" component={APIScreen}/>
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    );
};

export default App;
