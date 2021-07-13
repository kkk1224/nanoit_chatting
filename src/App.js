import React, { useContext } from "react";
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { StoreProvider } from './context/storeContext'
import { InitializeWebsocket } from "./ws";
import StackNavigation from "./navigations/MainStack";
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigations';
import ActionButton from "react-native-action-button";
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from "react-native";
import { render } from "react-dom";


/**
 * StoreProvider = Store를 최상위에 등록함.
 * contextAPI 라는 이름 그대로 상태(state)를 API처럼 전역 어디서든 쓸 수 있게 한다.
 * 
 * components폴더에서 실제사용법 확인하면 됨.
 */

export const WebsocketContext = React.createContext({
    handleWebsocketClose: () => { }
})


export default function App() {

    const { handleWebsocketClose } = InitializeWebsocket()
    const value = React.useMemo(() => ({ handleWebsocketClose }), [handleWebsocketClose])

    return (
        <>
            <StatusBar style="auto" />
            <WebsocketContext.Provider value={value}>
                <StoreProvider>
                    <Container>
                        <Navigation />
                    </Container>
                </StoreProvider>
            </WebsocketContext.Provider>
        </>
    );
}




/*********************************************************
* styling
*********************************************************/

const Container = styled.View`
  flex: 1;;
  background-color: #f5fcff;
`;

/*버튼 스타일 */
const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});