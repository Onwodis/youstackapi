const express = require("express");
const app = express();
const router = express.Router();
const {greet, adminvalid,valid} = require("../middlewares/validate");
const adminController = require("../controllers/adminControllers");


router.get("/", valid, adminController.Home);
router.get("/admindb", adminvalid, adminController.db);
router.get("/getcourses", adminvalid, adminController.getcourses);


module.exports = router;
