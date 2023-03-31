import { useMemo } from 'react';
import { markRepeatedWordsFromTsvs } from '@texttree/translation-words-helpers';

const useMarkRepeatedWords = ({ items, tsvs }) => {
  const markedWords = useMemo(
    () => markRepeatedWordsFromTsvs(items, tsvs, 'all'),
    [items, tsvs]
  );

  return { markedWords };
};
export default useMarkRepeatedWords;
