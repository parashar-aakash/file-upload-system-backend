import * as express from 'express';
import uploadedFile from './CsvFileUpload';
const traineeRoutes = express.Router();

traineeRoutes.route( '/' )
        .post ( uploadedFile )

export default csvRoutes;
