### Default example

```jsx
import React, { useState } from 'react';
import ReactJson from 'react-json-view';
import { SwitchFilter } from '@texttree/filter-translation-words-rcl';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
}));
const [switchTypeUniqueWords, setSwitchTypeUniqueWords] = useState('disabled');
const [switchHideRepeatedWords, setSwitchHideRepeatedWords] = useState(true);
const classes = useStyles();
const actions = { setSwitchTypeUniqueWords, setSwitchHideRepeatedWords };
const state = { switchTypeUniqueWords, switchHideRepeatedWords };
const options = [
  {
    value: 'verse',
    label: 'By verse',
  },
  {
    value: 'chapter',
    label: 'By chapter',
  },
  {
    value: 'book',
    label: 'By book',
  },
  {
    value: 'disabled',
    label: 'Disabled',
  },
];

function Component() {
  return (
    <>
      <SwitchFilter
        state={state}
        actions={actions}
        options={options}
        classes={classes}
        labelHideOptions={'Hide repeated words'}
      />
      <div> {switchTypeUniqueWords && switchTypeUniqueWords}</div>
    </>
  );
}

Component();
```
