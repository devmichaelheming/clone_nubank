import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Main from './pages/Main'

const Stack = createNativeStackNavigator();

export default function routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">

                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{
                        headerShown: false,
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
