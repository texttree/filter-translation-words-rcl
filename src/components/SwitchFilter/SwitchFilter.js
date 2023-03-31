import React from 'react';

import { FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';

function SwitchFilter({ typeFilter, setTypeFilter, options, classes }) {
  const handleChange = (event) => {
    setTypeFilter(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup classes={classes} value={typeFilter} onChange={handleChange}>
        {options.map((el) => (
          <FormControlLabel
            key={el.value}
            value={el.value}
            control={<Radio />}
            label={el.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default SwitchFilter;
