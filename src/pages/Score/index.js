import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import Background from '../../componenets/Background';
import { Container, Title, Pontos, Numero } from './styles';

export default function Score() {
  const profile = useSelector(state => state.user.profile);
  const [score, setScore] = useState([]);

  useEffect(() => {
    async function loadContas() {
      const response = await api.get(`users/${profile.id}`);
      setScore(response.data.score);
    }
    loadContas();
  }, []);

  return (
    <Background>
      <Title>Score</Title>
      <Numero>{score}</Numero>
      <Container></Container>
    </Background>
  );
}

Score.navigationOptions = {
  tabBarLabel: 'Score',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="check" size={20} color={tintColor} />
  ),
};
