export enum Kind {
  AddEmployerDataAction = 'DISPATCH USER TO STORE',
  FetchEmployerDataAction = 'FETCH USER FROM DATABASE',
}

export type Action =
  | { type: Kind.AddEmployerDataAction; payload: string | Date | boolean; fieldName: string }
  | { type: Kind.FetchEmployerDataAction; payload: any };

// ACTION CREATOR BUT ISN'T USED
const AddUserToStore = (payload: string | Date | boolean) => ({
  type: Kind.AddEmployerDataAction,
  payload,
});
