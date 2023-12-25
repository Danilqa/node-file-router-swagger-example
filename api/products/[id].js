/**
 * @openapi
 * /products/[id]:
 *   get:
 *     description: Get product
 *     responses:
 *       200:
 *         description: Returns a product
 */
export default function product(_, res, routeParams) {
  const { id } = routeParams;
  res.send(JSON.stringify({ id, name: `Product ${id}` }));
}
