import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

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

export default function DataTable(props: any) {
  return (
    <div style={{ height: 400, width: '90%' }}>
      <DataGrid rows={props.rows!} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
