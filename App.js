import React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
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
                    color="green"
                />
            </View>
            <View style={{paddingBottom: 20}}>
                <Button
                    title="Camera and Gallery"
                    onPress={() => navigation.navigate('Camera')}
                    color="green"
                />
            </View>
            <View style={{paddingBottom: 20}}>
                <Button
                    title="Contacts"
                    onPress={() => navigation.navigate('Contacts')}
                    color="green"
                />
            </View>
            <View>
                <Button
                    title="Remote API Request"
                    onPress={() => navigation.navigate('API')}
                    color="green"
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

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'green',
    },
};

const Drawer = createDrawerNavigator();

const App: () => React$Node = () => {
    return (
        <>
            <NavigationContainer theme={MyTheme}>
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
