import {
  GRANT_TYPE,
  SCOPE,
  AUTH_ENDPOINT,
} from 'constants/env';

export default async () => {
  try {
    const { access_token: accessToken } = await (await fetch(AUTH_ENDPOINT, {
      method: 'POST',
      headers: {
        'grant_type': GRANT_TYPE,
        'scope': SCOPE,
      }
    })).json();

    return accessToken;
  } catch (error) {
    return null;
  }
};