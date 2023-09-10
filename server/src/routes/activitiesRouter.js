const { Router } = require("express");

const {getActivitiesHandler, postActivityHandler } = require('../handlers/activitiesHandlers');
const { validateActivity } = require("../midelwares/validate");


activitiesRouter=Router();

activitiesRouter.get('/', getActivitiesHandler);

activitiesRouter.post('/',validateActivity, postActivityHandler );

module.exports = activitiesRouter;