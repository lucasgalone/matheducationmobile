import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Conta(obj) {
  return (
    <Container>
      <Left>
        <Avatar
          source={{
            uri: `https://api.adorable.io/avatar/50/${obj.data.item.conta}.png`,
          }}
        />
        <Info>
          <Name>{obj.data.item.conta}</Name>
        </Info>
      </Left>

      <TouchableOpacity
        onPress={() => obj.data.navigation.navigate('Atividade')}
      >
        <Icon name="create" size={20} color="#f64c75" />
      </TouchableOpacity>
    </Container>
  );
}
