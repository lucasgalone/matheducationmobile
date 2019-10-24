import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointment() {
  return (
    <Container>
      <Left>
        <Avatar
          source={{ uri: 'https://api.adorable.io/avatar50/rocketseat.png' }}
        />

        <Info>
          <Name>Lucas Vinicius Galone</Name>
          <Time>Em 3 horas</Time>
        </Info>
      </Left>

      <TouchableOpacity onPress={() => {}}>
        <Icon name="create" size={20} color="#f64c75" />
      </TouchableOpacity>
    </Container>
  );
}
