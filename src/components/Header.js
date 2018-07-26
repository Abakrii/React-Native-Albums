import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}> {this.props.headerText} </Text>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewStyle :{
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        justifyContent: 'center',
        height:60,
        paddingTop : 15,
        shadowColor:'#000',
        shadowOffset:{width: 0 , height:2},
        shadowOpacity:0.2,
        elevation:2,
        position:'relative',
    },
     textStyle :{
      fontSize: 20,
     }
});