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


app.get("/api/editHeader", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data/editHeader.json", "utf-8"));
  res.json(data);
});

app.get("/api/textStyles", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data/textStyles.json", "utf-8"));
  res.json(data);
});

app.get("/api/newInPiczenData", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data/newInPiczenData.json", "utf-8"));
  res.json(data);
});

app.get("/api/classicsArriveData", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data/classicsArriveData.json", "utf-8"));
  res.json(data);
});


app.get("/api/photoEditingClassicsData", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data/photoEditingClassicsData.json", "utf-8"));
  res.json(data);
});


app.get("/api/trending", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data/c.json", "utf-8"));
  res.json(data);
});

const PORT = 4000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
