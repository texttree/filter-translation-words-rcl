### Default example

```jsx
import React from 'react';
import ReactJson from 'react-json-view';
import { useSelectTypeUniqueWords } from '@texttree/filter-translation-words-rcl';
import { useContent } from 'translation-helps-rcl';
const tsvs = {
  1: {
    1: [
      {
        Reference: '1:1',
        ID: 'ubbh',
        Tags: '',
        OrigWords: 'πρεσβύτερος',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/other/elder',
        Chapter: '1',
        Verse: '1',
        Book: '3jn',
      },
      {
        Reference: '1:1',
        ID: 'qj7w',
        Tags: 'keyterm',
        OrigWords: 'ἀγαπητῷ',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/kt/beloved',
        Chapter: '1',
        Verse: '1',
        Book: '3jn',
      },
      {
        Reference: '1:1',
        ID: 'qjqz',
        Tags: 'keyterm',
        OrigWords: 'ἀγαπῶ',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/kt/love',
        Chapter: '1',
        Verse: '1',
        Book: '3jn',
      },
      {
        Reference: '1:1',
        ID: 'ww6a',
        Tags: 'keyterm',
        OrigWords: 'ἀληθείᾳ',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/kt/true',
        Chapter: '1',
        Verse: '1',
        Book: '3jn',
      },
    ],
    2: [
      {
        Reference: '1:2',
        ID: 'tgfz',
        Tags: 'keyterm',
        OrigWords: 'ἀγαπητέ',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/kt/beloved',
        Chapter: '1',
        Verse: '2',
        Book: '3jn',
      },
      {
        Reference: '1:2',
        ID: 'psqy',
        Tags: 'keyterm',
        OrigWords: 'εὔχομαί',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/kt/pray',
        Chapter: '1',
        Verse: '2',
        Book: '3jn',
      },
      {
        Reference: '1:2',
        ID: 'zzw9',
        Tags: '',
        OrigWords: 'εὐοδοῦσθαι',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/other/prosper',
        Chapter: '1',
        Verse: '2',
        Book: '3jn',
      },
      {
        Reference: '1:2',
        ID: 'c7fb',
        Tags: '',
        OrigWords: 'ὑγιαίνειν',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/other/heal',
        Chapter: '1',
        Verse: '2',
        Book: '3jn',
      },
      {
        Reference: '1:2',
        ID: 'sfg8',
        Tags: '',
        OrigWords: 'καθὼς',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/other/like',
        Chapter: '1',
        Verse: '2',
        Book: '3jn',
      },
      {
        Reference: '1:2',
        ID: 'n76t',
        Tags: '',
        OrigWords: 'εὐοδοῦταί',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/other/prosper',
        Chapter: '1',
        Verse: '2',
        Book: '3jn',
      },
      {
        Reference: '1:2',
        ID: 'mc2m',
        Tags: 'keyterm',
        OrigWords: 'ψυχή',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/kt/soul',
        Chapter: '1',
        Verse: '2',
        Book: '3jn',
      },
    ],
  },
};
// const config = {
//   verse: '1',
//   chapter: '2',
//   projectId: 'tit',
//   ref: 'master',
//   languageId: 'ru',
//   resourceId: 'twl',
//   owner: 'ru_gl',
//   server: 'https://git.door43.org',
// };
function Component() {
  // const { items } = useContent({
  //   ...config,
  // });

  const { listWordsReference, listWordsChapter } = useListWordsReference(tsvs);
  const json = { listWordsReference, listWordsChapter };

  return (
    <>
      <ReactJson
        style={{ maxHeight: '500px', overflow: 'scroll', whiteSpace: 'pre' }}
        src={json}
        theme="monokai"
      />
    </>
  );
}

Component();
```
