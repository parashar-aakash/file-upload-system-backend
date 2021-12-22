const CsvFile = require("../Models/CsvFile");

// Upload Files
exports.uploadFile = async (req, res, next) => {
  try {
    const files = req.files;
    // console.log(files);

    if (files.length === 0) {
     res.send("Please select a File");
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
    return err;
  }
};
