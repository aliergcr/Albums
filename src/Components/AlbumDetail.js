import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';



const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <View style = {styles.thumbnailContainerstyle}>
                    <Image
                        source={{ uri: props.album.image }}
                        style={styles.thumbnailStyle}
                    />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.te} >{props.album.title}</Text>
                    <Text>{props.album.artist}</Text>

                </View>

            </CardSection>
            <CardSection>
                <Image 
                    style={styles.imageStyle}
                    source= {{uri: props.album.image}} />
            </CardSection>
            <CardSection>
                <Button url={props.album.url}/>
                   
            </CardSection>

        </Card>
    )
}


const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle:{
        fontSize: 18,
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    thumbnailContainerstyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    imageStyle:{
        height: 300,
        flex:1,
        width: null
    }
});

export default AlbumDetail;