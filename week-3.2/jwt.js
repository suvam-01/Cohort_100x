const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "s@gmail.com",
    password: "123456",
    name: "suvam"
  },
  {
    username: "R@gmail.com",
    password: "1200",
    name: "Raju"
  },
  {
    username: "M@gmail.com",
    password: "121",
    name: "Min"
  }
];

function userExists(username, password) {
  let userExist = false;

  for (let i = 0; i < ALL_USERS.length; i++) {
    if (ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
      userExist = true;
      break;
    }
  }
  return userExist;
}

app.post("/signin", function(req, res) {
  const { username, password } = req.body;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "user does not exist"
    });
  }
  const token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token
  });
});

app.get("/users", function(req, res) {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, jwtPassword);
  const username = decoded.username;

  res.json({
    users:ALL_USERS.filter(function(val){
      if(val.username == username){
        return false;
      }
      else{
        return true;
      }
    })
  })

});

app.listen(3000);