import React, { FunctionComponent } from 'react';
import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio } from '@material-ui/core';

interface RadioCardProps {
  checked?: boolean;
  src?: string;
  label: string;
  name: string;
  value: string;
  onChange: any;
  items: { id: string; title: string }[];
  radioType?: any;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
  cyIdentifier?: string;
}

const RadioGroup: FunctionComponent<RadioCardProps> = (props: RadioCardProps) => {
  const { name, label, value, onChange, items } = props;

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup row name={name} value={value} onChange={onChange}>
        {items.map((item: any) => (
          <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title} />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;
