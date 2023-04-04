### Default example

```jsx
import React, { useState, useEffect } from 'react';
import { BibleReference, useBibleReference } from 'bible-reference-rcl';
import Button from '@material-ui/core/Button';
import {
  useListWordsReference,
  useMarkRepeatedWords,
  SwitchFilter,
  ListReference,
} from '@texttree/filter-translation-words-rcl';
import { useContent, useCardState, Card, CardContent } from 'translation-helps-rcl';
import { makeStyles } from '@material-ui/core/styles';

function Component() {
  const [closed, setClosed] = useState(false);
  const [typeFilter, setTypeFilter] = useState('disabled');

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'row',
    },
  }));
  const classes = useStyles();

  const initialBook = 'mat';
  const initialChapter = '1';
  const initialVerse = '2';
  const initial = {
    initialBook,
    initialChapter,
    initialVerse,
  };

  const {
    state: { verse, chapter, bookId },
    actions: {
      goToPrevVerse,
      goToNextVerse,
      goToPrevChapter,
      goToNextChapter,
      goToPrevBook,
      goToNextBook,
      goToBookChapterVerse,
    },
  } = useBibleReference(initial);
  const onClickLink = (ref) => {
    goToBookChapterVerse(bookId, ref[0], ref[1]);
    setClosed(true);
  };
  const config = {
    verse: verse,
    chapter: chapter,
    projectId: bookId,
    ref: 'master',
    languageId: 'en',
    resourceId: 'twl',
    owner: 'unfoldingWord',
    server: 'https://git.door43.org',
  };
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
  const { tsvs, items, markdown } = useContent({
    ...config,
  });

  const { listWordsInBook, listWordsChapter } = useListWordsReference({ tsvs });

  const { markedWords } = useMarkRepeatedWords({ tsvs, items });

  const {
    state: { item, itemIndex, filters, markdownView, headers },
    actions: { setItemIndex, setFilters, setMarkdownView },
  } = useCardState({
    items: markedWords,
    verse: verse,
    chapter: chapter,
    projectId: bookId,
  });

  const showSaveChangesPrompt = () => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  };
  useEffect(() => {
    setItemIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookId, chapter, verse, typeFilter]);
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button variant="outlined" id="prev_v" onClick={goToPrevVerse}>
          {'Previous Verse'}
        </Button>

        <Button variant="outlined" id="next_v" onClick={goToNextVerse}>
          {'Next Verse'}
        </Button>
        <Button variant="outlined" id="prev_v" onClick={goToPrevChapter}>
          {'Previous Chapter'}
        </Button>

        <Button variant="outlined" id="next_v" onClick={goToNextChapter}>
          {'Next Chapter'}
        </Button>

        <Button variant="outlined" id="prev_b" onClick={goToPrevBook}>
          {'Previous Book'}
        </Button>

        <Button variant="outlined" id="next_b" onClick={goToNextBook}>
          {'Next Book'}
        </Button>
      </div>
      <SwitchFilter
        setTypeFilter={setTypeFilter}
        typeFilter={typeFilter}
        options={options}
        classes={classes}
      />
      <div>
        reference:
        {bookId}
        {chapter}:{verse}
      </div>
      <Card
        headers={headers}
        filters={filters}
        setFilters={setFilters}
        items={markedWords}
        itemIndex={itemIndex}
        title={'Words'}
        setItemIndex={setItemIndex}
        showSaveChangesPrompt={showSaveChangesPrompt}
        setMarkdownView={setMarkdownView}
        markdownView={markdownView}
      >
        {item && (
          <ListReference
            links={item && listWordsInBook && listWordsInBook[item.TWLink]}
            onClickLink={onClickLink}
            currentChapter={chapter}
            currentVerse={verse}
            closed={closed}
            setClosed={setClosed}
          />
        )}
        <div style={{ color: `${item && item[typeFilter] ? 'grey' : 'black'}` }}>
          <CardContent
            filters={filters}
            setFilters={setFilters}
            item={item}
            items={markedWords}
            languageId={'en'}
            markdown={markdown}
            markdownView={markdownView}
            showSaveChangesPrompt={showSaveChangesPrompt}
            viewMode={'markdown'}
          ></CardContent>
        </div>
      </Card>
    </>
  );
}

Component();
```
