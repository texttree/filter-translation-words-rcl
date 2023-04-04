import React from 'react';
import propTypes from 'prop-types';

export default function useMarkRepeatedWords() {
  return <></>;
}

useMarkRepeatedWords.propTypes = {
  /** Words of the current verse */
  items: propTypes.array.isRequired,
  /** All words of the current book */
  tsvs: propTypes.object.isRequired,
  /** Type of filter: 'verse', 'book', 'chapter' and 'all' */
  type: propTypes.string.isRequired,
};
useMarkRepeatedWords.defaultProps = {
  type: 'all',
};
