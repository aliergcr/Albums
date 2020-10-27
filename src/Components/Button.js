import React from 'react'
import { Text, StyleSheet, TouchableOpacity, Linking  } from 'react-native'

const Button =({url})=> {
        return (
            <TouchableOpacity 
                style={styles.buttonStyle} 
                onPress={()=>Linking.openURL(url)  }
            >
                <Text style={styles.textStyle} > Buy Now</Text>
            </TouchableOpacity >
        )
}


const styles = StyleSheet.create({
    textStyle:{
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '400',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle:{
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        
    }
})

export default Button;