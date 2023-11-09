import { NextFunction, Request, Response } from "express";

export async function getBrandDetails(_req: Request, res: Response, _next: NextFunction) {
  try {
    res.status(200).send([
      { id: 1, name: "brand 1" },
      { id: 2, name: "brand 2" },
    ]);
  } catch (e) {
    console.log(e);

    res.status(500).send("Catched 500:sorry we can not progress your request");
  }
}
