/**
 * @openapi
 * /products:
 *   get:
 *     description: Get products
 *     responses:
 *       200:
 *         description: Returns a product list
 */
export default function products(_, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify([
      { id: 1, name: 'Phone' },
      { id: 2, name: 'Gamebnoy' }
    ])
  );
}
