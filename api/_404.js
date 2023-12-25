export default function notFoundHandler(
  _,
  res
) {
  res.setHeader('Content-Type', 'application/json');
  res.end('404');
}
