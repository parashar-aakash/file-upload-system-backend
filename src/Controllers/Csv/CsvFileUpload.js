const CsvFile = require("../../Models/CsvFile");
const ReportingFiles = require("../../Models/Reporting");
const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");

module.exports.uploadFile = (req, res) => {
  try {
    // console.log('Requestttttt', req);
    //  CsvFile.uploadedFile(req, res, function(err){
    //     if(err){
    //         console.log("multer Error");
    //     }
    console.log("####################", req.body);
      // req.body.forEach( ( rowData ) => {

      req.body.forEach( ( rowWiseData ) => {
        CsvFile.create(
          {
            Handle: rowWiseData.Handle,
            Title: rowWiseData.Title,
            Body: rowWiseData.Body,
            Vendor: rowWiseData.Vendor,
            Tags: rowWiseData.Tags,
            Published: rowWiseData.Published,
          },
          (err, data) => {
            if (err) {
              console.log(err);
              var today = new Date();
              var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
              var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
              if( err === "ValidationError: Vendor: Path `Vendor` is required." || "ValidationError: Handle: Path `Handle` is required." || "ValidationError: Title: Path `Title` is required." ){
                ReportingFiles.create(
                  {
                    error: err,
                    filename: req.body[0].filename,
                    time: time,
                    date: date,
                  },
                  (error, data) => {
                    if (error) {
                      return res.status(400).json({
                        message: error,
                      });
                    }
                    if( data ){
                      return res.status(400).json({
                        message: "Validation Error",
                        data: data,
                      });
                    }
                  }
                );
              }
            }
            console.log("dataaa", data);
          }
        );
      } )
      return res.status(200).json({
        message: "File Uploaded",
        // data: data,
      });
      // } )

    // });
  } catch (err) {
    console.log(err);
  }
};
