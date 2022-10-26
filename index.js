const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
const courses = require("./data/courses.json");
const courseInfo = require("./data/course-info.json");
app.get("/", (req, res) => {
  res.send("Course API Running");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courseInfo/:id", (req, res) => {
  console.log(req.params);
});

app.listen(port, () => {
  console.log("Graphic Master Server running on port", port);
});
