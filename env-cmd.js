const REACT_APP_FAKE_API_URL_LOCAL = 'http://localhost:8080';
const REACT_APP_FAKE_API_URL_PROD = 'https://kotscan-manager-fake-server.appspot.com';

module.exports = Promise.resolve({
  local_start: {
    REACT_APP_FAKE_API_URL: REACT_APP_FAKE_API_URL_LOCAL,
  },
  recette: {
    REACT_APP_FAKE_API_URL: REACT_APP_FAKE_API_URL_PROD,
  },
  staging: {
    REACT_APP_FAKE_API_URL: REACT_APP_FAKE_API_URL_PROD,
  },
  production: {
    REACT_APP_FAKE_API_URL: REACT_APP_FAKE_API_URL_PROD,
  },
  testing_ci_local: {
    REACT_APP_FAKE_API_URL: REACT_APP_FAKE_API_URL_LOCAL,
  },
});
