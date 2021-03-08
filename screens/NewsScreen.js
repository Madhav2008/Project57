import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class NewsScreen extends Component {
    render(){
        return(
            <View style={StyleSheet.container}>
                <Text>WELCOME TO NEWS SCREEN</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        alignSelf:'center',
        marginTop:100,
    },
});