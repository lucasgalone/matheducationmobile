import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Nivel = styled.Text`
  margin-top: 15px;
  font-size: 25px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

export default Descricao = styled.Text`
  margin-top: 60px;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
`;

export const RespostaList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-top: 75;
  padding: 0 20px;
`;

export const Resposta = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  padding: 30px;
  flex: 1;

  align-items: center;
  margin: 0 15px 15px;
`;

export const Name = styled.Text`
  margin-top: 15px;
  font-size: 30px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;
