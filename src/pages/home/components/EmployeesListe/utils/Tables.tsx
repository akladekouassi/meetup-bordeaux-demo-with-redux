import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { EmployerData } from '../../../../../redux/reducer/Employer.reducer';

const columns: any[] = [
  { field: 'lastName', headerName: 'Nom', width: 130 },
  { field: 'firstName', headerName: 'Prénom', width: 130 },
  { field: 'phoneNumber', headerName: 'Téléphone', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  { field: 'gender', headerName: 'Genre', width: 130 },
  { field: 'hiredDate', headerName: "Date d'embauche", width: 130 },
  {
    field: 'isPermanent',
    headerName: 'CDI ?',
    width: 130,
    valueGetter: (params: any) => (params === true ? 'Oui' : 'Non'),
  },
  {
    field: 'poste',
    headerName: 'Poste',
    type: 'string',
    width: 90,
  },
];

interface DataTableProps {
  rows: EmployerData['ViewEmployer'][];
}

export default function DataTable(props: DataTableProps): JSX.Element {
  return (
    <div style={{ height: 420, width: '100%' }}>
      <DataGrid rows={props.rows!} columns={columns} pageSize={10} checkboxSelection />
    </div>
  );
}
