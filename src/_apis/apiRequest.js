import axios from 'axios';

import { getAccessToken } from '../_utils/cookieHelper';
import configuration from './configuration';

const instance = axios.create({
  baseURL: encodeURI(configuration.apiUrl),
  timeout: 10000,
  withCredentials: true
});

export const getAuth = (url) => {
  const accessToken = getAccessToken();

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  };

  return new Promise((resolve, reject) => {
    instance
      .get(url, config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
        // redirectToErrorPage(getHistory(), error);
      });
  });
};

export const postAuth = (url, body, config) => {
  const accessToken = getAccessToken();

  const configResult = config || {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  };

  return new Promise((resolve, reject) => {
    instance
      .post(url, body, configResult)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
        // redirectToErrorPage(getHistory(), error);
      });
  });
};

export const putAuth = (url, body) => {
  const accessToken = getAccessToken();

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  };

  return new Promise((resolve, reject) => {
    instance
      .put(url, body, config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
        // redirectToErrorPage(getHistory(), error);
      });
  });
};

export const patchAuth = (url, body) => {
  const accessToken = getAccessToken();

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  };

  return new Promise((resolve, reject) => {
    instance
      .patch(url, body, config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
        // redirectToErrorPage(getHistory(), error);
      });
  });
};

export const deleteAuth = (url) => {
  const accessToken = getAccessToken();

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  };

  return new Promise((resolve, reject) => {
    instance
      .delete(url, config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
        // redirectToErrorPage(getHistory(), error);
      });
  });
};

export const get = (url) =>
  new Promise((resolve, reject) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    instance
      .get(url, config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
        // redirectToErrorPage(getHistory(), error);
      });
  });

export const post = (url, body) =>
  new Promise((resolve, reject) => {
    instance
      .post(url, body)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
        // redirectToErrorPage(getHistory(), error);
      });
  });

export const patch = (url, body) =>
  new Promise((resolve, reject) => {
    instance
      .patch(url, body)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
        // redirectToErrorPage(getHistory(), error);
      });
  });

// const redirectToErrorPage = (history: THistory, error) => {
//     errorLog(error);
//   if (error.response === null || error.response === undefined) {
//     history.push('/login/SERVER_OFF');
//   } else if (error.response.status === statusCode.error.unauth) {
//     history.push('/login/AUTH_INVALID');
//   } else if (error.response.status === statusCode.error.destroyed_user_error) {
//     history.push('/login/USER_DESTROYED');
//   }
// };
