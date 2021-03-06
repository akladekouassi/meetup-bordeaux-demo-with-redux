import React, { ChangeEvent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

interface SelectProps {
  isError?: boolean | undefined;
  isRequired?: boolean | undefined;
  hint?: string;
  htmlFor?: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { value: unknown }>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  inputType?: string;
  label?: string;
  helperText?: any;
  placeHolder?: any;
  disabled?: boolean;
  value?: string;
  styleCustomer?: any;
  options?: any;
}

export default function SelectComponent(props: SelectProps) {
  const classes = useStyles();
  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id={props.htmlFor}> {props.hint} </InputLabel>
        <Select labelId={props.htmlFor} id={props.htmlFor} value={props.value} onChange={props.onChange} label={props.label}>
          {props.options.map((item: any) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
