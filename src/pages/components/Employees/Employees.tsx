import React from 'react';
import EmployeeForm from './EmployeeForm';
import PageHeader from '../../../components/PageHeader';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function Employees(): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <PageHeader title="Ajout d'un nouvel Employé" subTitle="" icon={<PeopleOutlineTwoToneIcon fontSize="large" />} />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </>
  );
}
