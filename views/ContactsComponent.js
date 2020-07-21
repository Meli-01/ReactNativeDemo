import React, {Component} from 'react';
import {Button, FlatList, PermissionsAndroid, Platform, Text, View} from 'react-native';
import Contacts from 'react-native-contacts';

export default class ContactsComponent extends Component {
    constructor() {
        super();
        this.state = {list: [{id: '0', name: 'no contacts loaded'}]}
    }

    requestPermissions = () => {
        if (Platform.OS === 'ios') {
            Contacts.checkPermission((err, permission) => {
                if (err) {
                    console.log(err);
                }
                if (permission === 'undefined') {
                    Contacts.requestPermission((err, permission) => {
                        if (err) {
                            console.log(err);
                        }
                        if (permission === 'authorized') {
                            this.loadContacts();
                        }
                        if (permission === "denied") {
                            console.log("Permission denied");
                        }
                    })
                }
                if (permission === 'authorized') {
                    this.loadContacts();
                }
                if (permission === 'denied') {
                    console.log('Permission denied');
                }
            })
        } else if (Platform.OS === 'android') {
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                {
                    'title': 'Contacts',
                    'message': 'This app would like to view your contacts.',
                    'buttonPositive': 'OK'
                }
            ).then(() => {
                this.loadContacts();
            })
        } else {
            console.log('Platform not supported');
        }
    }

    loadContacts() {
        Contacts.getAllWithoutPhotos((err, contacts) => {
            if (err === 'denied') {
                console.log('permission denied');
            } else {
                let list = [];
                contacts.forEach(item => list.push({id: item.recordID.toString(), name: item.givenName}));
                this.setState({list: list.sort(((a, b) => a.name > b.name))});
            }
        })
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                <View style={{paddingBottom: 10}}>
                    <Button title="Load Contacts" onPress={this.requestPermissions} color="green"/>
                </View>
                <FlatList
                    data={this.state.list}
                    renderItem={({item}) => <Item title={item.name}/>}
                    keyExtractor={item => item.id}/>
            </View>
        );
    }
}

// list item
function Item({title}) {
    return (
        <View style={{padding: 5, marginLeft: 10}}>
            <Text>{title}</Text>
        </View>
    );
}
