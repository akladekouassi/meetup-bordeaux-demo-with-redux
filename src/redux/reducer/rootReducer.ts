import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import EmployerReducer from '../reducer/Employer.reducer';

export interface ReducerMapType {
  router: any;
  Employers: any;
}

export const rootReducer = (history: History): any => {
  const reducerMap: ReducerMapType = {
    router: connectRouter(history),
    Employers: EmployerReducer,
  };
  return combineReducers(reducerMap);
};
