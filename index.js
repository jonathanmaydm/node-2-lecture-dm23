const express = require("express");
const app = express();

const users = [
  {
    id: 1,
    first_name: "Raul",
    last_name: "Wynter",
    email: "rwynter0@google.com"
  },
  {
    id: 2,
    first_name: "Demetri",
    last_name: "Dakin",
    email: "ddakin1@google.com"
  },
  {
    id: 3,
    first_name: "Lira",
    last_name: "Collishaw",
    email: "lcollishaw2@google.com"
  },
  {
    id: 4,
    first_name: "Jennette",
    last_name: "O'Brollachain",
    email: "jobrollachain3@msn.com"
  },
  {
    id: 5,
    first_name: "Annaliese",
    last_name: "Marishenko",
    email: "amarishenko4@msn.com"
  },
  {
    id: 6,
    first_name: "Delano",
    last_name: "Millins",
    email: "dmillins5@yahoo.com"
  },
  {
    id: 7,
    first_name: "Allister",
    last_name: "Rizzetti",
    email: "arizzetti6@yahoo.com"
  },
  {
    id: 8,
    first_name: "Yul",
    last_name: "Slite",
    email: "yslite7@yahoo.com"
  },
  {
    id: 9,
    first_name: "Stu",
    last_name: "Liveing",
    email: "sliveing8@devmountain.com"
  },
  {
    id: 10,
    first_name: "Carla",
    last_name: "Gisbye",
    email: "cgisbye9@devmountain.com"
  }
];

app.get("/api/users", (req, res) => {
    
    if (req.query.first_name){
        const filteredUsers = users.filter(user => user.first_name === req.query.first_name);
        res.json(filteredUsers);
    } else {
        // res.json(users);
        res.status(406).json("You must provide a first_name")
    }
  console.log("res sent");
});

app.get("/api/users/:id", (req, res) => {
  const user = users.find((user, index) => user.id === +req.params.id);
  console.log(user);
  res.json(user);
});

app.listen(5050, () => {
  console.log("Server listening on 5050");
});
