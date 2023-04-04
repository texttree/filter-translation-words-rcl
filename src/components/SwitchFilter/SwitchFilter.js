import React from 'react';
import propTypes from 'prop-types';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';

export default function SwitchFilter({ typeFilter, setTypeFilter, options, classes }) {
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

SwitchFilter.propTypes = {
  /** State value of type of the filter */
  typeFilter: propTypes.string.isRequired,
  /** Action value of type of the filter */
  setTypeFilter: propTypes.func.isRequired,
  /** Options of select  */
  options: propTypes.array.isRequired,
  /** Classes of radiogroup */
  classes: propTypes.object.isRequired,
};
