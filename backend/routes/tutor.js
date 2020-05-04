const express = require("express");
const {
  gettutors,
  gettutor,
  addtutor,
  updatetutor,
  deletetutor,
  getMe,
  tutorPhotoUpload,
} = require("../controllers/tutor");

const Tutor = require("../models/Tutor");

const router = express.Router();

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

router.route("/photo").post(protect, tutorPhotoUpload);

router
  .route("/")
  .get(advancedResults(Tutor, { path: "category" }), gettutors)
  .post(protect, addtutor);

router.route("/me").get(protect, getMe);

router
  .route("/:tutorId")
  .get(protect, gettutor)
  .put(protect, updatetutor)
  .delete(protect, deletetutor);

module.exports = router;
