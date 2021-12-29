const CsvFile = require('../Models/CsvFile');
const ReportingFiles = require('../Models/Reporting');
const csv = require('csv-parser');
const fs = require("fs");
const path = require("path");

module.exports.uploadFile = function (req, res) {
  try {
    // console.log('Requestttttt', req);
    //  CsvFile.uploadedFile(req, res, function(err){
    //     if(err){
    //         console.log("multer Error");
    //     }
    console.log('####################', req.body[0]);
    if (true || req.file && req.file.mimetype == "application/vnd.ms-excel" || req.file && req.file.mimetype == "text/csv") {
      console.log("true");
      // console.log(req.file);
      // req.body.forEach( ( rowData ) => {
      CsvFile.create({
        Handle: req.body[0].Handle,
        Title: req.body[0].Title,
        Body: req.body[0].Body,
        Vendor: req.body[0].Vendor,
        Tags: req.body[0].Tags,
        Published: req.body[0].Published,
      }, function (err, data) {
        if (err) {
          console.log(err)
          ReportingFiles.create({
            error: err,
            filename: req.body[0].filename,
            time: 'on',
            data: 'at',
          })
          return res.status(400).json({
            message: "Error in Uploading File"
          });
        }
        console.log('dataaa', data)
        return res.status(200).json({
          message: "File Uploaded",
          data: data

        });
        // return res.redirect("/");
      }
      );
      // } )
    } else {
      console.log("Please Upload CSV Format file");

      // todo add alert
      return res.redirect("/");
    }

    // });

  } catch (err) {
    console.log(err);
  }
}
