import React from 'react';
import styled from 'styled-components';
import { ActivityIndicator } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: #282c34;
  align-items: center;
  justify-content: center;
`;

export default function AppLoading() {
  return (
    <Container>
      <ActivityIndicator size="large" />
    </Container>
  );
}
