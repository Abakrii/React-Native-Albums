import React from 'react';
import {View ,Text} from 'react-native';
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";
console.disableYellowBox = true;
export default class App extends React.Component {
    render() {
        return (
            <View style={{flex:1}}>
            <Header headerText={'Albums'}/>
            <AlbumList/>
            </View>
        );
    }
}