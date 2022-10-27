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
app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const category_course = courseInfo.filter((c) => c.course_id === id);
  res.send(category_course);
});

app.listen(port, () => {
  console.log("Graphic Master Server running on port", port);
});
