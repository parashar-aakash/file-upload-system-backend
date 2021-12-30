const express = require('express');
const uploadedFile = require('./CsvFileUpload');
const csvRoutes = express.Router();

csvRoutes.route( '/' )
        .post ( uploadedFile )

export default csvRoutes;
