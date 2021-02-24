import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { routerMiddleware } from 'connected-react-router';
import reduxFreeze from 'redux-freeze';
import { rootReducer } from '../rootReducer/index';
import { History } from 'history';
interface InitialState {}

const rootStore = (initialState: InitialState, history: History): Store<any> => {
  const middleware: any = [process.env.NODE_ENV === 'development' ? reduxFreeze : null, thunk, routerMiddleware(history)].filter(Boolean);
  // console.log('MIDDLWARE', middleware);
  const store = createStore(rootReducer(history), initialState, composeWithDevTools(applyMiddleware(...middleware)));
  // store.subscribe(() => console.log('STORE', store.getState()));

  return store;
};

export default rootStore;
