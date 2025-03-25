const express = require("express");
const app = express();
const router = express.Router();
const {greet, valid} = require("../middlewares/validate");
const mainController = require("../controllers/mainControllers");


router.get("/", valid, mainController.Home);
router.post("/login", valid, mainController.login);
router.get("/getcourse/:cid", valid, mainController.getcourse);
router.get("/getcategory/:catid", valid, mainController.getcategory);
router.get("/greet", greet, mainController.greet);
router.get("/frompaystack/:ref", mainController.frompaystack);
router.get("/resetinfull", valid, mainController.resetinfull);
router.get("/checkexistinguser", valid, mainController.checkexistinguser);
router.get("/nousersearchcourses", valid, mainController.nousersearchcourses);
router.post("/verifyreset", valid, mainController.verifyreset);
router.post("/newsignup", valid, mainController.newsignup);


module.exports = router;
