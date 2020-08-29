import React, { Component, useEffect } from 'react';
import {View, Text} from 'react-native';

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=> {
            navigation.replace('Home')
        }, 2000)
    })

    return (
        <View>
            <Text>Splash Screen</Text>
        </View>
    )

}

export default Splash