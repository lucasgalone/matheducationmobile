import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';

import { Container, Left, Avatar, Info, Name } from './styles';

import { setIdTipoContaRequest } from '../../store/modules/atividade/actions';

export default function Conta(obj) {
  const dispatch = useDispatch();

  function handlesetTipoConta() {
    dispatch(setIdTipoContaRequest(obj.data.item.id));
    obj.data.navigation.navigate('Atividade');
  }
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

      <TouchableOpacity onPress={handlesetTipoConta}>
        <Icon name="create" size={20} color="#f64c75" />
      </TouchableOpacity>
    </Container>
  );
}
