import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import BottomNavigator from './BottomNavigator';
import ImageDetail from '../screens/ImageDetail/ImageDetail';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* This is to navigate to the HomeScreen screen. */}
                <Stack.Screen 
                    name={"Home Page"}
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />

                {/* This is to navigate to the ImageList screen */}
                <Stack.Screen 
                    name={"Image List"}
                    component={BottomNavigator}
                    options={{
                        headerShown: false,
                    }}
                />

                {/* This is to navigate to the ImageDetail screen */}
                <Stack.Screen 
                    name={"Image Detail"}
                    component={ImageDetail}
                    options={{
                        headerTitle: '',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;