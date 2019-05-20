const students = [];

const getStudents = (req, res) => {
  res.json(students);
};

module.exports = {
  getStudents
};
