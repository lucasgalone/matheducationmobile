import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import Background from '../../componenets/Background';
import Conta from '../../componenets/Conta';

import { Container, Title, List } from './styles';

export default function Dashboard({ navigation }) {
  const profile = useSelector(state => state.user.profile);
  const [contas, setContas] = useState([]);
  useEffect(() => {
    async function loadContas() {
      const response = await api.get(`contaturma/${profile.id}`);
      setContas(response.data);
    }
    loadContas();
  }, []);

  return (
    <Background>
      <Container>
        <Title>Atividades</Title>
        <List
          data={contas}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Conta data={{ item, navigation }} />}
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
