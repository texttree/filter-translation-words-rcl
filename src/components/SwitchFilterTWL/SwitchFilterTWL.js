import React from 'react';

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';

function SwitchUniqueWords({
  state: { switchTypeUniqueWords, switchHideRepeatedWords },
  actions: { setSwitchTypeUniqueWords, setSwitchHideRepeatedWords },
  options,
  classes,
  labelHideOptions,
}) {
  const handleChange = (event) => {
    setSwitchTypeUniqueWords(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup classes={classes} value={switchTypeUniqueWords} onChange={handleChange}>
        {options.map((el) => (
          <FormControlLabel
            key={el.value}
            value={el.value}
            control={<Radio />}
            label={el.label}
          />
        ))}
      </RadioGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={switchHideRepeatedWords}
            onChange={(e) => {
              setSwitchHideRepeatedWords((prev) => !prev);
            }}
            disabled={switchTypeUniqueWords === 'disabled'}
          />
        }
        label={'Hide_repeated_words'}
      />
    </FormControl>
  );
}

export default SwitchUniqueWords;
