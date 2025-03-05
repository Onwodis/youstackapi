const express = require("express");
const app = express();
const router = express.Router();
const {greet, valid} = require("../middlewares/validate");
const tutorController = require("../controllers/tutorControllers");


router.get("/", valid, tutorController.Home);
router.post("/newsignup", valid, tutorController.newsignup);



module.exports = router;
