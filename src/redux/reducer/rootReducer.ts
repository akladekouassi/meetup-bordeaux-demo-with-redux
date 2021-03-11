import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import UserReducer from '../reducer/Employer.reducer';
import { EmployerData } from '../reducer/Employer.reducer';

export interface ReducerMapType {
  router: any;
  Employers: any;
}

export const rootReducer = (history: History) => {
  const reducerMap: ReducerMapType = {
    router: connectRouter(history),
    Employers: UserReducer,
  };
  return combineReducers(reducerMap);
};
