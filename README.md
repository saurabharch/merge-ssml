# merge-ssml

Merge SSML documents in JavaScript

### Example

Input SSML documents

```xml
<speak>
  Here is the first <say-as interpret-as="characters">SSML</say-as>
</speak>
```

```xml
<speak>
  Here is the second <say-as interpret-as="characters">SSML</say-as>
</speak>
```

```xml
<speak>
  Here is the third <say-as interpret-as="characters">SSML</say-as>
</speak>
```

Resulting document

```xml
<speak>
  Here is the first <say-as interpret-as="characters">SSML</say-as>
</speak>
<break />
  Here is the second <say-as interpret-as="characters">SSML</say-as>
<break />
  Here is the third <say-as interpret-as="characters">SSML</say-as>
</speak>
```

### Usage

Install using npm

```sh
npm i merge-ssml
```

or yarn

```sh
yarn add merge-ssml
```

Example

```js
// Import the package
const merge_ssml = require('merge-ssml')

// Provide SSML documents
ssmls = [
  `<speak>
    Here is the first <say-as interpret-as="characters">SSML</say-as>
  </speak>`,
  `<speak>
    Here is the second <say-as interpret-as="characters">SSML</say-as>
  </speak>`,
  `<speak>
    Here is the third <say-as interpret-as="characters">SSML</say-as>
  </speak>`
]

// Combine them
const result = merge_ssml(ssmls)
```
