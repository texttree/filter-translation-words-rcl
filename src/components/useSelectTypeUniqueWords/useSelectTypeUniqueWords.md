### Default example

```jsx
import React from 'react';
import ReactJson from 'react-json-view';
import { useSelectTypeUniqueWords } from '@texttree/filter-translation-words-rcl';
import { useCardState, CardContent, Card } from 'translation-helps-rcl';
const items = [
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
    markdown:
      '# elder, older, old\n\n## Definition:\n\nThe term “elder” or “older” refers to people (in the Bible, usually men) who have grown old enough to become mature adults and leaders within a community. For example, elders might have gray hair, have adult children, or perhaps even have grandchildren or great-grandchildren.\n\n* The term “elder” came from the fact that elders were originally older men who, because of their age and experience, had greater wisdom.\n* In the Old Testament, the elders helped lead the Israelites in matters of justice and the Law of Moses.\n* In the New Testament, Jewish “elders” continued to be leaders in their communities and also were judges for the people.\n* In the early Christian churches, Christian “elders” gave spiritual leadership to the local assemblies of believers. Elders in these churches sometimes included young men who were spiritually mature.\n* This term could be translated as “older men” or “spiritually mature men leading the church.”\n\n## Bible References:\n\n* [1 Chronicles 11:1-3](rc://en/tn/help/1ch/11/01)\n* [1 Timothy 3:1-3](rc://en/tn/help/1ti/03/01)\n* [1 Timothy 4:14](rc://en/tn/help/1ti/04/14)\n* [Acts 5:19-21](rc://en/tn/help/act/05/19)\n* [Acts 14:23](rc://en/tn/help/act/14/23)\n* [Mark 11:28](rc://en/tn/help/mrk/11/28)\n* [Matthew 21:23-24](rc://en/tn/help/mat/21/23)\n\n## Word Data:\n\n* Strong’s: H1419, H2205, H7868, G10870, G31870, G42440, G42450, G48500\n',
    fetchResponse: {
      data: {
        name: 'elder.md',
        path: 'bible/other/elder.md',
        sha: '3c8956c1620724fb0964b214aebed1698aff9063',
        type: 'file',
        size: 1438,
        encoding: 'base64',
        content:
          'IyBlbGRlciwgb2xkZXIsIG9sZAoKIyMgRGVmaW5pdGlvbjoKClRoZSB0ZXJtIOKAnGVsZGVy4oCdIG9yIOKAnG9sZGVy4oCdIHJlZmVycyB0byBwZW9wbGUgKGluIHRoZSBCaWJsZSwgdXN1YWxseSBtZW4pIHdobyBoYXZlIGdyb3duIG9sZCBlbm91Z2ggdG8gYmVjb21lIG1hdHVyZSBhZHVsdHMgYW5kIGxlYWRlcnMgd2l0aGluIGEgY29tbXVuaXR5LiBGb3IgZXhhbXBsZSwgZWxkZXJzIG1pZ2h0IGhhdmUgZ3JheSBoYWlyLCBoYXZlIGFkdWx0IGNoaWxkcmVuLCBvciBwZXJoYXBzIGV2ZW4gaGF2ZSBncmFuZGNoaWxkcmVuIG9yIGdyZWF0LWdyYW5kY2hpbGRyZW4uCgoqIFRoZSB0ZXJtIOKAnGVsZGVy4oCdIGNhbWUgZnJvbSB0aGUgZmFjdCB0aGF0IGVsZGVycyB3ZXJlIG9yaWdpbmFsbHkgb2xkZXIgbWVuIHdobywgYmVjYXVzZSBvZiB0aGVpciBhZ2UgYW5kIGV4cGVyaWVuY2UsIGhhZCBncmVhdGVyIHdpc2RvbS4KKiBJbiB0aGUgT2xkIFRlc3RhbWVudCwgdGhlIGVsZGVycyBoZWxwZWQgbGVhZCB0aGUgSXNyYWVsaXRlcyBpbiBtYXR0ZXJzIG9mIGp1c3RpY2UgYW5kIHRoZSBMYXcgb2YgTW9zZXMuCiogSW4gdGhlIE5ldyBUZXN0YW1lbnQsIEpld2lzaCDigJxlbGRlcnPigJ0gY29udGludWVkIHRvIGJlIGxlYWRlcnMgaW4gdGhlaXIgY29tbXVuaXRpZXMgYW5kIGFsc28gd2VyZSBqdWRnZXMgZm9yIHRoZSBwZW9wbGUuCiogSW4gdGhlIGVhcmx5IENocmlzdGlhbiBjaHVyY2hlcywgQ2hyaXN0aWFuIOKAnGVsZGVyc+KAnSBnYXZlIHNwaXJpdHVhbCBsZWFkZXJzaGlwIHRvIHRoZSBsb2NhbCBhc3NlbWJsaWVzIG9mIGJlbGlldmVycy4gRWxkZXJzIGluIHRoZXNlIGNodXJjaGVzIHNvbWV0aW1lcyBpbmNsdWRlZCB5b3VuZyBtZW4gd2hvIHdlcmUgc3Bpcml0dWFsbHkgbWF0dXJlLgoqIFRoaXMgdGVybSBjb3VsZCBiZSB0cmFuc2xhdGVkIGFzIOKAnG9sZGVyIG1lbuKAnSBvciDigJxzcGlyaXR1YWxseSBtYXR1cmUgbWVuIGxlYWRpbmcgdGhlIGNodXJjaC7igJ0KCiMjIEJpYmxlIFJlZmVyZW5jZXM6CgoqIFsxIENocm9uaWNsZXMgMTE6MS0zXShyYzovL2VuL3RuL2hlbHAvMWNoLzExLzAxKQoqIFsxIFRpbW90aHkgMzoxLTNdKHJjOi8vZW4vdG4vaGVscC8xdGkvMDMvMDEpCiogWzEgVGltb3RoeSA0OjE0XShyYzovL2VuL3RuL2hlbHAvMXRpLzA0LzE0KQoqIFtBY3RzIDU6MTktMjFdKHJjOi8vZW4vdG4vaGVscC9hY3QvMDUvMTkpCiogW0FjdHMgMTQ6MjNdKHJjOi8vZW4vdG4vaGVscC9hY3QvMTQvMjMpCiogW01hcmsgMTE6MjhdKHJjOi8vZW4vdG4vaGVscC9tcmsvMTEvMjgpCiogW01hdHRoZXcgMjE6MjMtMjRdKHJjOi8vZW4vdG4vaGVscC9tYXQvMjEvMjMpCgojIyBXb3JkIERhdGE6CgoqIFN0cm9uZ+KAmXM6IEgxNDE5LCBIMjIwNSwgSDc4NjgsIEcxMDg3MCwgRzMxODcwLCBHNDI0NDAsIEc0MjQ1MCwgRzQ4NTAwCg==',
        target: null,
        url: 'https://git.door43.org/api/v1/repos/unfoldingWord/en_tw/contents/bible/other/elder.md?ref=master',
        html_url:
          'https://git.door43.org/unfoldingWord/en_tw/src/branch/master/bible/other/elder.md',
        git_url:
          'https://git.door43.org/api/v1/repos/unfoldingWord/en_tw/git/blobs/3c8956c1620724fb0964b214aebed1698aff9063',
        download_url:
          'https://git.door43.org/unfoldingWord/en_tw/raw/branch/master/bible/other/elder.md',
        submodule_git_url: null,
        _links: {
          self: 'https://git.door43.org/api/v1/repos/unfoldingWord/en_tw/contents/bible/other/elder.md?ref=master',
          git: 'https://git.door43.org/api/v1/repos/unfoldingWord/en_tw/git/blobs/3c8956c1620724fb0964b214aebed1698aff9063',
          html: 'https://git.door43.org/unfoldingWord/en_tw/src/branch/master/bible/other/elder.md',
        },
      },
      status: 200,
      statusText: 'OK',
      headers: {
        'content-type': 'application/json;charset=utf-8',
      },
      config: {
        transformRequest: {},
        transformResponse: {},
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        headers: {
          Accept: 'application/json, text/plain, */*',
        },
        method: 'get',
        crossDomain: true,
        baseURL: 'https://git.door43.org',
        server: 'https://git.door43.org',
        params: {},
        url: 'https://git.door43.org/api/v1/repos/unfoldingword/en_tw/contents/bible/other/elder.md?ref=master',
      },
      request: {},
    },
    filePath: 'bible/other/elder.md',
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
    markdown:
      '# beloved\n\n## Definition:\n\nThe term “beloved” is an expression of affection that describes someone who is loved and dear to someone else.\n\n* The term “beloved” literally means “loved (one)” or “(who is) loved.”\n* God refers to Jesus as his “beloved Son.”\n* In their letters to Christian churches, the apostles frequently address their fellow believers as “beloved.”\n\n## Translation Suggestions:\n\n* This term could also be translated as “loved” or “loved one” or “well-loved,” or “very dear.”\n* In the context of talking about a close friend, this could be translated as “my dear friend” or “my close friend.” In English it is natural to say “my dear friend, Paul” or “Paul, who is my dear friend.” Other languages may find it more natural to order this in a different way.\n* Note that the word “beloved” comes from the word for God’s love, which is unconditional, unselfish, and sacrificial.\n\n(See also: [love](../kt/love.md))\n\n## Bible References:\n\n* [1 Corinthians 4:14](rc://en/tn/help/1co/04/14)\n* [1 John 3:2](rc://en/tn/help/1jn/03/02)\n* [1 John 4:7](rc://en/tn/help/1jn/04/07)\n* [Mark 1:11](rc://en/tn/help/mrk/01/11)\n* [Mark 12:6](rc://en/tn/help/mrk/12/06)\n* [Revelation 20:9](rc://en/tn/help/rev/20/09)\n* [Romans 16:8](rc://en/tn/help/rom/16/08)\n* [Song of Songs 1:14](rc://en/tn/help/sng/01/14)\n\n## Word Data:\n\n* Strong’s: H0157, H1730, H2532, H3033, H3039, H4261, G00250, G00270, G52070\n',
    fetchResponse: {
      data: {
        name: 'beloved.md',
        path: 'bible/kt/beloved.md',
        sha: '6b39edeb6a63245ca17add56dc5051b5d4320270',
        type: 'file',
        size: 1463,
        encoding: 'base64',
        content:
          'IyBiZWxvdmVkCgojIyBEZWZpbml0aW9uOgoKVGhlIHRlcm0g4oCcYmVsb3ZlZOKAnSBpcyBhbiBleHByZXNzaW9uIG9mIGFmZmVjdGlvbiB0aGF0IGRlc2NyaWJlcyBzb21lb25lIHdobyBpcyBsb3ZlZCBhbmQgZGVhciB0byBzb21lb25lIGVsc2UuCgoqIFRoZSB0ZXJtIOKAnGJlbG92ZWTigJ0gbGl0ZXJhbGx5IG1lYW5zIOKAnGxvdmVkIChvbmUp4oCdIG9yIOKAnCh3aG8gaXMpIGxvdmVkLuKAnQoqIEdvZCByZWZlcnMgdG8gSmVzdXMgYXMgaGlzIOKAnGJlbG92ZWQgU29uLuKAnQoqIEluIHRoZWlyIGxldHRlcnMgdG8gQ2hyaXN0aWFuIGNodXJjaGVzLCB0aGUgYXBvc3RsZXMgZnJlcXVlbnRseSBhZGRyZXNzIHRoZWlyIGZlbGxvdyBiZWxpZXZlcnMgYXMg4oCcYmVsb3ZlZC7igJ0KCiMjIFRyYW5zbGF0aW9uIFN1Z2dlc3Rpb25zOgoKKiBUaGlzIHRlcm0gY291bGQgYWxzbyBiZSB0cmFuc2xhdGVkIGFzIOKAnGxvdmVk4oCdIG9yIOKAnGxvdmVkIG9uZeKAnSBvciDigJx3ZWxsLWxvdmVkLOKAnSBvciDigJx2ZXJ5IGRlYXIu4oCdCiogSW4gdGhlIGNvbnRleHQgb2YgdGFsa2luZyBhYm91dCBhIGNsb3NlIGZyaWVuZCwgdGhpcyBjb3VsZCBiZSB0cmFuc2xhdGVkIGFzIOKAnG15IGRlYXIgZnJpZW5k4oCdIG9yIOKAnG15IGNsb3NlIGZyaWVuZC7igJ0gSW4gRW5nbGlzaCBpdCBpcyBuYXR1cmFsIHRvIHNheSDigJxteSBkZWFyIGZyaWVuZCwgUGF1bOKAnSBvciDigJxQYXVsLCB3aG8gaXMgbXkgZGVhciBmcmllbmQu4oCdIE90aGVyIGxhbmd1YWdlcyBtYXkgZmluZCBpdCBtb3JlIG5hdHVyYWwgdG8gb3JkZXIgdGhpcyBpbiBhIGRpZmZlcmVudCB3YXkuCiogTm90ZSB0aGF0IHRoZSB3b3JkIOKAnGJlbG92ZWTigJ0gY29tZXMgZnJvbSB0aGUgd29yZCBmb3IgR29k4oCZcyBsb3ZlLCB3aGljaCBpcyB1bmNvbmRpdGlvbmFsLCB1bnNlbGZpc2gsIGFuZCBzYWNyaWZpY2lhbC4KCihTZWUgYWxzbzogW2xvdmVdKC4uL2t0L2xvdmUubWQpKQoKIyMgQmlibGUgUmVmZXJlbmNlczoKCiogWzEgQ29yaW50aGlhbnMgNDoxNF0ocmM6Ly9lbi90bi9oZWxwLzFjby8wNC8xNCkKKiBbMSBKb2huIDM6Ml0ocmM6Ly9lbi90bi9oZWxwLzFqbi8wMy8wMikKKiBbMSBKb2huIDQ6N10ocmM6Ly9lbi90bi9oZWxwLzFqbi8wNC8wNykKKiBbTWFyayAxOjExXShyYzovL2VuL3RuL2hlbHAvbXJrLzAxLzExKQoqIFtNYXJrIDEyOjZdKHJjOi8vZW4vdG4vaGVscC9tcmsvMTIvMDYpCiogW1JldmVsYXRpb24gMjA6OV0ocmM6Ly9lbi90bi9oZWxwL3Jldi8yMC8wOSkKKiBbUm9tYW5zIDE2OjhdKHJjOi8vZW4vdG4vaGVscC9yb20vMTYvMDgpCiogW1Nvbmcgb2YgU29uZ3MgMToxNF0ocmM6Ly9lbi90bi9oZWxwL3NuZy8wMS8xNCkKCiMjIFdvcmQgRGF0YToKCiogU3Ryb25n4oCZczogSDAxNTcsIEgxNzMwLCBIMjUzMiwgSDMwMzMsIEgzMDM5LCBINDI2MSwgRzAwMjUwLCBHMDAyNzAsIEc1MjA3MAo=',
        target: null,
        url: 'https://git.door43.org/api/v1/repos/unfoldingWord/en_tw/contents/bible/kt/beloved.md?ref=master',
        html_url:
          'https://git.door43.org/unfoldingWord/en_tw/src/branch/master/bible/kt/beloved.md',
        git_url:
          'https://git.door43.org/api/v1/repos/unfoldingWord/en_tw/git/blobs/6b39edeb6a63245ca17add56dc5051b5d4320270',
        download_url:
          'https://git.door43.org/unfoldingWord/en_tw/raw/branch/master/bible/kt/beloved.md',
        submodule_git_url: null,
        _links: {
          self: 'https://git.door43.org/api/v1/repos/unfoldingWord/en_tw/contents/bible/kt/beloved.md?ref=master',
          git: 'https://git.door43.org/api/v1/repos/unfoldingWord/en_tw/git/blobs/6b39edeb6a63245ca17add56dc5051b5d4320270',
          html: 'https://git.door43.org/unfoldingWord/en_tw/src/branch/master/bible/kt/beloved.md',
        },
      },
      status: 200,
      statusText: 'OK',
      headers: {
        'content-type': 'application/json;charset=utf-8',
      },
      config: {
        transformRequest: {},
        transformResponse: {},
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        headers: {
          Accept: 'application/json, text/plain, */*',
        },
        method: 'get',
        crossDomain: true,
        baseURL: 'https://git.door43.org',
        server: 'https://git.door43.org',
        params: {},
        url: 'https://git.door43.org/api/v1/repos/unfoldingword/en_tw/contents/bible/kt/beloved.md?ref=master',
      },
      request: {},
    },
    filePath: 'bible/kt/beloved.md',
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
    markdown:
      '# love, beloved\n\n## Definition:\n\nTo love another person is to care for that person and do things that will benefit him. There are different meanings for “love” some languages may express using different words:\n\n1. The kind of love that comes from God is focused on the good of others even when it doesn’t benefit oneself. This kind of love cares for others, no matter what they do. God himself is love and is the source of true love.\n\n    * Jesus showed this kind of love by sacrificing his life in order to rescue us from sin and death. He also taught his followers to love others sacrificially.\n    * When people love others with this kind of love, they act in ways that show they are thinking of what will cause the others to thrive. This kind of love especially includes forgiving others.\n    * In the ULT, the word “love” refers to this kind of sacrificial love, unless a Translation Note indicates a different meaning.\n\n2. Another word in the New Testament refers to brotherly love, or love for a friend or family member.\n\n    * This term refers to natural human love between friends or relatives.\n    * The term can also be used in such contexts as, “They love to sit in the most important seats at a banquet.” This means that they “like very much” or “greatly desire” to do that.\n\n3. The word “love” can also refer to romantic love between a man and a woman.\n\n## Translation Suggestions:\n\n* Unless indicated otherwise in a Translation Note, the word “love” in the ULT refers to the kind of sacrificial love that comes from God.\n* Some languages may have a special word for the kind of unselfish, sacrificial love that God has. Ways to translate this might include, “devoted, faithful caring” or “care for unselfishly” or “love from God.” Make sure that the word used to translate God’s love can include giving up one’s own interests to benefit others and loving others no matter what they do.\n* Sometimes the English word “love” describes the deep caring that people have for friends and family members. Some languages might translate this with a word or phrase that means “like very much” or “care for” or “have strong affection for.”\n* In contexts where the word “love” is used to express a strong preference for something, this could be translated by “strongly prefer” or “like very much” or “greatly desire.”\n* Some languages may also have a separate word that refers to romantic or sexual love between a husband and wife.\n* Many languages must express “love” as an action. So for example, they might translate “love is patient, love is kind” as, “when a person loves someone, he is patient with him and kind to him.”\n\n(See also: [covenant](../kt/covenant.md), [death](../other/death.md), [sacrifice](../other/sacrifice.md), [save](../kt/save.md), [sin](../kt/sin.md))\n\n## Bible References:\n\n* [1 Corinthians 13:7](rc://en/tn/help/1co/13/07)\n* [1 John 3:2](rc://en/tn/help/1jn/03/02)\n* [1 Thessalonians 4:10](rc://en/tn/help/1th/04/10)\n* [Galatians 5:23](rc://en/tn/help/gal/05/23)\n* [Genesis 29:18](rc://en/tn/help/gen/29/18)\n* [Isaiah 56:6](rc://en/tn/help/isa/56/06)\n* [Jeremiah 2:2](rc://en/tn/help/jer/02/02)\n* [John 3:16](rc://en/tn/help/jhn/03/16)\n* [Matthew 10:37](rc://en/tn/help/mat/10/37)\n* [Nehemiah 9:32-34](rc://en/tn/help/neh/09/32)\n* [Philippians 1:9](rc://en/tn/help/php/01/09)\n* [Song of Songs 1:2](rc://en/tn/help/sng/01/02)\n\n## Examples from the Bible stories:\n\n* __[27:2](rc://en/tn/help/obs/27/02)__ The law expert replied that God’s law says, “__Love__ the Lord your God with all your heart, soul, strength, and mind. And __love__ your neighbor as yourself.”\n* __[33:8](rc://en/tn/help/obs/33/08)__ “The thorny ground is a person who hears God’s word, but, as time passes, the cares, riches, and pleasures of life choke out his __love__ for God.”\n* __[36:5](rc://en/tn/help/obs/36/05)__ As Peter was talking, a bright cloud came down on top of them and a voice from the cloud said, “This is my Son whom I __love__.”\n* __[39:10](rc://en/tn/help/obs/39/10)__ “Everyone who __loves__ the truth listens to me.”\n* __[47:1](rc://en/tn/help/obs/47/01)__ She (Lydia) __loved__ and worshiped God.\n* __[48:1](rc://en/tn/help/obs/48/01)__ When God created the world, everything was perfect. There was no sin. Adam and Eve __loved__ each other, and they __loved__ God.\n* __[49:3](rc://en/tn/help/obs/49/03)__ He (Jesus) taught that you need to __love__ other people the same way you love yourself.\n* __[49:4](rc://en/tn/help/obs/49/04)__ He (Jesus) also taught that you need to __love__ God more than you __love__ anything else, including your wealth.\n* __[49:7](rc://en/tn/help/obs/49/07)__ Jesus taught that God __loves__ sinners very much.\n* __[49:9](rc://en/tn/help/obs/49/09)__ But God __loved__ everyone in the world so much that he gave his only Son so that whoever believes in Jesus will not be punished for his sins, but will live with God forever.\n* __[49:13](rc://en/tn/help/obs/49/13)__ God __loves__ you and wants you to believe in Jesus so he can have a close relationship with you.\n\n## Word Data:\n\n* Strong’s: H0157, H0158, H0159, H0160, H2245, H2617, H2836, H3039, H4261, H5689, H5690, H5691, H7355, H7356, H7453, H7474, G00250, G00260, G53600, G53610, G53620, G53630, G53650, G53670, G53680, G53690, G53770, G53810, G53820, G53830, G53880\n',
    fetchResponse: {
      data: {
        name: 'love.md',
        path: 'bible/kt/love.md',
        sha: '8beb5243b0c2ef66ff473afe4c7ddd54d82b8ceb',
        type: 'file',
        size: 5391,
        encoding: 'base64',
        content:
          'IyBsb3ZlLCBiZWxvdmVkCgojIyBEZWZpbml0aW9uOgoKVG8gbG92ZSBhbm90aGVyIHBlcnNvbiBpcyB0byBjYXJlIGZvciB0aGF0IHBlcnNvbiBhbmQgZG8gdGhpbmdzIHRoYXQgd2lsbCBiZW5lZml0IGhpbS4gVGhlcmUgYXJlIGRpZmZlcmVudCBtZWFuaW5ncyBmb3Ig4oCcbG92ZeKAnSBzb21lIGxhbmd1YWdlcyBtYXkgZXhwcmVzcyB1c2luZyBkaWZmZXJlbnQgd29yZHM6CgoxLiBUaGUga2luZCBvZiBsb3ZlIHRoYXQgY29tZXMgZnJvbSBHb2QgaXMgZm9jdXNlZCBvbiB0aGUgZ29vZCBvZiBvdGhlcnMgZXZlbiB3aGVuIGl0IGRvZXNu4oCZdCBiZW5lZml0IG9uZXNlbGYuIFRoaXMga2luZCBvZiBsb3ZlIGNhcmVzIGZvciBvdGhlcnMsIG5vIG1hdHRlciB3aGF0IHRoZXkgZG8uIEdvZCBoaW1zZWxmIGlzIGxvdmUgYW5kIGlzIHRoZSBzb3VyY2Ugb2YgdHJ1ZSBsb3ZlLgoKICAgICogSmVzdXMgc2hvd2VkIHRoaXMga2luZCBvZiBsb3ZlIGJ5IHNhY3JpZmljaW5nIGhpcyBsaWZlIGluIG9yZGVyIHRvIHJlc2N1ZSB1cyBmcm9tIHNpbiBhbmQgZGVhdGguIEhlIGFsc28gdGF1Z2h0IGhpcyBmb2xsb3dlcnMgdG8gbG92ZSBvdGhlcnMgc2FjcmlmaWNpYWxseS4KICAgICogV2hlbiBwZW9wbGUgbG92ZSBvdGhlcnMgd2l0aCB0aGlzIGtpbmQgb2YgbG92ZSwgdGhleSBhY3QgaW4gd2F5cyB0aGF0IHNob3cgdGhleSBhcmUgdGhpbmtpbmcgb2Ygd2hhdCB3aWxsIGNhdXNlIHRoZSBvdGhlcnMgdG8gdGhyaXZlLiBUaGlzIGtpbmQgb2YgbG92ZSBlc3BlY2lhbGx5IGluY2x1ZGVzIGZvcmdpdmluZyBvdGhlcnMuCiAgICAqIEluIHRoZSBVTFQsIHRoZSB3b3JkIOKAnGxvdmXigJ0gcmVmZXJzIHRvIHRoaXMga2luZCBvZiBzYWNyaWZpY2lhbCBsb3ZlLCB1bmxlc3MgYSBUcmFuc2xhdGlvbiBOb3RlIGluZGljYXRlcyBhIGRpZmZlcmVudCBtZWFuaW5nLgoKMi4gQW5vdGhlciB3b3JkIGluIHRoZSBOZXcgVGVzdGFtZW50IHJlZmVycyB0byBicm90aGVybHkgbG92ZSwgb3IgbG92ZSBmb3IgYSBmcmllbmQgb3IgZmFtaWx5IG1lbWJlci4KCiAgICAqIFRoaXMgdGVybSByZWZlcnMgdG8gbmF0dXJhbCBodW1hbiBsb3ZlIGJldHdlZW4gZnJpZW5kcyBvciByZWxhdGl2ZXMuCiAgICAqIFRoZSB0ZXJtIGNhbiBhbHNvIGJlIHVzZWQgaW4gc3VjaCBjb250ZXh0cyBhcywg4oCcVGhleSBsb3ZlIHRvIHNpdCBpbiB0aGUgbW9zdCBpbXBvcnRhbnQgc2VhdHMgYXQgYSBiYW5xdWV0LuKAnSBUaGlzIG1lYW5zIHRoYXQgdGhleSDigJxsaWtlIHZlcnkgbXVjaOKAnSBvciDigJxncmVhdGx5IGRlc2lyZeKAnSB0byBkbyB0aGF0LgoKMy4gVGhlIHdvcmQg4oCcbG92ZeKAnSBjYW4gYWxzbyByZWZlciB0byByb21hbnRpYyBsb3ZlIGJldHdlZW4gYSBtYW4gYW5kIGEgd29tYW4uCgojIyBUcmFuc2xhdGlvbiBTdWdnZXN0aW9uczoKCiogVW5sZXNzIGluZGljYXRlZCBvdGhlcndpc2UgaW4gYSBUcmFuc2xhdGlvbiBOb3RlLCB0aGUgd29yZCDigJxsb3Zl4oCdIGluIHRoZSBVTFQgcmVmZXJzIHRvIHRoZSBraW5kIG9mIHNhY3JpZmljaWFsIGxvdmUgdGhhdCBjb21lcyBmcm9tIEdvZC4KKiBTb21lIGxhbmd1YWdlcyBtYXkgaGF2ZSBhIHNwZWNpYWwgd29yZCBmb3IgdGhlIGtpbmQgb2YgdW5zZWxmaXNoLCBzYWNyaWZpY2lhbCBsb3ZlIHRoYXQgR29kIGhhcy4gV2F5cyB0byB0cmFuc2xhdGUgdGhpcyBtaWdodCBpbmNsdWRlLCDigJxkZXZvdGVkLCBmYWl0aGZ1bCBjYXJpbmfigJ0gb3Ig4oCcY2FyZSBmb3IgdW5zZWxmaXNobHnigJ0gb3Ig4oCcbG92ZSBmcm9tIEdvZC7igJ0gTWFrZSBzdXJlIHRoYXQgdGhlIHdvcmQgdXNlZCB0byB0cmFuc2xhdGUgR29k4oCZcyBsb3ZlIGNhbiBpbmNsdWRlIGdpdmluZyB1cCBvbmXigJlzIG93biBpbnRlcmVzdHMgdG8gYmVuZWZpdCBvdGhlcnMgYW5kIGxvdmluZyBvdGhlcnMgbm8gbWF0dGVyIHdoYXQgdGhleSBkby4KKiBTb21ldGltZXMgdGhlIEVuZ2xpc2ggd29yZCDigJxsb3Zl4oCdIGRlc2NyaWJlcyB0aGUgZGVlcCBjYXJpbmcgdGhhdCBwZW9wbGUgaGF2ZSBmb3IgZnJpZW5kcyBhbmQgZmFtaWx5IG1lbWJlcnMuIFNvbWUgbGFuZ3VhZ2VzIG1pZ2h0IHRyYW5zbGF0ZSB0aGlzIHdpdGggYSB3b3JkIG9yIHBocmFzZSB0aGF0IG1lYW5zIOKAnGxpa2UgdmVyeSBtdWNo4oCdIG9yIOKAnGNhcmUgZm9y4oCdIG9yIOKAnGhhdmUgc3Ryb25nIGFmZmVjdGlvbiBmb3Iu4oCdCiogSW4gY29udGV4dHMgd2hlcmUgdGhlIHdvcmQg4oCcbG92ZeKAnSBpcyB1c2VkIHRvIGV4cHJlc3MgYSBzdHJvbmcgcHJlZmVyZW5jZSBmb3Igc29tZXRoaW5nLCB0aGlzIGNvdWxkIGJlIHRyYW5zbGF0ZWQgYnkg4oCcc3Ryb25nbHkgcHJlZmVy4oCdIG9yIOKAnGxpa2UgdmVyeSBtdWNo4oCdIG9yIOKAnGdyZWF0bHkgZGVzaXJlLuKAnQoqIFNvbWUgbGFuZ3VhZ2VzIG1heSBhbHNvIGhhdmUgYSBzZXBhcmF0ZSB3b3JkIHRoYXQgcmVmZXJzIHRvIHJvbWFudGljIG9yIHNleHVhbCBsb3ZlIGJldHdlZW4gYSBodXNiYW5kIGFuZCB3aWZlLgoqIE1hbnkgbGFuZ3VhZ2VzIG11c3QgZXhwcmVzcyDigJxsb3Zl4oCdIGFzIGFuIGFjdGlvbi4gU28gZm9yIGV4YW1wbGUsIHRoZXkgbWlnaHQgdHJhbnNsYXRlIOKAnGxvdmUgaXMgcGF0aWVudCwgbG92ZSBpcyBraW5k4oCdIGFzLCDigJx3aGVuIGEgcGVyc29uIGxvdmVzIHNvbWVvbmUsIGhlIGlzIHBhdGllbnQgd2l0aCBoaW0gYW5kIGtpbmQgdG8gaGltLuKAnQoKKFNlZSBhbHNvOiBbY292ZW5hbnRdKC4uL2t0L2NvdmVuYW50Lm1kKSwgW2RlYXRoXSguLi9vdGhlci9kZWF0aC5tZCksIFtzYWNyaWZpY2VdKC4uL290aGVyL3NhY3JpZmljZS5tZCksIFtzYXZlXSguLi9rdC9zYXZlLm1kKSwgW3Npbl0oLi4va3Qvc2luLm1kKSkKCiMjIEJpYmxlIFJlZmVyZW5jZXM6CgoqIFsxIENvcmludGhpYW5zIDEzOjddKHJjOi8vZW4vdG4vaGVscC8xY28vMTMvMDcpCiogWzEgSm9obiAzOjJdKHJjOi8vZW4vdG4vaGVscC8xam4vMDMvMDIpCiogWzEgVGhlc3NhbG9uaWFucyA0OjEwXShyYzovL2VuL3RuL2hlbHAvMXRoLzA0LzEwKQoqIFtHYWxhdGlhbnMgNToyM10ocmM6Ly9lbi90bi9oZWxwL2dhbC8wNS8yMykKKiBbR2VuZXNpcyAyOToxOF0ocmM6Ly9lbi90bi9oZWxwL2dlbi8yOS8xOCkKKiBbSXNhaWFoIDU2OjZdKHJjOi8vZW4vdG4vaGVscC9pc2EvNTYvMDYpCiogW0plcmVtaWFoIDI6Ml0ocmM6Ly9lbi90bi9oZWxwL2plci8wMi8wMikKKiBbSm9obiAzOjE2XShyYzovL2VuL3RuL2hlbHAvamhuLzAzLzE2KQoqIFtNYXR0aGV3IDEwOjM3XShyYzovL2VuL3RuL2hlbHAvbWF0LzEwLzM3KQoqIFtOZWhlbWlhaCA5OjMyLTM0XShyYzovL2VuL3RuL2hlbHAvbmVoLzA5LzMyKQoqIFtQaGlsaXBwaWFucyAxOjldKHJjOi8vZW4vdG4vaGVscC9waHAvMDEvMDkpCiogW1Nvbmcgb2YgU29uZ3MgMToyXShyYzovL2VuL3RuL2hlbHAvc25nLzAxLzAyKQoKIyMgRXhhbXBsZXMgZnJvbSB0aGUgQmlibGUgc3RvcmllczoKCiogX19bMjc6Ml0ocmM6Ly9lbi90bi9oZWxwL29icy8yNy8wMilfXyBUaGUgbGF3IGV4cGVydCByZXBsaWVkIHRoYXQgR29k4oCZcyBsYXcgc2F5cywg4oCcX19Mb3ZlX18gdGhlIExvcmQgeW91ciBHb2Qgd2l0aCBhbGwgeW91ciBoZWFydCwgc291bCwgc3RyZW5ndGgsIGFuZCBtaW5kLiBBbmQgX19sb3ZlX18geW91ciBuZWlnaGJvciBhcyB5b3Vyc2VsZi7igJ0KKiBfX1szMzo4XShyYzovL2VuL3RuL2hlbHAvb2JzLzMzLzA4KV9fIOKAnFRoZSB0aG9ybnkgZ3JvdW5kIGlzIGEgcGVyc29uIHdobyBoZWFycyBHb2TigJlzIHdvcmQsIGJ1dCwgYXMgdGltZSBwYXNzZXMsIHRoZSBjYXJlcywgcmljaGVzLCBhbmQgcGxlYXN1cmVzIG9mIGxpZmUgY2hva2Ugb3V0IGhpcyBfX2xvdmVfXyBmb3IgR29kLuKAnQoqIF9fWzM2OjVdKHJjOi8vZW4vdG4vaGVscC9vYnMvMzYvMDUpX18gQXMgUGV0ZXIgd2FzIHRhbGtpbmcsIGEgYnJpZ2h0IGNsb3VkIGNhbWUgZG93biBvbiB0b3Agb2YgdGhlbSBhbmQgYSB2b2ljZSBmcm9tIHRoZSBjbG91ZCBzYWlkLCDigJxUaGlzIGlzIG15IFNvbiB3aG9tIEkgX19sb3ZlX18u4oCdCiogX19bMzk6MTBdKHJjOi8vZW4vdG4vaGVscC9vYnMvMzkvMTApX18g4oCcRXZlcnlvbmUgd2hvIF9fbG92ZXNfXyB0aGUgdHJ1dGggbGlzdGVucyB0byBtZS7igJ0KKiBfX1s0NzoxXShyYzovL2VuL3RuL2hlbHAvb2JzLzQ3LzAxKV9fIFNoZSAoTHlkaWEpIF9fbG92ZWRfXyBhbmQgd29yc2hpcGVkIEdvZC4KKiBfX1s0ODoxXShyYzovL2VuL3RuL2hlbHAvb2JzLzQ4LzAxKV9fIFdoZW4gR29kIGNyZWF0ZWQgdGhlIHdvcmxkLCBldmVyeXRoaW5nIHdhcyBwZXJmZWN0LiBUaGVyZSB3YXMgbm8gc2luLiBBZGFtIGFuZCBFdmUgX19sb3ZlZF9fIGVhY2ggb3RoZXIsIGFuZCB0aGV5IF9fbG92ZWRfXyBHb2QuCiogX19bNDk6M10ocmM6Ly9lbi90bi9oZWxwL29icy80OS8wMylfXyBIZSAoSmVzdXMpIHRhdWdodCB0aGF0IHlvdSBuZWVkIHRvIF9fbG92ZV9fIG90aGVyIHBlb3BsZSB0aGUgc2FtZSB3YXkgeW91IGxvdmUgeW91cnNlbGYuCiogX19bNDk6NF0ocmM6Ly9lbi90bi9oZWxwL29icy80OS8wNClfXyBIZSAoSmVzdXMpIGFsc28gdGF1Z2h0IHRoYXQgeW91IG5lZWQgdG8gX19sb3ZlX18gR29kIG1vcmUgdGhhbiB5b3UgX19sb3ZlX18gYW55dGhpbmcgZWxzZSwgaW5jbHVkaW5nIHlvdXIgd2VhbHRoLgoqIF9fWzQ5OjddKHJjOi8vZW4vdG4vaGVscC9vYnMvNDkvMDcpX18gSmVzdXMgdGF1Z2h0IHRoYXQgR29kIF9fbG92ZXNfXyBzaW5uZXJzIHZlcnkgbXVjaC4KKiBfX1s0OTo5XShyYzovL2VuL3RuL2hlbHAvb2JzLzQ5LzA5KV9fIEJ1dCBHb2QgX19sb3ZlZF9fIGV2ZXJ5b25lIGluIHRoZSB3b3JsZCBzbyBtdWNoIHRoYXQgaGUgZ2F2ZSBoaXMgb25seSBTb24gc28gdGhhdCB3aG9ldmVyIGJlbGlldmVzIGluIEplc3VzIHdpbGwgbm90IGJlIHB1bmlzaGVkIGZvciBoaXMgc2lucywgYnV0IHdpbGwgbGl2ZSB3aXRoIEdvZCBmb3JldmVyLgoqIF9fWzQ5OjEzXShyYzovL2VuL3RuL2hlbHAvb2JzLzQ5LzEzKV9fIEdvZCBfX2xvdmVzX18geW91IGFuZCB3YW50cyB5b3UgdG8gYmVsaWV2ZSBpbiBKZXN1cyBzbyBoZSBjYW4gaGF2ZSBhIGNsb3NlIHJlbGF0aW9uc2hpcCB3aXRoIHlvdS4KCiMjIFdvcmQgRGF0YToKCiogU3Ryb25n4oCZczogSDAxNTcsIEgwMTU4LCBIMDE1OSwgSDAxNjAsIEgyMjQ1LCBIMjYxNywgSDI4MzYsIEgzMDM5LCBINDI2MSwgSDU2ODksIEg1NjkwLCBINTY5MSwgSDczNTUsIEg3MzU2LCBINzQ1MywgSDc0NzQsIEcwMDI1MCwgRzAwMjYwLCBHNTM2MDAsIEc1MzYxMCwgRzUzNjIwLCBHNTM2MzAsIEc1MzY1MCwgRzUzNjcwLCBHNTM2ODAsIEc1MzY5MCwgRzUzNzcwLCBHNTM4MTAsIEc1MzgyMCwgRzUzODMwLCBHNTM4ODAK',
        target: null,
        url: 'https://git.door43.org/api/v1/repos/unfoldingWord/en_tw/contents/bible/kt/love.md?ref=master',
        html_url:
          'https://git.door43.org/unfoldingWord/en_tw/src/branch/master/bible/kt/love.md',
        git_url:
          'https://git.door43.org/api/v1/repos/unfoldingWord/en_tw/git/blobs/8beb5243b0c2ef66ff473afe4c7ddd54d82b8ceb',
        download_url:
          'https://git.door43.org/unfoldingWord/en_tw/raw/branch/master/bible/kt/love.md',
        submodule_git_url: null,
        _links: {
          self: 'https://git.door43.org/api/v1/repos/unfoldingWord/en_tw/contents/bible/kt/love.md?ref=master',
          git: 'https://git.door43.org/api/v1/repos/unfoldingWord/en_tw/git/blobs/8beb5243b0c2ef66ff473afe4c7ddd54d82b8ceb',
          html: 'https://git.door43.org/unfoldingWord/en_tw/src/branch/master/bible/kt/love.md',
        },
      },
      status: 200,
      statusText: 'OK',
      headers: {
        'content-type': 'application/json;charset=utf-8',
      },
      config: {
        transformRequest: {},
        transformResponse: {},
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        headers: {
          Accept: 'application/json, text/plain, */*',
        },
        method: 'get',
        crossDomain: true,
        baseURL: 'https://git.door43.org',
        server: 'https://git.door43.org',
        params: {},
        url: 'https://git.door43.org/api/v1/repos/unfoldingword/en_tw/contents/bible/kt/love.md?ref=master',
      },
      request: {
        fromCache: true,
      },
    },
    filePath: 'bible/kt/love.md',
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
    markdown:
      '# true, truth\n\n## Definition:\n\nThe term “truth” refers to facts, events, and statements that correspond with reality. True facts describe the universe as it really exists. True events are events that actually happened. True statements are statements that are not false according the real world.\n\n* “True” things are real, genuine, actual, rightful, legitimate, and factual.\n* “Truth” means understandings, beliefs, facts, or statements that are true.\n* To say that a prophecy “came true” or “will come true” mean that it actually happened as predicted or that it will happen that way.\n* In the Bible the concept of “truth” includes the concept of acting in a way that is reliable and faithful.\n* Jesus revealed God’s truth in the words that he spoke.\n* The Bible is truth. It teaches what is true about God and about everything he has made.\n\n## Translation Suggestions:\n\n* Depending on the context and what is being described, the term “true” could also be translated by “real” or “factual” or “correct” or “right” or “certain” or “genuine.”\n* Ways to translate the term “truth” could include “what is true” or “fact” or “certainty” or “principle.”\n* The expression “come true” could also be translated as “actually happen” or “be fulfilled” or “happen as predicted.”\n* The expression “tell the truth” or “speak the truth” could also be translated as “say what is true” or “tell what really happened” or “say things that are reliable.”\n* To “accept the truth” could be translated as “believe what is true about God.”\n* In an expression such as “worship God in spirit and in truth,” the expression “in truth” could also be translated by “faithfully obeying what God has taught us.”\n\n(See also: [believe](../kt/believe.md), [faithful](../kt/faithful.md), [fulfill](../kt/fulfill.md), [obey](../other/obey.md), [prophet](../kt/prophet.md), [understand](../other/understand.md))\n\n## Bible References:\n\n* [1 Corinthians 5:6-8](rc://en/tn/help/1co/05/06)\n* [1 John 1:5-7](rc://en/tn/help/1jn/01/05)\n* [1 John 2:8](rc://en/tn/help/1jn/02/08)\n* [3 John 1:8](rc://en/tn/help/3jn/01/08)\n* [Acts 26:24-26](rc://en/tn/help/act/26/24)\n* [Colossians 1:6](rc://en/tn/help/col/01/06)\n* [Genesis 47:29-31](rc://en/tn/help/gen/47/29)\n* [James 1:18](rc://en/tn/help/jas/01/18)\n* [James 3:14](rc://en/tn/help/jas/03/14)\n* [James 5:19](rc://en/tn/help/jas/05/19)\n* [Jeremiah 4:2](rc://en/tn/help/jer/04/02)\n* [John 1:9](rc://en/tn/help/jhn/01/9)\n* [John 1:16-18](rc://en/tn/help/jhn/01/16)\n* [John 1:51](rc://en/tn/help/jhn/01/51)\n* [John 3:31-33](rc://en/tn/help/jhn/03/31)\n* [Joshua 7:19-21](rc://en/tn/help/jos/07/19)\n* [Lamentations 5:19-22](rc://en/tn/help/lam/05/19)\n* [Matthew 8:10](rc://en/tn/help/mat/08/10)\n* [Matthew 12:17](rc://en/tn/help/mat/12/17)\n* [Psalm 26:1-3](rc://en/tn/help/psa/026/001)\n* [Revelation 1:19-20](rc://en/tn/help/rev/01/19)\n* [Revelation 15:3-4](rc://en/tn/help/rev/15/03)\n\n## Examples from the Bible stories:\n\n* __[2:4](rc://en/tn/help/obs/02/04)__ The snake responded to the woman, “That is not __true__! You will not die.”\n* __[14:6](rc://en/tn/help/obs/14/06)__ Immediately Caleb and Joshua, the other two spies, said, “It is __true __ that the people of Canaan are tall and strong, but we can certainly defeat them!”\n* __[16:1](rc://en/tn/help/obs/16/01)__ The Israelites began to worship the Canaanite gods instead of Yahweh, the __true __ God.\n* __[31:8](rc://en/tn/help/obs/31/08)__ They worshiped Jesus, saying to him, “__Truly__, you are the Son of God.”\n* __[39:10](rc://en/tn/help/obs/39/10)__ “I have come to earth to tell the __truth__ about God. Everyone who loves the __truth__ listens to me.” Pilate said, “What is __truth__?”\n\n## Word Data:\n\n* Strong’s: H0199, H0389, H0403, H0529, H0530, H0543, H0544, H0551, H0571, H0935, H3321, H3330, H6237, H6656, H6965, H7187, H7189, G02250, G02260, G02270, G02280, G02300, G11030, G33030, G34830, G36890, G41030, G41370\n',
    fetchResponse: {
      data: {
        name: 'true.md',
        path: 'bible/kt/true.md',
        sha: 'f1facdaa6855b9d09e579aa3cf84279226e2927e',
        type: 'file',
        size: 4043,
        encoding: 'base64',
        content:
          'IyB0cnVlLCB0cnV0aAoKIyMgRGVmaW5pdGlvbjoKClRoZSB0ZXJtIOKAnHRydXRo4oCdIHJlZmVycyB0byBmYWN0cywgZXZlbnRzLCBhbmQgc3RhdGVtZW50cyB0aGF0IGNvcnJlc3BvbmQgd2l0aCByZWFsaXR5LiBUcnVlIGZhY3RzIGRlc2NyaWJlIHRoZSB1bml2ZXJzZSBhcyBpdCByZWFsbHkgZXhpc3RzLiBUcnVlIGV2ZW50cyBhcmUgZXZlbnRzIHRoYXQgYWN0dWFsbHkgaGFwcGVuZWQuIFRydWUgc3RhdGVtZW50cyBhcmUgc3RhdGVtZW50cyB0aGF0IGFyZSBub3QgZmFsc2UgYWNjb3JkaW5nIHRoZSByZWFsIHdvcmxkLgoKKiDigJxUcnVl4oCdIHRoaW5ncyBhcmUgcmVhbCwgZ2VudWluZSwgYWN0dWFsLCByaWdodGZ1bCwgbGVnaXRpbWF0ZSwgYW5kIGZhY3R1YWwuCiog4oCcVHJ1dGjigJ0gbWVhbnMgdW5kZXJzdGFuZGluZ3MsIGJlbGllZnMsIGZhY3RzLCBvciBzdGF0ZW1lbnRzIHRoYXQgYXJlIHRydWUuCiogVG8gc2F5IHRoYXQgYSBwcm9waGVjeSDigJxjYW1lIHRydWXigJ0gb3Ig4oCcd2lsbCBjb21lIHRydWXigJ0gbWVhbiB0aGF0IGl0IGFjdHVhbGx5IGhhcHBlbmVkIGFzIHByZWRpY3RlZCBvciB0aGF0IGl0IHdpbGwgaGFwcGVuIHRoYXQgd2F5LgoqIEluIHRoZSBCaWJsZSB0aGUgY29uY2VwdCBvZiDigJx0cnV0aOKAnSBpbmNsdWRlcyB0aGUgY29uY2VwdCBvZiBhY3RpbmcgaW4gYSB3YXkgdGhhdCBpcyByZWxpYWJsZSBhbmQgZmFpdGhmdWwuCiogSmVzdXMgcmV2ZWFsZWQgR29k4oCZcyB0cnV0aCBpbiB0aGUgd29yZHMgdGhhdCBoZSBzcG9rZS4KKiBUaGUgQmlibGUgaXMgdHJ1dGguIEl0IHRlYWNoZXMgd2hhdCBpcyB0cnVlIGFib3V0IEdvZCBhbmQgYWJvdXQgZXZlcnl0aGluZyBoZSBoYXMgbWFkZS4KCiMjIFRyYW5zbGF0aW9uIFN1Z2dlc3Rpb25zOgoKKiBEZXBlbmRpbmcgb24gdGhlIGNvbnRleHQgYW5kIHdoYXQgaXMgYmVpbmcgZGVzY3JpYmVkLCB0aGUgdGVybSDigJx0cnVl4oCdIGNvdWxkIGFsc28gYmUgdHJhbnNsYXRlZCBieSDigJxyZWFs4oCdIG9yIOKAnGZhY3R1YWzigJ0gb3Ig4oCcY29ycmVjdOKAnSBvciDigJxyaWdodOKAnSBvciDigJxjZXJ0YWlu4oCdIG9yIOKAnGdlbnVpbmUu4oCdCiogV2F5cyB0byB0cmFuc2xhdGUgdGhlIHRlcm0g4oCcdHJ1dGjigJ0gY291bGQgaW5jbHVkZSDigJx3aGF0IGlzIHRydWXigJ0gb3Ig4oCcZmFjdOKAnSBvciDigJxjZXJ0YWludHnigJ0gb3Ig4oCccHJpbmNpcGxlLuKAnQoqIFRoZSBleHByZXNzaW9uIOKAnGNvbWUgdHJ1ZeKAnSBjb3VsZCBhbHNvIGJlIHRyYW5zbGF0ZWQgYXMg4oCcYWN0dWFsbHkgaGFwcGVu4oCdIG9yIOKAnGJlIGZ1bGZpbGxlZOKAnSBvciDigJxoYXBwZW4gYXMgcHJlZGljdGVkLuKAnQoqIFRoZSBleHByZXNzaW9uIOKAnHRlbGwgdGhlIHRydXRo4oCdIG9yIOKAnHNwZWFrIHRoZSB0cnV0aOKAnSBjb3VsZCBhbHNvIGJlIHRyYW5zbGF0ZWQgYXMg4oCcc2F5IHdoYXQgaXMgdHJ1ZeKAnSBvciDigJx0ZWxsIHdoYXQgcmVhbGx5IGhhcHBlbmVk4oCdIG9yIOKAnHNheSB0aGluZ3MgdGhhdCBhcmUgcmVsaWFibGUu4oCdCiogVG8g4oCcYWNjZXB0IHRoZSB0cnV0aOKAnSBjb3VsZCBiZSB0cmFuc2xhdGVkIGFzIOKAnGJlbGlldmUgd2hhdCBpcyB0cnVlIGFib3V0IEdvZC7igJ0KKiBJbiBhbiBleHByZXNzaW9uIHN1Y2ggYXMg4oCcd29yc2hpcCBHb2QgaW4gc3Bpcml0IGFuZCBpbiB0cnV0aCzigJ0gdGhlIGV4cHJlc3Npb24g4oCcaW4gdHJ1dGjigJ0gY291bGQgYWxzbyBiZSB0cmFuc2xhdGVkIGJ5IOKAnGZhaXRoZnVsbHkgb2JleWluZyB3aGF0IEdvZCBoYXMgdGF1Z2h0IHVzLuKAnQoKKFNlZSBhbHNvOiBbYmVsaWV2ZV0oLi4va3QvYmVsaWV2ZS5tZCksIFtmYWl0aGZ1bF0oLi4va3QvZmFpdGhmdWwubWQpLCBbZnVsZmlsbF0oLi4va3QvZnVsZmlsbC5tZCksIFtvYmV5XSguLi9vdGhlci9vYmV5Lm1kKSwgW3Byb3BoZXRdKC4uL2t0L3Byb3BoZXQubWQpLCBbdW5kZXJzdGFuZF0oLi4vb3RoZXIvdW5kZXJzdGFuZC5tZCkpCgojIyBCaWJsZSBSZWZlcmVuY2VzOgoKKiBbMSBDb3JpbnRoaWFucyA1OjYtOF0ocmM6Ly9lbi90bi9oZWxwLzFjby8wNS8wNikKKiBbMSBKb2huIDE6NS03XShyYzovL2VuL3RuL2hlbHAvMWpuLzAxLzA1KQoqIFsxIEpvaG4gMjo4XShyYzovL2VuL3RuL2hlbHAvMWpuLzAyLzA4KQoqIFszIEpvaG4gMTo4XShyYzovL2VuL3RuL2hlbHAvM2puLzAxLzA4KQoqIFtBY3RzIDI2OjI0LTI2XShyYzovL2VuL3RuL2hlbHAvYWN0LzI2LzI0KQoqIFtDb2xvc3NpYW5zIDE6Nl0ocmM6Ly9lbi90bi9oZWxwL2NvbC8wMS8wNikKKiBbR2VuZXNpcyA0NzoyOS0zMV0ocmM6Ly9lbi90bi9oZWxwL2dlbi80Ny8yOSkKKiBbSmFtZXMgMToxOF0ocmM6Ly9lbi90bi9oZWxwL2phcy8wMS8xOCkKKiBbSmFtZXMgMzoxNF0ocmM6Ly9lbi90bi9oZWxwL2phcy8wMy8xNCkKKiBbSmFtZXMgNToxOV0ocmM6Ly9lbi90bi9oZWxwL2phcy8wNS8xOSkKKiBbSmVyZW1pYWggNDoyXShyYzovL2VuL3RuL2hlbHAvamVyLzA0LzAyKQoqIFtKb2huIDE6OV0ocmM6Ly9lbi90bi9oZWxwL2pobi8wMS85KQoqIFtKb2huIDE6MTYtMThdKHJjOi8vZW4vdG4vaGVscC9qaG4vMDEvMTYpCiogW0pvaG4gMTo1MV0ocmM6Ly9lbi90bi9oZWxwL2pobi8wMS81MSkKKiBbSm9obiAzOjMxLTMzXShyYzovL2VuL3RuL2hlbHAvamhuLzAzLzMxKQoqIFtKb3NodWEgNzoxOS0yMV0ocmM6Ly9lbi90bi9oZWxwL2pvcy8wNy8xOSkKKiBbTGFtZW50YXRpb25zIDU6MTktMjJdKHJjOi8vZW4vdG4vaGVscC9sYW0vMDUvMTkpCiogW01hdHRoZXcgODoxMF0ocmM6Ly9lbi90bi9oZWxwL21hdC8wOC8xMCkKKiBbTWF0dGhldyAxMjoxN10ocmM6Ly9lbi90bi9oZWxwL21hdC8xMi8xNykKKiBbUHNhbG0gMjY6MS0zXShyYzovL2VuL3RuL2hlbHAvcHNhLzAyNi8wMDEpCiogW1JldmVsYXRpb24gMToxOS0yMF0ocmM6Ly9lbi90bi9oZWxwL3Jldi8wMS8xOSkKKiBbUmV2ZWxhdGlvbiAxNTozLTRdKHJjOi8vZW4vdG4vaGVscC9yZXYvMTUvMDMpCgojIyBFeGFtcGxlcyBmcm9tIHRoZSBCaWJsZSBzdG9yaWVzOgoKKiBfX1syOjRdKHJjOi8vZW4vdG4vaGVscC9vYnMvMDIvMDQpX18gVGhlIHNuYWtlIHJlc3BvbmRlZCB0byB0aGUgd29tYW4sIOKAnFRoYXQgaXMgbm90IF9fdHJ1ZV9fISBZb3Ugd2lsbCBub3QgZGllLuKAnQoqIF9fWzE0OjZdKHJjOi8vZW4vdG4vaGVscC9vYnMvMTQvMDYpX18gSW1tZWRpYXRlbHkgQ2FsZWIgYW5kIEpvc2h1YSwgdGhlIG90aGVyIHR3byBzcGllcywgc2FpZCwg4oCcSXQgaXMgX190cnVlIF9fIHRoYXQgdGhlIHBlb3BsZSBvZiBDYW5hYW4gYXJlIHRhbGwgYW5kIHN0cm9uZywgYnV0IHdlIGNhbiBjZXJ0YWlubHkgZGVmZWF0IHRoZW0h4oCdCiogX19bMTY6MV0ocmM6Ly9lbi90bi9oZWxwL29icy8xNi8wMSlfXyBUaGUgSXNyYWVsaXRlcyBiZWdhbiB0byB3b3JzaGlwIHRoZSBDYW5hYW5pdGUgZ29kcyBpbnN0ZWFkIG9mIFlhaHdlaCwgdGhlIF9fdHJ1ZSBfXyBHb2QuCiogX19bMzE6OF0ocmM6Ly9lbi90bi9oZWxwL29icy8zMS8wOClfXyBUaGV5IHdvcnNoaXBlZCBKZXN1cywgc2F5aW5nIHRvIGhpbSwg4oCcX19UcnVseV9fLCB5b3UgYXJlIHRoZSBTb24gb2YgR29kLuKAnQoqIF9fWzM5OjEwXShyYzovL2VuL3RuL2hlbHAvb2JzLzM5LzEwKV9fIOKAnEkgaGF2ZSBjb21lIHRvIGVhcnRoIHRvIHRlbGwgdGhlIF9fdHJ1dGhfXyBhYm91dCBHb2QuIEV2ZXJ5b25lIHdobyBsb3ZlcyB0aGUgX190cnV0aF9fIGxpc3RlbnMgdG8gbWUu4oCdIFBpbGF0ZSBzYWlkLCDigJxXaGF0IGlzIF9fdHJ1dGhfXz/igJ0KCiMjIFdvcmQgRGF0YToKCiogU3Ryb25n4oCZczogSDAxOTksIEgwMzg5LCBIMDQwMywgSDA1MjksIEgwNTMwLCBIMDU0MywgSDA1NDQsIEgwNTUxLCBIMDU3MSwgSDA5MzUsIEgzMzIxLCBIMzMzMCwgSDYyMzcsIEg2NjU2LCBINjk2NSwgSDcxODcsIEg3MTg5LCBHMDIyNTAsIEcwMjI2MCwgRzAyMjcwLCBHMDIyODAsIEcwMjMwMCwgRzExMDMwLCBHMzMwMzAsIEczNDgzMCwgRzM2ODkwLCBHNDEwMzAsIEc0MTM3MAo=',
        target: null,
        url: 'https://git.door43.org/api/v1/repos/unfoldingWord/en_tw/contents/bible/kt/true.md?ref=master',
        html_url:
          'https://git.door43.org/unfoldingWord/en_tw/src/branch/master/bible/kt/true.md',
        git_url:
          'https://git.door43.org/api/v1/repos/unfoldingWord/en_tw/git/blobs/f1facdaa6855b9d09e579aa3cf84279226e2927e',
        download_url:
          'https://git.door43.org/unfoldingWord/en_tw/raw/branch/master/bible/kt/true.md',
        submodule_git_url: null,
        _links: {
          self: 'https://git.door43.org/api/v1/repos/unfoldingWord/en_tw/contents/bible/kt/true.md?ref=master',
          git: 'https://git.door43.org/api/v1/repos/unfoldingWord/en_tw/git/blobs/f1facdaa6855b9d09e579aa3cf84279226e2927e',
          html: 'https://git.door43.org/unfoldingWord/en_tw/src/branch/master/bible/kt/true.md',
        },
      },
      status: 200,
      statusText: 'OK',
      headers: {
        'content-type': 'application/json;charset=utf-8',
      },
      config: {
        transformRequest: {},
        transformResponse: {},
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        headers: {
          Accept: 'application/json, text/plain, */*',
        },
        method: 'get',
        crossDomain: true,
        baseURL: 'https://git.door43.org',
        server: 'https://git.door43.org',
        params: {},
        url: 'https://git.door43.org/api/v1/repos/unfoldingword/en_tw/contents/bible/kt/true.md?ref=master',
      },
      request: {
        fromCache: true,
      },
    },
    filePath: 'bible/kt/true.md',
  },
];

const config = {
  verse: '1',
  chapter: '2',
  projectId: 'tit',
  ref: 'master',
  languageId: 'ru',
  resourceId: 'twl',
  owner: 'ru_gl',
  server: 'https://git.door43.org',
};
const {
  state: { item, headers, filters, itemIndex, markdownView },
  actions: { setFilters, setItemIndex, setMarkdownView },
} = useCardState({
  items,
  verse: 1,
  chapter: 1,
  projectId: 'tit',
});
function Component() {
  return (
    <>
      <Card
        items={items}
        headers={headers}
        filters={filters}
        itemIndex={itemIndex}
        setItemIndex={setItemIndex}
        setMarkdownView={setMarkdownView}
        showSaveChangesPrompt={() => {
          return new Promise((resolve, reject) => {
            resolve();
          });
        }}
      >
        <CardContent
          item={item}
          viewMode={'markdown'}
          filters={filters}
          itemIndex={itemIndex}
          setFilters={setFilters}
          setItemIndex={setItemIndex}
          setMarkdownView={setMarkdownView}
        />
      </Card>
    </>
  );
}

Component();
```
