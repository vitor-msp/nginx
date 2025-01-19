import express, { json } from "express";
import ip from "ip";

const port = 8080;
const color = process.argv[2];
const api = express();
const response = {
  ip: ip.address(),
  color,
};

api.use(json());

api.get("/", (req, res) => {
  console.log(req.headers);
  res.json(response);
});

api.put("/", (req, res) => {
  console.log(req.body);
  res.json(response);
});

api.listen(port, () => console.log(`api started on ${port}`));
