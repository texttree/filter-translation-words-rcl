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
const [typeFilter, setTypeFilter] = useState('disabled');
const classes = useStyles();
const options = [
  {
    value: 'isRepeatedInVerse',
    label: 'By verse',
  },
  {
    value: 'isRepeatedInChapter',
    label: 'By chapter',
  },
  {
    value: 'isRepeatedInBook',
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
        setTypeFilter={setTypeFilter}
        typeFilter={typeFilter}
        options={options}
        classes={classes}
      />
      <div> {typeFilter && typeFilter}</div>
    </>
  );
}

Component();
```
