import { useState, useMemo, useEffect } from 'react';
import { convertTsvsToListWords } from '@texttree/translation-words-helpers';

import useDeepCompareEffect from 'use-deep-compare-effect';

const useListWordsReference = ({ tsvs }) => {
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
  console.log(lists);
  return lists;
};
export default useListWordsReference;
