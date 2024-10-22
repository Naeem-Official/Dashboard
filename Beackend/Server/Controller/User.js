const newuser = require("../Model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "secret_key_is_Gray_Loops";
//Signup
const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!email) {
      return res.status(400).json({ message: "Please Enter Email" });
    }
    if (!password) {
      return res.status(400).json({ message: "Please Enter Password" });
    }
    if (!name) {
      return res.status(400).json({ message: "Please Enter Name" });
    }

    const userexists = await newuser.findOne({ where: { email } });

    if (userexists) {
      return res.status(400).json({ message: "User Exist Already" });
    }

    const hashedpassword = await bcrypt.hash(password, 10);
    const user = await newuser.create({
      name,
      email,
      password: hashedpassword,
      role: "user",
    });
    res.status(200).json({
      message: "User Created Successfully",
      user: {
        id: newuser.id,
        name: newuser.name,
        email: newuser.email,
        role: newuser.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "User Not Created Please Try Again",
    });
  }
};
//Login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email) {
      return res.status(400).json({ message: "Please Enter Email" });
    }
    if (!password) {
      return res.status(400).json({ message: "Please Enter Password" });
    }

    // Assuming `newuser` is your user model
    const user = await newuser.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    // Comparing password
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    return res
      .status(200)
      .json({ message: "Login Successful", token: token, role: user.role });
  } catch (error) {
    console.log("Login Error", error);
    return res.status(500).json({ message: "Server Error" }); // Changed to 500 for server errors
  }
};

//admin manually set
const Admin = async (req, res) => {
  try {
    const adminexist = await newuser.findOne({ where: { role: "admin" } });
    if (!adminexist) {
      const hashedpassword = await bcrypt.hash("admin@1234", 10);
      await newuser.create({
        name: "Admin Panel",
        email: "admin@gmail.com",
        password: hashedpassword,
        role: "admin",
      });
      console.log("Admin Successfully Created");
    } else {
      console.log("Admin user already exists.");
    }
  } catch (error) {
    res.status(400).json({ message: "Admin Access Denied" });
  }
};
//All users
const Alluser = async (req, res) => {
    try {
        const users = await newuser.findAll({
          attributes: ["id", "name", "email"],
          where: {
            role: 'user', // Assuming the role field is named 'role'
          },
        });

    res
      .status(200)
      .json({ message: "All users Fetched Successsfully", users });
  } catch (error) {
    res.status(400).json({ message: " Users Not Fetched " });
  }
};
module.exports = { signup, login, Admin, Alluser };
