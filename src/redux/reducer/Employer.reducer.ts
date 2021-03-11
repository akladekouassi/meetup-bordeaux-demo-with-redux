import { Kind, Action } from '../actions/index';

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
  ViewEmployer: EmployerData['addEmployer'][];
}

export interface EmployerState {
  data: EmployerData['addEmployer'];
  EmployerFeched: EmployerData['ViewEmployer'];
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
  EmployerFeched: [],
};

const EmployerReducer = (state: EmployerState = EmployerInitialState, action: Action): EmployerState => {
  switch (action.type) {
    case Kind.AddEmployerDataAction: {
      return {
        ...state,
        data: { ...state.data, [action.fieldName]: action.payload },
      };
    }
    case Kind.FetchEmployerDataAction: {
      return {
        ...state,
        EmployerFeched: action.payload,
      };
    }

    default:
      return state;
  }
};

export default EmployerReducer;
