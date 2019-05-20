const express = require("express");
const userController = require("./controllers/userController");
const studentController = require("./controllers/studentController");

const app = express();

app.get("/api/users", userController.getUsers);
app.get("/api/users/:id", userController.getUser);
app.get("/api/students", studentController.getStudents);

const PORT = 5050;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
