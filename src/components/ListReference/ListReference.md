### Default example

```jsx
import React, { useState } from 'react';
import ReactJson from 'react-json-view';

import { useContent, useCardState } from 'translation-helps-rcl';
import {
  ListReference,
  useListWordsReference,
} from '@texttree/filter-translation-words-rcl';
import { makeStyles } from '@material-ui/core/styles';
const verse = '2';
const chapter = '1';
const bookId = 'tit';
function Component() {
  const config = {
    verse,
    chapter,
    projectId: bookId,
    ref: 'master',
    languageId: 'en',
    resourceId: 'twl',
    owner: 'unfoldingWord',
    server: 'https://git.door43.org',
  };
  const { tsvs, items, markdown } = useContent({
    ...config,
  });
  const [closed, setClosed] = useState(false);
  const { listWordsReference, listWordsChapter } = useListWordsReference(tsvs);

  const {
    state: { item, itemIndex, filters, markdownView, headers },
    actions: { setItemIndex, setFilters, setMarkdownView },
  } = useCardState({
    items,
    verse,
    chapter,
    projectId: bookId,
  });
  const currentChapter = chapter;
  const currentVerse = verse;
  const onClickLink = (ref) => {
    console.log(ref);
    setClosed(true);
  };
  return (
    <>
      <ListReference
        links={item && listWordsReference && listWordsReference[item.TWLink]}
        onClickLink={onClickLink}
        currentChapter={currentChapter}
        currentVerse={currentVerse}
        closed={closed}
        setClosed={setClosed}
      />
      <div>TWLink:{item && item.TWLink}</div>
      <div>bookId:{bookId}</div>
      <div>chapter:{chapter}</div>
      <div>verse:{verse}</div>
    </>
  );
}

Component();
```
