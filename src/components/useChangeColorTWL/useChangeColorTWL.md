### Default example

```jsx
import React from 'react';
import ReactJson from 'react-json-view';
import {
  useSelectTypeUniqueWords,
  useListWordsReference,
  useChangeColorTWL,
} from '@texttree/filter-translation-words-rcl';
import { useContent, useCardState } from 'translation-helps-rcl';
const bookId = 'tit';
const verse = '1';
const chapter = '2';
const hideRepeatedWords = 'false';

const config = {
  verse: verse,
  chapter: chapter,
  projectId: bookId,
  ref: 'master',
  languageId: 'ru',
  resourceId: 'twl',
  owner: 'ru_gl',
  server: 'https://git.door43.org',
};

function Component() {
  const { tsvs, items } = useContent({
    ...config,
  });
  const {
    state: { item, itemIndex },
    actions: { setItemIndex },
  } = useCardState({
    items: !hideRepeatedWords ? items : uniqueWordsItems,
    verse: verse,
    chapter: chapter,
    projectId: bookId,
  });

  const { listWordsReference, listWordsChapter } = useListWordsReference(tsvs);

  const { uniqueWordsItems } = useSelectTypeUniqueWords({
    items,
    typeUniqueWords: 'verse',
    listWordsReference,
    chapter: chapter,
    verse: verse,
    listWordsChapter,
  });
  const changeColor = useChangeColorTWL({
    items,
    hideRepeatedWords,
    uniqueWordsItems,
    items,
    itemIndex,
  });
  const json = { changeColor };

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
