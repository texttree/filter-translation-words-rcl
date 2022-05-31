import { useEffect, useState } from 'react';

const useIsRepeated = ({ items, hideRepeatedWords, uniqueWordsItems, itemIndex }) => {
  const [isRepeated, setIsRepeated] = useState();

  useEffect(() => {
    const _isRepeated =
      !hideRepeatedWords &&
      uniqueWordsItems &&
      items &&
      items.length > 0 &&
      (itemIndex !== undefined || null) &&
      !uniqueWordsItems.includes(items[itemIndex]);
    setIsRepeated(_isRepeated);
  }, [itemIndex, items, uniqueWordsItems, hideRepeatedWords]);

  return isRepeated;
};
export default useIsRepeated;
