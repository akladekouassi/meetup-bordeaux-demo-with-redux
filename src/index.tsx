import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { createBrowserHistory } from 'history';
import { History } from 'history';
import rootStore from './redux/rootStore/index';
import App from './App';
import environments from './environments/base';

interface AppStoreInitialState {}

(async () => {
  const initialState: AppStoreInitialState = {};
  const history: History = createBrowserHistory({ basename: environments()?.route.baseRoute! });
  const store: Store<any> = rootStore(initialState, history);
  const rootEl = document.getElementById('root');
  const render = (Component: any, el: any) => {
    ReactDOM.render(
      <Provider store={store}>
        <Component history={history} dispatch={store.dispatch} />
      </Provider>,
      el
    );
  };

  render(App, rootEl);
})();
