const User = require("../models/UserModels");


const bcrypt = require("bcrypt");


const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_STR);
};

