const express = require('express');
const app = express();
const router = express.Router();
const { greet, valid, teacherValid } = require('../middlewares/validate');
const tutorController = require('../controllers/tutorControllers');

router.get('/', valid, tutorController.Home);
router.post('/newsignup', valid, tutorController.newsignup);
router.post('/finalsign', valid, tutorController.finalsign);
router.post('/createcourse', teacherValid, tutorController.createcourse);
router.post('/updatetopic', teacherValid, tutorController.updatetopic);
router.post(
  '/updatetopicvideo',
  teacherValid,
  tutorController.updatetopicvideo
);
router.post('/changeemail', teacherValid, tutorController.changeemail);
router.post('/changename', teacherValid, tutorController.changename);
router.post('/changephone', teacherValid, tutorController.changephone);
router.post('/updateintrolink', teacherValid, tutorController.updateintrolink);
router.post(
  '/updatecourseprofile',
  teacherValid,
  tutorController.updatecourseprofile
);
router.get('/getcourse/:cid', teacherValid, tutorController.getcourse);
router.get('/lock/:cid', teacherValid, tutorController.lock);
router.get('/deletecourse/:cid', teacherValid, tutorController.deletecourse);
router.get('/getlectures', teacherValid, tutorController.getlectures);
router.post('/newtopic', teacherValid, tutorController.newtopic);
router.post('/upload-compliance', teacherValid, tutorController.uploadcompliance);
router.post('/deltopic', teacherValid, tutorController.deltopic);
router.post('/updatecourseimage', teacherValid, tutorController.updatecourseimage);
router.get('/uploadvidedo', teacherValid, tutorController.uploadvideo);
router.get('/db', teacherValid, tutorController.dbb);
router.get('/getcategories', teacherValid, tutorController.getcategories);
router.get('/gettrans', teacherValid, tutorController.gettrans);

module.exports = router;
