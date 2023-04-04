import { useState, useEffect } from 'react';

import { convertTsvsToListWords } from '@texttree/translation-words-helpers';

export default function useListWordsReference({ tsvs }) {
  const [lists, setLists] = useState({});

  useEffect(() => {
    if (!tsvs) {
      return;
    }
    const _lists = convertTsvsToListWords(tsvs);
    if (_lists) {
      setLists(_lists);
    }
  }, [tsvs]);
  return lists;
}
