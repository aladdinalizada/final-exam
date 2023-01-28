const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", false);

const cardSchema = new mongoose.Schema(
  {
    cardTitle: { type: String, required: true },
  },
  {
    cardImg: { type: String, required: true },
  },
  {
    cardDesc: { type: String, requestAnimationFrame: true },
  },
  { timestamps: true }
);

const Cards = mongoose.model("Cards", cardSchema);
app.get("/cards", async (req, res) => {
  const data = await Cards.find();
  return res.send(data);
});

// Details page

app.get("/cards/:id", async (req, res) => {
  let { id } = req.params;
  const data = await Cards.findById(id);
  return res.send(data);
});

// post request
app.post("/cards/", async (req, res) => {
  const newCard = new Cards(req.body);
  newCard.save();
  return res.send({ message: "SUCCESS" });
});

// Delete request
app.delete("/cards/:id", async (req, res) => {
  let { id } = req.params;
  const data = await Cards.findByIdAndDelete(id);
  return res.send(data);
});

mongoose.connect(
  "mongodb+srv://aladdinlizada:<password>@cluster0.htufrr8.mongodb.net/?retryWrites=true&w=majority",
  (err) => {
    if (!err) {
      console.log("Connected to DB ");
    } else {
      console.log(err);
    }
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    );
  }
);
