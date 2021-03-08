import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableOpacity,
   Header,
   Image,
 } from 'react-native';

import AppHeader from'../components/AppHeader';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <AppHeader/>
      <View>

      <View style={styles.buttonContainer}>
    
      <TouchableOpacity
        style={[styles.buttons,{backgroundColor:"red"}]}
        onPress={()=>
        this.props.navigation.navigate('JokeScreen')}>
        <Text>Read a Joke</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttons,{backgroundColor:"magenta"}]}
        onPress={()=>
        this.props.navigation.navigate('HoroScopeScreen')}>
        <Text>Horoscope</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttons,{backgroundColor:"silver"}]}
        onPress={()=>
        this.props.navigation.navigate('Weather')}>
        <Text>Weather</Text>
      </TouchableOpacity>

     <TouchableOpacity
        style={[styles.buttons,{backgroundColor:"orange"}]}
        onPress={()=>
        this.props.navigation.navigate('NewsScreen')}>
        <Text>Top News</Text>
      </TouchableOpacity>

      </View>

      <View style={styles.ratingContainer}>
        <Text style={{ textAlign: 'center', margin:5
}}>Rate Us</Text>
             <TouchableOpacity>
             <Image
              style={{ width:50 ,height: 50,
marginLeft: 5}}
               source={require('../assets/thumbsup.png')}
               />
               </TouchableOpacity>
               <TouchableOpacity>
                 <Image
                 style={{
                   width:50,
                   height:50,
                   marginTop:-35,
                   marginLeft:100,
                 }}
                 source={require('../assets/thumbsdown.png')}
                 />
               </TouchableOpacity>
               </View>
               </View>
               </View>
      );
   }
 }
 const styles = StyleSheet.create({
   buttonContainer:{
     alignSelf:'center',
     marginTop:50,
   },
   buttons:{
     textAlign:'center',
     justifyContent:'center',
     borderWidth:2,
     borderRadius:15,
     margin:40,
     width:200,
     height:50,
   },
   ratingContainer:{
     alignSelf:'center',
     marginTop:50,
   },
 });