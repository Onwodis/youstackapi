const express = require("express");
const app = express();
const router = express.Router();
const {greet, adminvalid,valid} = require("../middlewares/validate");
const adminController = require("../controllers/adminControllers");


router.get("/", valid, adminController.Home);
router.get("/admindb", adminvalid, adminController.db);
router.get("/togglelive", adminvalid, adminController.togglelive);
router.get("/deploy/:cid", adminvalid, adminController.deploy);
router.get("/togglecoursedep", adminvalid, adminController.togglecoursedep);
router.get("/admingetcourse/:cid", adminvalid, adminController.admingetcourse);
router.get("/togglemant", adminvalid, adminController.togglemant);
router.get("/updatetveri", adminvalid, adminController.updatetveri);
router.get("/getcourses", adminvalid, adminController.getcourses);
router.get("/getteachers", adminvalid, adminController.getteachers);
router.get("/getstudents", adminvalid, adminController.getstudents);
router.get("/gettrans", adminvalid, adminController.gettrans);
router.get("/getcategories", adminvalid, adminController.getcategories);
router.get("/updateyoucent", adminvalid, adminController.updateyoucent);
router.get("/getteachertrans", adminvalid, adminController.getteachertrans);
router.get("/getstudenttrans", adminvalid, adminController.getstudenttrans);
router.get("/verifyteacher/:userid", adminvalid, adminController.verifyteacher);
router.get("/licenseteacher/:userid", adminvalid, adminController.licenseteacher);
router.get("/deletecategory", adminvalid, adminController.deletecategory);
router.get("/getactions", adminvalid, adminController.getactions);
router.get("/updatetimeout", adminvalid, adminController.updatetimeout);
router.get("/search", adminvalid, adminController.search);
router.post("/updatecategory", adminvalid, adminController.updatecategory);
router.post("/newcategory", adminvalid, adminController.newcategory);


module.exports = router;
