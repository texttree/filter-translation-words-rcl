import { useMemo } from 'react';
import { markRepeatedWordsFromTsvs } from '@texttree/translation-words-helpers';

const useMarkRepeatedWords = ({ items, tsvs, type = 'all' }) => {
  const markedWords = useMemo(
    () => markRepeatedWordsFromTsvs(items, tsvs, type),
    [items, tsvs]
  );

  return { markedWords };
};
export default useMarkRepeatedWords;
