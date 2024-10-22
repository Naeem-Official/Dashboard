const express = require('express');
const {signup,login, Alluser, Admin} = require('../Controller/User');
const { authmiddleware, adminMiddleware, } = require('../middleware/Authtoken');
const {EnterData, ShowData} = require('../Controller/Portfolio');
const { addprojects, GetAllProjects, timeline } = require('../Controller/projects');
const router = express.Router();

router.post("/signup",signup)
router.post("/login",login)
router.post("/enterdata",EnterData)
router.post("/add-projects",addprojects)
router.get("/get-projects",GetAllProjects)
router.get("/timelines",timeline)
router.get("/get-user",adminMiddleware,Alluser)
router.get("/show-data",ShowData)


module.exports = router;    