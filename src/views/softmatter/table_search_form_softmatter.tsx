import React, { useState, ChangeEvent } from 'react';
import {
  TextField,
  MenuItem,
  Select,
  SelectChangeEvent,
  InputLabel,
  FormControl,
} from '@mui/material';

interface MyComponentProps {
  initialValues?: Record<string, string>;
  onInputChange?: (field: string, value: string) => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ initialValues = {}, onInputChange }) => {
  const [fieldValues, setFieldValues] = useState<Record<string, string>>(initialValues);

  const handleInputChangeLocal = (fieldName: string) => (event: ChangeEvent<HTMLInputElement | { value: string }>) => {
    const newValue = event.target.value;
    setFieldValues((prevValues) => ({
      ...prevValues,
      [fieldName]: newValue,
    }));

    if (onInputChange) {
      onInputChange(fieldName, newValue);
    }
  };

  const handleSelectChange = (fieldName: string) => (event: SelectChangeEvent<string>) => {
    const newValue = event.target.value as string;
    setFieldValues((prevValues) => ({
      ...prevValues,
      [fieldName]: newValue,
    }));

    if (onInputChange) {
      onInputChange(fieldName, newValue);
    }
  };

  const selectFieldStyle: React.CSSProperties = {
    width: '150px',
    marginRight: '8px',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
  <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">MAC Address</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label="Field 1"
      variant="outlined"
      value={fieldValues.field1 || ''}
      onChange={handleSelectChange('field1')}
      style={selectFieldStyle}
    >
      <MenuItem value="00">00</MenuItem>
      <MenuItem value="option2">Option 2</MenuItem>
    </Select>
  </FormControl>

  <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Production Order</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label="Field 2"
      variant="outlined"
      value={fieldValues.field2 || ''}
      onChange={handleSelectChange('field2')}
      style={selectFieldStyle}
    >
      <MenuItem value="54">54</MenuItem>
      <MenuItem value="option2">Option 2</MenuItem>
    </Select>
  </FormControl>

  <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Result</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label="Field 3"
      variant="outlined"
      value={fieldValues.field3 || ''}
      onChange={handleSelectChange('field3')}
      style={selectFieldStyle}
    >
      <MenuItem value="Pass">Pass</MenuItem>
      <MenuItem value="Fail">Fail</MenuItem>
    </Select>
  </FormControl>
</div>
  );
};

export default MyComponent;
