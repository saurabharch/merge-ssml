/* Test function

// input

<speak>
  Here is the first <say-as interpret-as="characters">SSML</say-as>
</speak>
<speak>
  Here is the second <say-as interpret-as="characters">SSML</say-as>
</speak>
<speak>
  Here is the third <say-as interpret-as="characters">SSML</say-as>
</speak>

// expected output

<speak>
  Here is the first <say-as interpret-as="characters">SSML</say-as>
</speak>
<break />
  Here is the second <say-as interpret-as="characters">SSML</say-as>
<break />
  Here is the third <say-as interpret-as="characters">SSML</say-as>
</speak>
*/

const merge_ssml = require('./index')

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

console.log(merge_ssml(ssmls))
