/**
 * Combine multiple SSML documents into one
 * @param samples - List of SSML samples (not validated)
 * ```js
 * ['<speak>one</speak>', '<speak>two</speak>', '<speak>three</speak>']
 * ```
 */

module.exports = (samples) => samples.join('').replace(/(?!^)<speak>/g, '').replace(/<\/speak>(?=.*<\/speak>)/gs, '<break />')
