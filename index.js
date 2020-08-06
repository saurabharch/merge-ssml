/**
 * Combine multiple SSML documents
 * @param samples - List of SSML samples (validated)
 * ```js
 * ['<speak>one</speak>', '<speak>two</speak>', '<speak>three</speak>']
 * ```
 */

module.exports = (samples) => samples.join('').replace(/(?!^)<speak>/g, '').replace(/<\/speak>(?=.*<\/speak>)/gs, '<break />')
