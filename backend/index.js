import express from "express";
import cors from "cors";
import fs from "fs";
import rembg from "rembg-node";
import multer from "multer";

const app = express();
app.use(cors());
app.use(express.json());

//ye image ke subject ko remove krke transparent background dene ke liye hai
const { removeBackground } = rembg;

const upload = multer({ dest: "uploads/" });

app.post("/remove-subject", upload.single("image"), async (req, res) => {
  try {
    const inputPath = req.file.path;
    const result = await removeBackground(inputPath);

    const outputPath = `output/${Date.now()}.png`;
    fs.writeFileSync(outputPath, result);

    res.sendFile(process.cwd() + "/" + outputPath);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Background removal failed" });
  }

});
//end

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
  const data = JSON.parse(fs.readFileSync("./data/trending.json", "utf-8"));
  res.json(data);
});

app.get("/api/marble&Wood", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data/marble&Wood.json", "utf-8"));
  res.json(data);
});

app.get("/api/solidColor", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data/solidColor.json", "utf-8"));
  res.json(data);
});

app.get("/api/imageBackground", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data/imageBackground.json", "utf-8"));
  res.json(data);
});


app.get("/api/insertPanelData", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data/insertPanelData.json", "utf-8"));
  res.json(data);
});

app.get("/api/template", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data/template.json", "utf-8"));
  res.json(data);
});


const PORT = 4000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
