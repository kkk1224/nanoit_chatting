import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ChannelCreation, ChannelList,  Profile } from '../screens';
import MainTab from './MainTab'


const Stack = createStackNavigator();


const StackNavigation = () => {
    return (
      <Stack.Navigator
      initialRouteName="Main"
        screenOptions={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen name="Main" component={MainTab}/>
        <Stack.Screen name="ChannelCreation" component={ChannelCreation} />
        <Stack.Screen name="ChannelList" component={ChannelList} />
    </Stack.Navigator>
    )
};

export default StackNavigation;
