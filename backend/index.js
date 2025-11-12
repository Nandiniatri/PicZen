import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());


app.get("/api/menus", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data/menus.json", "utf-8"));
  res.json(data);
});


app.get("/api/contents", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data/contents.json", "utf-8"));
  res.json(data);
});


const PORT = 4000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
