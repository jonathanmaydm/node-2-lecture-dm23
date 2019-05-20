const express = require("express");
const userController = require("./controllers/userController");
const studentController = require("./controllers/studentController");

const app = express();

// our own custom middleware
// app.use((req, res, next) => {
//   console.log("Somone accessed the server", req.ip, req.url);
//   next();
// });

// middleware that express gives us for free
// order matters! it has to come before the endpoints
app.use(express.json());

/* Chris */ app.get("/api/users", userController.getUsers);
/* Bryan */ app.get("/api/users/:id", userController.getUser);
/* Kevin */ app.get("/api/students", studentController.getStudents);
app.post("/api/students", studentController.addStudent);
app.put("/api/students/:id", studentController.updateStudent);

const PORT = 5050;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
