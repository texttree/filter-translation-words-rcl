import { useState } from 'react';

import useDeepCompareEffect from 'use-deep-compare-effect';

const useSelectTypeUniqueWords = ({
  items,
  typeUniqueWords,
  listWordsReference,
  chapter,
  verse,
  listWordsChapter,
}) => {
  const [uniqueWordsItems, setUniqueWordsItems] = useState([]);

  useDeepCompareEffect(() => {
    if (!items || items.length === 0) {
      return;
    }

    if (typeUniqueWords === 'disabled') {
      setUniqueWordsItems(items);
      return;
    }

    const wordsItems = [];
    const checkItemsVerse = [];
    items.forEach((item) => {
      if (!checkItemsVerse.includes(item.TWLink)) {
        wordsItems.push(item);
        checkItemsVerse.push(item.TWLink);
      }
    });
    if (typeUniqueWords === 'verse') {
      setUniqueWordsItems(wordsItems);
      return;
    }
    const otherWordsItems = [];
    wordsItems.forEach((item) => {
      if (
        (typeUniqueWords === 'chapter' &&
          listWordsChapter &&
          item?.TWLink &&
          listWordsChapter[chapter] &&
          listWordsChapter[chapter][item?.TWLink] === verse) ||
        (typeUniqueWords === 'book' &&
          listWordsReference &&
          item?.TWLink &&
          listWordsReference[item?.TWLink] &&
          listWordsReference[item?.TWLink][0] === chapter + ':' + verse)
      ) {
        otherWordsItems.push(item);
      }
    });
    setUniqueWordsItems(otherWordsItems);
  }, [typeUniqueWords, { items }, listWordsReference]);

  return { uniqueWordsItems };
};
export default useSelectTypeUniqueWords;
