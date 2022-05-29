import { useEffect, useState } from 'react';

const useChangeColorTWL = ({ items, hideRepeatedWords, uniqueWordsItems, itemIndex }) => {
  const [changeColor, setChangeColor] = useState();

  useEffect(() => {
    const _changeColor =
      !hideRepeatedWords &&
      uniqueWordsItems &&
      items &&
      items.length > 0 &&
      (itemIndex !== undefined || null) &&
      !uniqueWordsItems.includes(items[itemIndex]);
    setChangeColor(_changeColor);
  }, [itemIndex, items, uniqueWordsItems, hideRepeatedWords]);

  return { changeColor };
};
export default useChangeColorTWL;
