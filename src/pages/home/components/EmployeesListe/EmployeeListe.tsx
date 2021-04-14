import React, { Dispatch } from 'react';
import LoadingIndicator from '../../../../components/loading-indicator/LoadingIndicator';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import DataTable from './utils/Tables';
import PageHeader from '../../../../components/PageHeader';
import { EmployerData } from '../../../../redux/reducer/Employer.reducer';
import { connect } from 'react-redux';
import { Kind, Action } from '../../../../redux/actions/index';
import { ReducerMapType } from '../../../../redux/reducer/rootReducer';

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

interface EmployerListProps {
  employers: EmployerData['ViewEmployer'][];
  fetchFromDataBaseToStore: (payload: EmployerData['addEmployer'][]) => Dispatch<Action>;
}

const EmployeeList: React.FC<EmployerListProps> = (props: EmployerListProps) => {
  React.useEffect(() => {
    getEmployersData().then((data) => {
      props.fetchFromDataBaseToStore(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <LoadingIndicator isActive={false}>
        <PageHeader title="Liste des Employés" subTitle="" icon={<PeopleOutlineTwoToneIcon fontSize="large" />} />
        <div style={{ margin: 20 }}>
          <DataTable rows={props.employers} />
        </div>
      </LoadingIndicator>
    </React.Fragment>
  );
};
export default connect(mapStateToProps, mapDispatcherToProps)(EmployeeList);
