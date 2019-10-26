export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_FAILURE_REQUEST',
  };
}

export function updateScoreUserRequest(email, score) {
  return {
    type: '@user/UPDATE_SCORE_USER_REQUEST',
    payload: { email, score },
  };
}
