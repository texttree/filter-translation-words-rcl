### Default example

```jsx
import React from 'react';
import ReactJson from 'react-json-view';
import { BibleReference, useBibleReference } from 'bible-reference-rcl';
import Button from '@material-ui/core/Button';
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

function Component() {
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
  const initialBook = 'mal';
  const initialChapter = '2';
  const initialVerse = '3';
  const initial = {
    initialBook,
    initialChapter,
    initialVerse,
    onChange,
  };
  const blue = '#00B0FF'; // a shade of blue
  const white = '#FFFFFF';
  const style = { color: white, background: blue };
  const { state, actions } = useBibleReference(initial);
  function onChange(bookId, chapter, verse) {
    console.log(`\n### Reference changed to ${bookId} - ${chapter}:${verse}\n\n`);
  }
  console.log(state, actions);
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Button variant="outlined" id="prev_v" onClick={actions.goToPrevVerse}>
        {'Previous Verse'}
      </Button>

      <Button variant="outlined" id="next_v" onClick={actions.goToNextVerse}>
        {'Next Verse'}
      </Button>
      <Button variant="outlined" id="prev_v" onClick={actions.goToPrevChapter}>
        {'Previous Chapter'}
      </Button>

      <Button variant="outlined" id="next_v" onClick={actions.goToNextChapter}>
        {'Next Chapter'}
      </Button>

      <Button variant="outlined" id="prev_b" onClick={actions.goToPrevBook}>
        {'Previous Book'}
      </Button>

      <Button variant="outlined" id="next_b" onClick={actions.goToNextBook}>
        {'Next Book'}
      </Button>
    </div>
  );
}

Component();
```
