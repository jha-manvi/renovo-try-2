const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const bcrypt = require("bcrypt");
const { toast } = require("react-toastify");
const flash = require("express-flash");

// var request = require('request');

//middleware
app.use(cors());
app.use(express.json()); //req.body
//session flash
app.use(flash());

//ROUTES//



//create a todo

app.post("/create-new-account", async (req, res) => {
  try {
    const {   name, email, password, re_pass } = req.body;

const newUser1 = await pool.query("SELECT * FROM users WHERE user_email = $1", [
  email
]);

if (newUser1.rows.length > 0) {
  
  return res.json("User already exists !");
}

const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);
    const bcryptRePassword = await bcrypt.hash(re_pass, salt);


if (password != re_pass){
  
  return res.json("Passwords do not match");
}

else{


    let newUser = await pool.query(
      "INSERT INTO users (user_name, user_email, user_password, re_password) VALUES ($1, $2, $3, $4) RETURNING *",
      [name , email , bcryptPassword, bcryptRePassword]
    );

    res.json(newUser.rows[0]);}
  } catch (err) {
    console.error(err.message);
  }
});



//get all todos

app.post("/login", async (req, res) => {
  try {
    const {  email, password } = req.body;
    const loginUser = await pool.query("SELECT * FROM users where user_email = $1", [ email ]);

    if (loginUser.rows.length === 0) {
      return res.status(401).json("Email does not exist");
    }

    const validPassword = await bcrypt.compare(
      password,
      loginUser.rows[0].user_password
    );

    if (!validPassword) {
      return res.status(401).json("Invalid Credential");

    }

    else {
      res.render("create-new-account");
      } 
      
    

    
    res.json(loginUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get('/hiii', function (req, res) {
res.send("successful") ;
} );





/*
//get a todo

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id
    ]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a todo

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

    res.json("Todo was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

*/

app.listen(5000, () => {
  console.log("server has started on port 5000");
});