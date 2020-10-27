import React, { Component } from 'react';
import { View, Text,StyleSheet,Dimensions  } from 'react-native';

var width = Dimensions.get('window').width;
export default class Header extends Component {
  
  render() {
    return (
      <View style={styles.headerStyle} >
        <Text style={styles.textStyle}> Albums </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    headerStyle:{
      
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8F8F8',
        height: 60,
        width:width,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {width:0, height:2},
        shadowOpacity: 0.3,
        elevation:2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color: 'blue'
      },
})