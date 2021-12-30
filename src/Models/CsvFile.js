const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const FILES_PATH = path.join("/uploads/files");

const CsvFileSchema = new mongoose.Schema({

    Handle:{ type: String, required: [true] },
    Title:{ type: String, required: [true] },
    Body:{ type: String },
    Vendor:{ type: String, required: [true] },
    Tags:{ type: String },
    Published:{ type: String },
    Option1_Name:{ type: String },
    Option1_Value:{ type: String },
    Option2_Name:{ type: String },
    Option2_Value:{ type: String },
    Option3_Name:{ type: String },
    Option3_Value:{ type: String },
    Variant_SKU:{ type: String },
    Variant_Grams:{ type: String },
    Variant_Inventory_Tracker:{ type: String },
    Variant_Inventory_Qty:{ type: String },
    Variant_Inventory_Policy:{ type: String },
    Variant_Fulfillment_Service:{ type: String },
    Variant_Price:{ type: String },
    Variant_Compare_At_Price:{ type: String },
    Variant_Requires_Shipping:{ type: String },
    Variant_Taxable:{ type: String },
    Variant_Barcode:{ type: String },
    Image_Src:{ type: String },
    Image_Position:{ type: String },
    Image_Alt_Text:{ type: String },
    Gift_Card:{ type: String },
    SEO_Title:{ type: String },
    SEO_Description:{ type: String },
    Google_ProductCategory:{ type: String },
    Google_Gender:{ type: String },
    Google_Age_Group:{ type: String },
    Google_MPN:{ type: String },
    Google_AdWords_Grouping:{ type: String },
    Google_AdWords_Labels:{ type: String },
    Google_Condition:{ type: String },
    Google_Custom_Product:{ type: String },
    Google_Custom_Label_0:{ type: String },
    Google_Custom_Label_1:{ type: String },
    Google_Custom_Label_2:{ type: String },
    Google_Custom_Label_3:{ type: String },
    Google_Custom_Label_4:{ type: String },
    Variant_Image:{ type: String },
    Variant_Weight_Unit:{ type: String },
    Variant_Tax_Code:{ type: String },
    Cost_per_item:{ type: String },
    Status:{ type: String },
    Standard_Product_Type:{ type: String },
    
    Custom_Product_Type: { type: String },
    filename: { type: String }
});

// let storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, path.join(__dirname, "..", FILES_PATH));
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now());
//     }
//   });

//   CsvFileSchema.statics.uploadedFile = multer({ storage: storage }).single("file");
//   CsvFileSchema.statics.filePath = FILES_PATH;

module.exports = mongoose.model("CsvFiles", CsvFileSchema);
