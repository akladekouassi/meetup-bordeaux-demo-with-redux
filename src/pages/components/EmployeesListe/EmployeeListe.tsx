import React from 'react';
import LoadingIndicator from '../../../components/loading-indicator/LoadingIndicator';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import DataTable from './utils/Tables';
import PageHeader from '../../../components/PageHeader';
import { useQuery } from 'react-query';
import { EmployerData } from '../../../redux/reducer/Employer.reducer';
import { connect } from 'react-redux';
import { Kind } from '../../../redux/actions/index';
import { ReducerMapType } from '../../../redux/reducer/rootReducer';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
    },
  })
);

const mapStateToProps = (state: ReducerMapType) => {
  return {
    employers: state.Employers.EmployerFeched,
  };
};

const mapDispatcherToProps = (dispatch: any) => {
  return {
    fetchFromDataBaseToStore: (payload: EmployerData['addEmployer'][]) => dispatch({ type: Kind.FetchEmployerDataAction, payload }),
  };
};

const getEmployersData = async (): Promise<EmployerData['addEmployer'][]> => {
  const data = await fetch(`${process.env.REACT_APP_FAKE_API_URL}/users`).then((res) => res.json());
  const { usersList } = data;
  return usersList;
};

const EmployeeList: React.FunctionComponent = (props: any) => {
  const classes = useStyles();

  React.useEffect(() => {
    getEmployersData().then((data) => {
      props.fetchFromDataBaseToStore(data);
    });
  }, []);

  return (
    <React.Fragment>
      <LoadingIndicator isActive={false}>
        <PageHeader title="Liste des Employés" subTitle="" icon={<PeopleOutlineTwoToneIcon fontSize="large" />} />
        <div className={classes.root}>
          <DataTable rows={props.employers} />
        </div>
      </LoadingIndicator>
    </React.Fragment>
  );
};
export default connect(mapStateToProps, mapDispatcherToProps)(EmployeeList);
