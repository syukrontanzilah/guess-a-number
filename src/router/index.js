import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Home } from '../pages'

const Stack = createStackNavigator()

const Router = () => {
    return (
        <Stack.Navigator
            headerMode="none"
            initialRouteName='Splash'>

            <Stack.Screen
                name='Splash'
                component={Splash} />
            <Stack.Screen
                name='Home'
                component={Home} />


        </Stack.Navigator>
    )
}

export default Router;
