### Default example

```jsx
import React from 'react';
import ReactJson from 'react-json-view';
import {
  useSelectTypeUniqueWords,
  useListWordsReference,
} from '@texttree/filter-translation-words-rcl';
import { useContent } from 'translation-helps-rcl';

const config = {
  verse: '1',
  chapter: '2',
  projectId: 'tit',
  ref: 'master',
  languageId: 'ru',
  resourceId: 'twl',
  owner: 'ru_gl',
  server: 'https://git.door43.org',
};
const { tsvs, items } = useContent({
  ...config,
});

const { listWordsReference, listWordsChapter } = useListWordsReference(tsvs);

const { uniqueWordsItems } = useSelectTypeUniqueWords({
  items,
  typeUniqueWords: 'verse',
  listWordsReference,
  chapter: '2',
  verse: '1',
  listWordsChapter,
});
const json = { uniqueWordsItems };
function Component() {
  return (
    <ReactJson
      style={{ maxHeight: '500px', overflow: 'scroll', whiteSpace: 'pre' }}
      src={json}
      theme="monokai"
    />
  );
}

Component();
```
