import React, { FunctionComponent, ChangeEvent } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, OutlinedInput, FormHelperText } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

interface BasicInputProps {
  className?: string;
  isError?: boolean | undefined;
  isRequired?: boolean | undefined;
  defaultValue?: string | number;
  hint?: string;
  htmlFor?: string;
  inputProps?: any;
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  inputType?: string;
  label?: string;
  helperText?: any;
  placeHolder?: any;
  disabled?: boolean;
  value?: string;
  styleCustomer?: any;
}

export const BasicInput: FunctionComponent<BasicInputProps> = (props: BasicInputProps) => {
  const useStyles = makeStyles(() =>
    createStyles({
      label: {},
      labelError: {
        color: red[400],
      },
    })
  );
  const classes = useStyles();

  return (
    <React.Fragment>
      <FormControl variant="outlined" fullWidth>
        {props.isError && (
          <InputLabel htmlFor={props.htmlFor} className={classes.labelError}>
            {props.hint}
          </InputLabel>
        )}
        {!props.isError && (
          <InputLabel htmlFor={props.htmlFor} className={classes.label}>
            {props.hint}
          </InputLabel>
        )}
        <OutlinedInput
          defaultValue={props.defaultValue}
          label={props.hint} // Hack to fill the label width taken from the message value ✨
          error={props.isError}
          required={props.isRequired}
          onBlur={props.onBlur}
          fullWidth
          onChange={props.onChange}
          id={props.htmlFor}
          inputProps={props.inputProps}
          value={props.value}
        />
        {props.helperText && (
          <FormHelperText style={{ marginLeft: 15, color: props.isError ? 'red' : '' }} id="outlined-weight-helper-text" error={props.isError}>
            {props.helperText}
          </FormHelperText>
        )}
      </FormControl>
    </React.Fragment>
  );
};
