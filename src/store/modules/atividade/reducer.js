import produce from 'immer';

const INITIAL_STATE = {
  idtipoconta: undefined,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@atividade/SET_ID_TIPO_CONTA': {
        draft.idtipoconta = action.payload.idtipoconta;
        break;
      }
      default:
    }
  });
}
