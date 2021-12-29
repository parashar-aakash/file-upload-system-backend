const CsvFile = require('../Models/CsvFile');
const csv = require('csv-parser');
const fs = require("fs");
const path = require("path");

module.exports.uploadFile = function(req, res){
    try{
      console.log('Requestttttt', req);
         CsvFile.uploadedFile(req, res, function(err){
            if(err){
                console.log("multer Error");
            }
            console.log('####################', req.file);
            if(req.file && req.file.mimetype == "application/vnd.ms-excel" || req.file && req.file.mimetype == "text/csv"){
                console.log("true");
                console.log(req.file);
                CsvFile.create({
                    filePath: req.file.path,
                    originalName: req.file.originalname,
                    file: req.file.filename
                    }, function(err){
                        if(err){
                            console.log(err)
                            return res.status(400).json({
                                message: "Error in Uploading File"
                            });
                        }
                        res.status(200).json({
                            message: "File Uploaded"
                            
                        });
                        return res.redirect("/");
                    }
                );
            }else{
                console.log("Please Upload CSV Format file");
                
                // todo add alert
                return res.redirect("/");
            }
           
        });
        
    }catch(err){
        console.log(err);
    }
}
