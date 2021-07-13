import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, Button } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  align-items: center;

`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const Home = ({navigation}) => {
    return (
        <Container>
            <StyledText></StyledText>
        </Container>
    );
};

export default Home;