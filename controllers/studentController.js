const axios = require("axios");
let students = [];

// IF you want data from an outside source, you can
// use axios on the server too. It's still just making
// an HTTP request, but this time it's from one server to another.

// axios.get("http://breakingbadapi.com/api/characters").then(response => {
//   students = response.data;
// });

const getStudents = (req, res) => {
  res.json(students);
};

const addStudent = (req, res) => {
  // if (req.body.name === "Jonathan") {
  //   res.status(500).json("Not today.");
  // } else {

  // we ONLY have access to req.body because we used
  // app.use(express.json()) in index.js
  students.push(req.body);
  res.json(students);
  // }
};

const updateStudent = (req, res) => {
  // we can work with all this data just like
  // we normally do in Javascript
  students[+req.params.id].name = req.body.name;
  res.json(students);
};

module.exports = {
  getStudents,
  addStudent,
  updateStudent
};
