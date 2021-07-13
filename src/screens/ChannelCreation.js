import React from 'react';
import styled from 'styled-components/native';
import { Text, Button } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

const Container = styled.View`
  align-items: center;

`;

const ChannelCreation = ({ navigation }) => {
    return (
        <Container>
            <Text style={{ fontSize: 24}} >Chanel Creation</Text>
            <Button title="Channel" onPress={()=> navigation.navigate('ChannelList')} />
        </Container>
    );

};




export default ChannelCreation;
