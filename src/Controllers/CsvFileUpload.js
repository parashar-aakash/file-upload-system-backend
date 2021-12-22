const CsvFile = require("../Models/CsvFile");

// Upload Files
exports.uploadFile = async (req, res, next) => {
  try {
    const files = req.files;
    // console.log(files);

    if (files.length === 0) {
      const error = new Error("Please select a File");
      error.httpStatusCode = 400;
      return next(error);
    }

    for (i = 0; i < files.length; i++) {
      const createdFile = await CsvFile.create({
        filename: req.files[i].originalname,
      });

    }
    res.status(201).json({
      msg: "file uploaded Successfully",
    });
  } catch (err) {
    return next(
      new ErrorResponse(`Error in file uploading: ${err.message}`, 400)
    );
  }
};
