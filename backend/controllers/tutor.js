const path = require("path");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
// const geocoder = require("../utils/geocoder");
const Tutor = require("../models/Tutor");

// @desc      Get all tutor
// @route     GET /api/v1/tutor
// @access    doctor
exports.gettutors = asyncHandler(async (req, res, next) => {
  const tutor = await Tutor.find().populate({
    path: "subject",
    select: "catname",
  });

  return res.status(200).json({
    success: true,
    count: tutor.length,
    data: tutor,
  });
});

// @desc      Get current logged in user
// @route     POST /api/v1/auth/me
// @access    Private
exports.getMe = asyncHandler(async (req, res, next) => {
  const tutor = await Tutor.findOne({ user: req.user.id }).populate({
    path: "subject",
    select: "catname",
  });

  res.status(200).json({
    success: true,
    data: tutor,
  });
});

// @desc      Get single doctor
// @route     GET /api/v1/doctor/:id
// @access    doctor
exports.gettutor = asyncHandler(async (req, res, next) => {
  const tutor = await Tutor.find({ user: req.user.id });

  if (!tutor) {
    return next(
      new ErrorResponse(
        `doctor not found with id of ${req.params.tutorId}`,
        404
      )
    );
  }
  res.status(200).json({ success: true, data: tutor });
});

// @desc      Create new doctor
// @route     POST /api/v1/doctor
// @access    Private
exports.addtutor = asyncHandler(async (req, res, next) => {
  // Add user to req,body
  req.body.user = req.user.id;

  // Check for published doctor
  const publishedTutor = await Tutor.findOne({ user: req.user.id });

  // If the user is not an admin, they can only add one doctor
  if (publishedTutor && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `The user with ID ${req.user.id} has already published a doctor`,
        400
      )
    );
  }
  // req.body.photo = req.body.photo;
  const tutor = await Tutor.create(req.body);
  res.status(200).json({
    success: true,
    data: tutor,
  });
});

// @desc      Update doctor
// @route     PUT /api/v1/doctor/:id
// @access    Private
exports.updatetutor = asyncHandler(async (req, res, next) => {
  const tutor = await Tutor.findById(req.params.tutorId);

  if (!tutor) {
    return next(
      new ErrorResponse(
        `doctor not found with id of ${req.params.tutorId}`,
        404
      )
    );
  }

  // Make sure user is doctor owner
  if (tutor.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorized to update this doctor`,
        401
      )
    );
  }
  if (req.body.photo) {
    req.body.photo = req.body.photo;
  }
  tutor = await Doctor.findByIdAndUpdate(req.params.tutorId, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: tutors });
});

// @desc      Delete doctor
// @route     DELETE /api/v1/doctor/:doctorId
// @access    Private
exports.deletetutor = asyncHandler(async (req, res, next) => {
  const tutor = await Doctor.find({ user: req.params.tutorId });

  if (!tutor) {
    return next(
      new ErrorResponse(
        `Vendor not found with id of ${req.params.tutorId}`,
        404
      )
    );
  }

  // Make sure user is doctor owner
  if (tutor.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.tutorId} is not authorized to delete this doctor`,
        401
      )
    );
  }

  tutor.remove();

  res.status(200).json({ success: true, data: {} });
});

// @desc      Upload photo for doctor
// @route     PUT /api/v1/tutor/photo
// @access    Private
exports.tutorPhotoUpload = asyncHandler(async (req, res, next) => {
  if (!req.files) {
    return next(new ErrorResponse(`Please upload a file`, 400));
  }

  const file = req.files.file;
  console.log(file);

  // Make sure the image is a photo
  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse(`Please upload an image file`, 400));
  }

  // Check filesize
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`,
        400
      )
    );
  }

  file.mv(
    `${__dirname}/../../frontend/public/uploads/${file.name}`,
    async (err) => {
      if (err) {
        console.error(err);
        return next(new ErrorResponse(`Problem with file upload`, 500));
      }

      const files = `/uploads/${file.name}`;

      res.status(200).json({
        success: true,
        data: files,
      });
    }
  );
});
