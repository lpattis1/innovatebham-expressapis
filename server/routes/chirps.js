const express = require("express");
const chirpsStore = require("../chirpstore.js");
let router = express.Router();

router.get("/:id?", (req, res) => {
  let id = req.params.id;
  if (id) {
    res.json(chirpsStore.GetChirp(id));
  } else {
    res.send(chirpsStore.GetChirps());
  }
});

router.post("/", (req, res) => {
  chirpsStore.CreateChirp(req.body);
  res.sendStatus(200);
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  if (id) {
    res.json(chirpStore.UpdateChirp(id, req.body));
  } else {
    res.status(200).json({ message: "Request was successful!" });
  }
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  chirpStore.DeleteChirp(id);
  res.send("Chirp was successfully deleted!");
});

module.exports = router;
