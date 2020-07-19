import React, {Component} from "react";
import {Button, Image, View} from "react-native";
import ImagePicker from 'react-native-image-picker';

export default class CameraGalleryComponent extends Component {
    constructor() {
        super();
        this.state = {imageSource: ''}
    }

    openImagePicker = () => {
        const options = {
            title: 'Select Photo',
            allowsEditing: false,
            maxWidth: 400,
            maxHeight: 400,
        };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = {uri: response.uri};
                this.setState({imageSource: {uri: response.uri}});
            }
        });
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                <View style={{paddingBottom: 20}}>
                    <Button title="Open Camera or Gallery" onPress={this.openImagePicker}/>
                </View>
                <View style={{alignItems: "center"}}>
                    <Image
                        source={this.state.imageSource}
                        resizeMode="contain"
                        style={{width: 300, height: 300,}}/>
                </View>
            </View>
        );
    }
}
