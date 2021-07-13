import React, { useContext, useEffect } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { ChannelList, MyChannelList, Profile } from '../screens';
import { MaterialIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const TabBarIcons = ({ focused, name}) => {
    return (
        <MaterialIcons
        name={name}
        size={26}
        color={'#000000'} />
    )
}

const MainTab = ({ navigation, route }) => {

    useEffect(() => {
        const titles = route.state?.routeNames || ['Channles'];
        const index = route.state?.index || 0;
        navigation.setOptions({ headerTitle: titles[index]});
    }, [route])

    return(
        <Tab.Navigator
        initialRouteName=""
        tabBarOptions={{ labelPosition: 'beside-icon', showLabel: false}}>
            <Tab.Screen name="Channels" component={ChannelList} 
            options={{ tabBarIcon: ({focused}) => 
            TabBarIcons({
                focused,
                name: 'speaker-notes'}), }}/>
            <Tab.Screen name="MyChannelList" component={MyChannelList}
            options={{ tabBarIcon: ({focused}) => 
            TabBarIcons({
                focused,
                name: 'forum'}),}}/>
            <Tab.Screen name="Profile" component={Profile}
            options={{ tabBarIcon: ({focused}) => 
            TabBarIcons({
                focused,
                name: 'face-retouching-natural'}),}}/>
        </Tab.Navigator>
    );
};

export default MainTab;