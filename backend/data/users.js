import bcrypt from "bcryptjs";

const users = [
  {
    name: "anish maharjan",
    email: "anishmaharjan17@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "soni maharjan",
    email: "sonimaharjan17@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "rasmi maharjan",
    email: "rasmimaharjan17@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
