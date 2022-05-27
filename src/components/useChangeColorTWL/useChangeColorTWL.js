import { useEffect, useState } from 'react';

const useChangeColorTWL = ({ items, hideRepeatedWords, uniqueWordsItems, item }) => {
  const [changeColor, setChangeColor] = useState();

  useEffect(() => {
    const _changeColor =
      !hideRepeatedWords &&
      uniqueWordsItems &&
      items &&
      items.length > 0 &&
      item &&
      !uniqueWordsItems.includes(item);
    setChangeColor(_changeColor);
  }, [item, items, uniqueWordsItems, hideRepeatedWords]);

  return { changeColor };
};
export default useChangeColorTWL;
