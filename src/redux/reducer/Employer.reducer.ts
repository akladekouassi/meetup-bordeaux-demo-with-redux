import { combineReducers } from 'redux';

export enum Kind {
  UpdateUserDataAction = 'DISPATCH USER TO STORE',
}

export interface EmployerData {
  addEmployer: {
    poste: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    gender: string;
    hiredDate: Date;
    isPermanent: boolean;
  };
  ViewEmployer: any;
}

export type Action = { type: Kind.UpdateUserDataAction; payload: string | Date | boolean; fieldName: string };

export interface EmployerState {
  data: EmployerData['addEmployer'];
}

const EmployerInitialState: EmployerState = {
  data: {
    poste: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    gender: '',
    hiredDate: new Date(),
    isPermanent: false,
  },
};

const addEmployerReducer = (state: EmployerState = EmployerInitialState, action: Action): EmployerState => {
  switch (action.type) {
    case Kind.UpdateUserDataAction: {
      return {
        ...state,
        data: { ...state.data, [action.fieldName]: action.payload },
      };
    }

    default:
      return state;
  }
};

export default combineReducers<typeof addEmployerReducer>({
  addEmployer: addEmployerReducer,
});
