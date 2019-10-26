import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateScoreUserRequest } from '../../store/modules/user/actions';

import { Container, RespostaList, Nivel, Resposta, Name } from './styles';
import Background from '../../componenets/Background';
import api from '../../services/api';

export default function Atividade({ navigation }) {
  const dispatch = useDispatch();
  const idtipoconta = useSelector(state => state.atividade.idtipoconta);
  const profile = useSelector(state => state.user.profile);

  const [listAtividades, setListAtividades] = useState([]);
  const [atividades, setAtividades] = useState({});
  const [idnivel, setIdNivel] = useState(2);
  useEffect(() => {
    async function loadAtividades() {
      const response = await api.get(`atividades/${idtipoconta}`);
      setAtividades(response.data.filter(x => x.nivel == 1)[0]);
      setListAtividades(response.data);
    }

    loadAtividades();
  }, []);

  function handleConfirmRes(result) {
    if (atividades.resposta == result) {
      dispatch(updateScoreUserRequest(profile.email, idnivel - 1));
      if (idnivel <= 3) {
        setAtividades(listAtividades.filter(x => x.nivel == idnivel)[0]);
        Alert.alert('Parabéns você acertou!');
        setIdNivel(idnivel + 1);
      } else {
        navigation.navigate('Dashboard');
        Alert.alert('Fim do game!');
      }
    } else {
      if (idnivel <= 3) {
        setIdNivel(idnivel + 1);
        setAtividades(listAtividades.filter(x => x.nivel == idnivel)[0]);
        Alert.alert(
          `Que pena você errou! A resposta correta é ${atividades.resposta}`
        );
      } else {
        navigation.navigate('Dashboard');
        Alert.alert('Fim do game!');
      }
    }
  }

  return (
    <Background>
      <Container>
        <Nivel>Nivel: {idnivel - 1}</Nivel>
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
