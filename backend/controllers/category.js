const path = require("path");
const ErrorResponse = require("../utils/errorResponse");

const Category = require("../models/Category");
const Tutor = require("../models/Tutor");

const asyncHandler = require("../middleware/async");

// @desc      Get tutors
// @route     GET /api/v1/category/:categoryId/tutors/
// @access    Public
exports.getCategoryTutor = asyncHandler(async (req, res, next) => {
  const tutor = await Tutor.find({
    subject: req.params.categoryId,
  }).populate({
    path: "category",
  });

  if (!tutor) {
    return next(
      new ErrorResponse(`No tutors with the id of ${req.params.id}`),
      404
    );
  }
  res.status(200).json({
    success: true,
    count: tutor.length,
    data: tutor,
  });
});

// @desc      Get category
// @route     GET /api/category/
// @access    Public
exports.getCategories = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc      Get single category
// @route     GET /api/category/:categoryId
// @access    Public
// exports.getCategory = asyncHandler(async (req, res, next) => {
//   const doctor = await Doctor.find({ specialization: req.params.categoryId });

//   if (!doctor) {
//     return next(new ErrorResponse(`No Doctor in this category`), 404);
//   }

//   res.status(200).json({
//     success: true,
//     data: doctor,
//   });
// });

// @desc      Add category
// @route     POST /api/category/:categoryId
// @access    Private
exports.addCategory = asyncHandler(async (req, res, next) => {
  // Add user to req,body
  req.body.user = req.user.id;

  // // Check for published category
  // const categorypublished = await Category.findOne({
  //   catname: req.body.catname,
  // });

  // if (categorypublished.catname) {
  //   return next(new ErrorResponse(`Same Category `, 400));
  // }
  const category = await Category.create(req.body);

  res.status(201).json({
    success: true,
    data: category,
  });
});

// @desc      Update category
// @route     PUT /api/v1/category/:categoryId
// @access    Private
exports.updateCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findByIdAndUpdate(
    req.params.categoryId,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    success: true,
    data: category,
  });
});

// @desc      Delete Category
// @route     DELETE /api/category/:categoryId
// @access    Private
exports.deleteCategory = asyncHandler(async (req, res, next) => {
  try {
    let category = await Category.findById(req.params.categoryId);
    if (!category) {
      return next(
        new ErrorResponse(`No Category with id ${req.params.categoryId}`, 400)
      );
    }
    await Category.findByIdAndRemove(req.params.categoryId);

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
