import { Alert } from 'react-native';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { nome, email, ...rest } = payload.data;

    const profile = Object.assign(
      { nome, email },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Sucesso!', 'Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha na atualização',
      'Houve um erro na atualização do perfil, verifique seus dados!'
    );
    yield put(updateProfileFailure());
  }
}

export function* updateScoreProfile({ payload }) {
  try {
    const { email, score } = payload;

    const profile = Object.assign({ email, score });

    const response = yield call(api.put, 'users', profile);

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert('Erro inesperado!', 'Entre em contato com o responsável!');
    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/UPDATE_SCORE_USER_REQUEST', updateScoreProfile),
]);
