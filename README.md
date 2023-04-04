<div id="top"></div>

[![Contributors](https://img.shields.io/github/contributors/texttree/filter-translation-words-rcl.svg?style=for-the-badge)](https://github.com/texttree/filter-translation-words-rcl/graphs/contributors)
[![Forks](https://img.shields.io/github/forks/texttree/filter-translation-words-rcl.svg?style=for-the-badge)](https://github.com/texttree/filter-translation-words-rcl/network/members)
[![Stargazers](https://img.shields.io/github/stars/texttree/filter-translation-words-rcl.svg?style=for-the-badge)](https://github.com/texttree/filter-translation-words-rcl/stargazers)
[![Issues](https://img.shields.io/github/issues/texttree/filter-translation-words-rcl.svg?style=for-the-badge)](https://github.com/texttree/filter-translation-words-rcl/issues)
[![MIT License](https://img.shields.io/github/license/texttree/filter-translation-words-rcl.svg?style=for-the-badge)](https://github.com/texttree/filter-translation-words-rcl/blob/master/LICENSE)

<!-- PROJECT LOGO -->
<br />
<div >
  <a href="https://github.com/texttree/filter-translation-words-rcl">
    <img src="images/logo.png" alt="Logo" width="256" height="256">
  </a>

<h3 >filter-translation-words-rcl</h3>

  <p align="center">
    <a href="https://filter-translation-words-rcl.netlify.app/"><strong>Explore the docs and code playground »</strong></a>
    <br />
    <br />
   <a href="https://github.com/texttree/filter-translation-words-rcl/issues">Report Bug</a> <span> · </span> <a href="https://github.com/texttree/filter-translation-words-rcl/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

<details>

  <summary>Table of Contents ↧</summary>
  <ul>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<img src="/images/screenshot.png" alt="Filter translation words shot" width="100%">

**Purpose**

- Filter repeated words in TWL card

**Problem**

- Chapters and verses often contain words that have already been encountered before. And it's not really convenient when they are repeated in [translation-helps-rcl's](https://github.com/unfoldingWord/translation-helps-rcl) [TWL card](https://translation-helps-rcl.netlify.app).

**Scope**

- The library allows you to filter words that have already appeared in a verse, chapter or book
- Words can either be removed from the list or left, but marked with a different color.

**Background**

- Translators who check the correctness of the translation really wanted to have this feature

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React.js](https://reactjs.org/)
- [React Styleguidist](https://react-styleguidist.js.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Installation

Add the library to your React app

- yarn

```bash
yarn add @texttree/filter-translation-words-rcl
```

- npm

```bash
npm install @texttree/filter-translation-words-rcl
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage/Integration

This library works in conjunction with the useСontent and useCardState hooks from the library [translation-helps-rcl](https://github.com/unfoldingWord/translation-helps-rcl).

**[Full demo](https://filter-translation-words-rcl.netlify.app/#/Demo)**

To begin with, you need to get 2 arrays using a **_useContent_** - **_tsvs_** (a list of all encountered word references for this book) and **_items_** (a list of references for this verse).

```js static
 const config = {
    verse: '1',
    chapter: '1',
    projectId: 'tit,
    ref: 'master',
    languageId: 'en',
    resourceId: 'twl',
    owner: 'unfoldingWord',
    server: 'https://git.door43.org',
  };
   const { tsvs, items, markdown } = useContent({
    ...config,
  });

```

You can use useMarkRepeatedWords

```js static
const { markedWords } = useMarkRepeatedWords({ items, tsvs });
```

_For more examples, please refer to the [Styleguidist link](https://filter-translation-words-rcl.netlify.app)_

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

**IN PROGRESS**

See the [open issues](https://github.com/texttree/filter-translation-words-rcl/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. [Guidelines for external contributions.](https://forum.door43.org)

You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

If you would like to fork the repo and create a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See [LICENSE](license-url) for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Project Link: [https://github.com/texttree/filter-translation-words-rcl](https://github.com/texttree/filter-translation-words-rcl)

<p align="right">(<a href="#top">back to top</a>)</p>
