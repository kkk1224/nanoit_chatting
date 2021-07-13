import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import StackNavigation from './MainStack';

const Navigation = () => {

    return (
        <NavigationContainer>
         <AuthStack />
        </NavigationContainer>
    );
};

export default Navigation;