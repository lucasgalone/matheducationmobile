import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../componenets/Background';
import Appointment from '../../componenets/Appointment';

import { Container, Title, List } from './styles';

const data = [1, 2, 3, 4, 5];

export default function Dashboard() {
  return (
    <Background>
      <Container>
        <Title>Atividades</Title>
        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Appointment data={item} />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Atividades',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="list" size={20} color={tintColor} />
  ),
};
