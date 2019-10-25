import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { Container, RespostaList, Resposta, Name } from './styles';
import Background from '../../componenets/Background';
import api from '../../services/api';

export default function Atividade({ navigation }) {
  const idtipoconta = useSelector(state => state.atividade.idtipoconta);
  const [listAtividades, setListAtividades] = useState([]);
  const [atividades, setAtividades] = useState({});
  const [idnivel, setIdNivel] = useState(1);

  useEffect(() => {
    async function loadAtividades() {
      const response = await api.get(`atividades/${idtipoconta}`);
      setAtividades(response.data.filter(x => x.nivel == idnivel)[0]);
      setIdNivel(idnivel + 1);
      setListAtividades(response.data);
    }

    loadAtividades();
  }, []);

  function handleConfirmRes(result) {
    if (atividades.resposta == result) {
      setIdNivel(idnivel + 1);
      if (idnivel <= 3) {
        setAtividades(listAtividades.filter(x => x.nivel == idnivel)[0]);
        Alert.alert('Parabéns você acertou!');
      } else {
        Alert.alert('FIM DE JOGO');
        navigation.navigate('Dashboard');
      }
    } else {
      Alert.alert(
        `Que pena você errou! A resposta correta é ${atividades.resposta}`
      );
    }
  }

  return (
    <Background>
      <Container>
        <Descricao>{atividades.descricao}</Descricao>
        <RespostaList
          data={atividades.respostas}
          keyExtractor={atividade => String(atividade)}
          renderItem={({ item }) => (
            <Resposta onPress={() => handleConfirmRes(String(item))}>
              <Name>{item}</Name>
            </Resposta>
          )}
        />
      </Container>
    </Background>
  );
}

Atividade.navigationOptions = ({ navigation }) => ({
  title: `Exercicio`,
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}
    >
      <Icon name="chevron-left" size={20} color="#FFF" />
    </TouchableOpacity>
  ),
});
