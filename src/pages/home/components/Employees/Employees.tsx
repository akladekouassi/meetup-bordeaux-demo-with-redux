import React, { Dispatch, ChangeEvent } from 'react';
import PageHeader from '../../../../components/PageHeader';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles } from '@material-ui/core';

import { Grid } from '@material-ui/core';
import { FormsControl } from '../../../../components/forms';
// import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { EmployerData } from '../../../../redux/reducer/Employer.reducer';
import { Kind, Action } from '../../../../redux/actions/index';
import { useMutation } from 'react-query';
import { ReducerMapType } from '../../../../redux/reducer/rootReducer';

const mapStateToProps = (state: ReducerMapType) => {
  return {
    user: state.Employers.data,
    employersFetched: state.Employers.EmployerFeched,
  };
};

const mapDispatcherToProps = (dispatch: any) => {
  return {
    dispatchUserToStore: (value: string | Date | boolean, fieldName: string) =>
      dispatch({ type: Kind.AddEmployerDataAction, payload: value, fieldName }),
  };
};

const genderItems: { id: string; title: string }[] = [
  { id: 'homme', title: 'Masculin' },
  { id: 'femme', title: 'Feminin' },
];

interface EmployerFormProps {
  user: EmployerData['addEmployer'];
  employersFetched: EmployerData['ViewEmployer'][];
  dispatchUserToStore: (value: string | boolean | Date, fieldName: string) => Dispatch<Action>;
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps> & EmployerFormProps;

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));
const Employers: React.FunctionComponent<ReduxType> = (props: EmployerFormProps): JSX.Element => {
  const classes = useStyles();
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
    try {
      await mutation.mutateAsync();
    } catch (error) {}
  };

  return (
    <>
      <PageHeader title="Ajouter un nouvel employé" subTitle="" icon={<PeopleOutlineTwoToneIcon fontSize="large" />} />
      <Paper className={classes.pageContent}>
        <form>
          <Grid container spacing={4}>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <FormsControl.OutlinedInput
                defaultValue={props.user.lastName}
                isError={false}
                isRequired={true}
                hint="Nom"
                htmlFor="lastName"
                onBlur={(e) => handleOnBlur(e, 'lastName')}
              />
              <FormsControl.OutlinedInput
                defaultValue={props.user.firstName}
                isError={false}
                isRequired={true}
                hint="Prénom"
                htmlFor="firstName"
                onBlur={(e) => handleOnBlur(e, 'firstName')}
              />

              <FormsControl.OutlinedInput
                defaultValue={props.user.phoneNumber}
                isError={false}
                isRequired={true}
                hint="Numero de téléphone"
                htmlFor="phoneNumber"
                onBlur={(e) => handleOnBlur(e, 'phoneNumber')}
              />
              <FormsControl.OutlinedInput
                defaultValue={props.user.email}
                isError={false}
                isRequired={true}
                hint="Email"
                htmlFor="email"
                onBlur={(e) => handleOnBlur(e, 'email')}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <FormsControl.RadioGroup
                name="gender"
                label="Genre"
                value={props.user.gender}
                onChange={(e: any) => handleOnChange(e, 'gender')}
                items={genderItems}
              />
              <FormsControl.Select
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
              <FormsControl.DatePicker
                htmlFor="hiredDate"
                label="Date d'embauche"
                value={props.user.hiredDate}
                onChange={(e: any) => handleOnChange(e, 'hiredDate')}
              />
              <FormsControl.Checkbox
                htmlFor="isPermanent"
                name="isPermanent"
                label="CDI"
                value={props.user.isPermanent}
                onChange={(e: any) => handleOnChange(e, 'isPermanent')}
              />

              <div>
                <FormsControl.Button type="submit" text="Valider" onClick={handleAdduser} />
                <FormsControl.Button type="reset" text="Reset" color="default" onClick={(e) => console.log(e)} />
              </div>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
};

export default connect(mapStateToProps, mapDispatcherToProps)(Employers);
