export default function echo(req, res) {
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "application/json");
  // res.end(req.query.id);

  // alias
  res.json({id: req.query.id});
}