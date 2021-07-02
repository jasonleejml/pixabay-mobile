import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ImageList from '../screens/ImageList/ImageList';
import SavedImages from '../screens/SavedImages/SavedImages';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'black',
                labelStyle: {
                    fontSize: 13
                },
                showLabel: false
            }}
        >
            {/* This is the tab on the bottom navbar to navigate to the imageList screen. */}
            <Tab.Screen
                name={'Home'}
                component={ImageList}
                options={{
                    tabBarIcon: ({color}) => (
                        <Fontisto name="home" size={25} color={color} />
                    ),
                }}
            />

            {/* This is the tab on the bottom navbar to navigate to the SavedImages screen */}
            <Tab.Screen
                name={'Saved Images'}
                component={SavedImages}
                options={{
                    tabBarIcon: ({color}) => (
                        <Fontisto name="heart" size={25} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigator
