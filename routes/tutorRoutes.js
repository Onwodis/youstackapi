const express = require("express");
const app = express();
const router = express.Router();
const {greet,valid, teacherValid} = require("../middlewares/validate");
const tutorController = require("../controllers/tutorControllers");


router.get("/", valid, tutorController.Home);
router.post("/newsignup", valid, tutorController.newsignup);
router.post("/finalsign", valid, tutorController.finalsign);
router.post("/createcourse",  teacherValid, tutorController.createcourse);
router.post("/updatetopic",  teacherValid, tutorController.updatetopic);
router.post("/updatetopicvideo",  teacherValid, tutorController.updatetopicvideo);
router.post("/changeemail",  teacherValid, tutorController.changeemail);
router.post("/changename",  teacherValid, tutorController.changename);
router.post("/changephone",  teacherValid, tutorController.changephone);
router.post("/updateintrolink",  teacherValid,tutorController.updateintrolink);
router.get("/getcourse/:cid", teacherValid, tutorController.getcourse);
router.get("/lock/:cid", teacherValid, tutorController.lock);
router.get("/getlectures", teacherValid, tutorController.getlectures);
router.post("/newtopic", teacherValid, tutorController.newtopic);
router.post("/deltopic", teacherValid, tutorController.deltopic);
router.get("/uploadvidedo", teacherValid,tutorController.uploadvideo);
router.get("/db", teacherValid, tutorController.dbb);




module.exports = router;
