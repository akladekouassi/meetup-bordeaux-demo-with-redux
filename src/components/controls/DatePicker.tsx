// import React, { FunctionComponent, ChangeEvent } from 'react';
// import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';

// const DatePicker: FunctionComponent<DatePickerProps> = (props: DatePickerProps) => {
//   const { name, label, value, onChange, onBlur } = props;
//   const convertToDefEventPara = (name: string, value: any) => ({
//     target: {
//       name,
//       value,
//     },
//   });

//   return (
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <KeyboardDatePicker
//         disableToolbar
//         variant="inline"
//         inputVariant="outlined"
//         label={label}
//         format="MMM/dd/yyyy"
//         onBlur={onBlur}
//         name={name}
//         value={value}
//         onChange={(date: any) => onChange(convertToDefEventPara(name, date))}
//       />
//     </MuiPickersUtilsProvider>
//   );
// };

// export default DatePicker;

import 'date-fns';
import React, { ChangeEvent } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

interface DatePickerProps {
  className?: string;
  isError?: boolean | undefined;
  isRequired?: boolean | undefined;
  defaultValue?: string | number;
  hint?: string;
  htmlFor?: string;
  inputProps?: any;
  onChange: (event: Date | null) => void;
  inputType?: string;
  label?: string;
  helperText?: any;
  placeHolder?: any;
  disabled?: boolean;
  value?: any;
}

export default function DatePicker(props: DatePickerProps) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container>
        <KeyboardDatePicker
          // disableToolbar
          variant="inline"
          inputVariant="outlined"
          format="MM/dd/yyyy"
          margin="normal"
          id={props.htmlFor}
          label={props.label}
          value={props.value}
          onChange={props.onChange}
          KeyboardButtonProps={{
            'aria-label': 'Date picker',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
