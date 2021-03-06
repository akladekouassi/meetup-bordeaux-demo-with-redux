import React, { Dispatch, ChangeEvent } from 'react';
import { Grid } from '@material-ui/core';
import Forms from '../../../components/controls/Controls';
// import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { EmployerData, Kind } from '../../../redux/reducer/Employer.reducer';
import { useMutation } from 'react-query';

const mapStateToProps = (state: any) => {
  return {
    user: state.user.addEmployer.data,
  };
};

const mapDispatcherToProps = (dispatch: any) => {
  return {
    dispatchUserToStore: (value: string | Date | boolean, fieldName: string) =>
      dispatch({ type: Kind.UpdateUserDataAction, payload: value, fieldName }),
  };
};

const genderItems: { id: string; title: string }[] = [
  { id: 'homme', title: 'Masculin' },
  { id: 'femme', title: 'Feminin' },
];

interface EmployerFormProps {
  user: EmployerData['addEmployer'];
  dispatchUserToStore: (value: string | boolean | Date, fieldName: string) => Dispatch<any>;
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps> & EmployerFormProps;

const EmployeeForm: React.FunctionComponent<ReduxType> = (props: EmployerFormProps) => {
  const mutation = useMutation(async () => {
    const res = await fetch(`${process.env.REACT_APP_FAKE_API_URL}/users/add`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(props.user),
    });
    return await res.json();
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any, fieldName: string) => {
    const value = fieldName !== 'hiredDate' ? (e.target.value as string) : e;
    props.dispatchUserToStore(value, fieldName);
  };

  const handleOnBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any, fieldName: string) =>
    props.dispatchUserToStore(e.target.value, fieldName);

  const handleAdduser = async (e: any) => {
    // e.preventDefault();
    try {
      await mutation.mutateAsync();
    } catch (error) {}
  };
  return (
    <form>
      <Grid container>
        <Grid item xs={6}>
          <Forms.OutlinedInput
            defaultValue={props.user.lastName}
            isError={false}
            isRequired={true}
            hint="Nom"
            htmlFor="lastName"
            onBlur={(e) => handleOnBlur(e, 'lastName')}
          />
          <Forms.OutlinedInput
            defaultValue={props.user.firstName}
            isError={false}
            isRequired={true}
            hint="Prénom"
            htmlFor="firstName"
            onBlur={(e) => handleOnBlur(e, 'firstName')}
          />

          <Forms.OutlinedInput
            defaultValue={props.user.phoneNumber}
            isError={false}
            isRequired={true}
            hint="Numero de téléphone"
            htmlFor="phoneNumber"
            onBlur={(e) => handleOnBlur(e, 'phoneNumber')}
          />
          <Forms.OutlinedInput
            defaultValue={props.user.email}
            isError={false}
            isRequired={true}
            hint="Email"
            htmlFor="email"
            onBlur={(e) => handleOnBlur(e, 'email')}
          />
        </Grid>
        <Grid item xs={6}>
          <Forms.RadioGroup
            name="gender"
            label="Genre"
            value={props.user.gender}
            onChange={(e: any) => handleOnChange(e, 'gender')}
            items={genderItems}
          />
          <Forms.Select
            label="Department"
            isError={false}
            isRequired={true}
            hint="Poste"
            htmlFor="poste"
            value={props.user.poste}
            onChange={(e: any) => handleOnChange(e, 'poste')}
            options={[
              { value: 'dev front', label: 'Développeur Front' },
              { value: 'dev back', label: 'Développeur Back' },
              { value: 'QA', label: 'Testeur' },
              { value: 'design', label: 'Designer' },
            ]}
          />
          <Forms.DatePicker
            htmlFor="hiredDate"
            label="Date d'embauche"
            value={props.user.hiredDate}
            onChange={(e: any) => handleOnChange(e, 'hiredDate')}
          />
          <Forms.Checkbox
            htmlFor="isPermanent"
            name="isPermanent"
            label="CDI"
            value={props.user.isPermanent}
            onChange={(e: any) => handleOnChange(e, 'isPermanent')}
          />

          <div>
            <Forms.Button type="submit" text="Submit" onClick={handleAdduser} />
            <Forms.Button text="Reset" color="default" onClick={console.log()} />
          </div>
        </Grid>
      </Grid>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatcherToProps)(EmployeeForm);
