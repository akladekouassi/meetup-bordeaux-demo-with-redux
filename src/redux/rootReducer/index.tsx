import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { RouterState } from 'connected-react-router';

interface reducerMapType {
  router: any;
}

export const rootReducer = (history: History) => {
  const reducerMap: reducerMapType = {
    router: connectRouter(history),
  };
  return combineReducers(reducerMap);
};
