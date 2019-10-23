import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '../../componenets/Input';
import Button from '../../componenets/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS == 'android',
  bahavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;
