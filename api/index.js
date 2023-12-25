/**
 * @openapi
 * /:
 *   get:
 *     description: Returns index page
 *     responses:
 *       200:
 *         description: plain text with hello word
 */
export default function indexHandler(_, res) {
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello');
}
