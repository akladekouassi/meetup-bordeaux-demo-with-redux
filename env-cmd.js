const apiUrlRecette = 'https://bo.recette.keyops.tech/api';
const apiUrlProd = 'https://bo.keyops.tech/api';

const REACT_APP_FAKE_API_URL_LOCAL = 'http://localhost:8080';
const REACT_APP_FAKE_API_URL_PROD = 'https://kotscan-manager-fake-server.appspot.com';

const recetteBaseConfig = {
  REACT_APP_KOTSCAN_API_URL_NO_SLASH: apiUrlRecette,
  REACT_APP_KOTSCAN_API_URL: `${apiUrlRecette}/`,
  REACT_APP_KOTSCAN_ENVIRONMENT_ICON: 'favicon-recette',
  REACT_APP_KOTSCAN_ENVIRONMENT_LOGO: 'kotscan-recette',
};

const testingBaseConfig = {
  CYPRESS_apiUrl: apiUrlRecette,
  CYPRESS_defaultUserName: 'test_cypress@formation_car.fr',
  CYPRESS_defaultPassword: 'password',
  CYPRESS_invalidLoginPhoneNumber: '+2250787000000',
  CYPRESS_validLoginPhoneNumber: '+2250787101010',
  CYPRESS_invalidOTPCode: '2222',
  CYPRESS_validOTPCode: '1111',
};

module.exports = Promise.resolve({
  local_start: {
    ...recetteBaseConfig,
    REACT_APP_FAKE_API_URL: REACT_APP_FAKE_API_URL_LOCAL,
  },
  recette: {
    ...recetteBaseConfig,
    REACT_APP_FAKE_API_URL: REACT_APP_FAKE_API_URL_PROD,
  },
  staging: {
    ...recetteBaseConfig,
    REACT_APP_FAKE_API_URL: REACT_APP_FAKE_API_URL_PROD,
  },
  production: {
    REACT_APP_KOTSCAN_API_URL_NO_SLASH: apiUrlProd,
    REACT_APP_KOTSCAN_API_URL: `${apiUrlProd}/`,
    REACT_APP_KOTSCAN_ENVIRONMENT_ICON: 'favicon',
    REACT_APP_KOTSCAN_ENVIRONMENT_LOGO: 'kotscan',
    REACT_APP_FAKE_API_URL: REACT_APP_FAKE_API_URL_PROD,
  },
  testing_ci_local: {
    ...testingBaseConfig,
    REACT_APP_FAKE_API_URL: REACT_APP_FAKE_API_URL_LOCAL,
  },
});
