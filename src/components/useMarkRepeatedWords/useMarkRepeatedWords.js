import { useMemo } from 'react';
import { markRepeatedWordsFromTsvs } from '@texttree/translation-words-helpers';

export default function useMarkRepeatedWords({ items, tsvs, type = 'all' }) {
  const markedWords = useMemo(
    () => markRepeatedWordsFromTsvs(items, tsvs, type),
    [items, tsvs, type]
  );
  return { markedWords };
}
