import React from 'react';
import LoadingIndicator from '../../../components/loading-indicator/LoadingIndicator';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import DataTable from './utils/Tables';
import PageHeader from '../../../components/PageHeader';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
    },
  })
);

const EmployeeList: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <LoadingIndicator isActive={false}>
        <PageHeader title="Liste des Employés" subTitle="" icon={<PeopleOutlineTwoToneIcon fontSize="large" />} />
        <div className={classes.root}>
          <DataTable />
        </div>
      </LoadingIndicator>
    </React.Fragment>
  );
};

export default EmployeeList;
