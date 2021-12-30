const { csvRoutes } = require('./Controllers/Csv');
const { reportingListRoutes } = require('./controllers/user');
const { Router } = require('express');

const mainRouter = Router();

mainRouter.use( '/files' , csvRoutes );
mainRouter.use( '/fileList' , reportingListRoutes );

export default mainRouter;
