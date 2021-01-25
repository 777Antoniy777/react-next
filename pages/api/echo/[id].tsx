import { NextApiRequest, NextApiResponse } from "next";

interface IDNextApiRequest extends NextApiRequest {
  id: string;
}

export default function echo(req: IDNextApiRequest, res: NextApiResponse) {
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "application/json");
  // res.end(req.query.id);

  // alias
  res.json({id: req.query.id});
}
