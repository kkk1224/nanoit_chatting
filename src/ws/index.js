import React, {useCallback, useEffect} from 'react';
import {StoreContext} from "../context/storeContext";
import useWebSocket, {ReadyState} from "react-native-use-websocket";


export const InitializeWebsocket = () => {
    const {state, actions} = React.useContext(StoreContext)

    // ws://localhost:8081/api/v1/ws
    const {sendMessage, lastMessage, readyState, getWebSocket} = useWebSocket("ws://172.30.1.14:8081/api/v1/ws", { // connection testURL =>  wss://echo.websocket.org
        shouldReconnect: (closeEvent) => true,
        reconnectAttempts: 10,
        reconnectInterval: 5000,
    });

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];

/* 회원가입 통신 테스트 => 성공
    useEffect(() => {
        setTimeout(() => {
            sendMessage(
                JSON.stringify(AuthSignup('daehyun', 'emailemail@com', 'asdfzxcv!@'))
            );
        }, 3000)
    }, []);
*/
    useEffect(() => {
        if (!lastMessage) {
            const jsonData = lastMessage.data
            console.log( jsonData );
        }
    }, [lastMessage])

    useEffect(() => {
        if (connectionStatus === 'Open') {
            console.log('opened');
        }else{
            console.log('is open ?');
        }
    }, [connectionStatus])

    const handleWebsocketClose = useCallback(() => {
        getWebSocket().close()
    }, []);


    return {sendMessage, lastMessage, readyState, getWebSocket, handleWebsocketClose}
}