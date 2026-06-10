const express = require('express');
const router = express.Router();
const mapCoordinates = require('../controllers/map.controller.js');
const authMiddleware = require('../middlewares/auth.middleware.js');
const { query } = require('express-validator');


router.get('/get-coordinates',
    query('address').isString().isLength({ min: 3 }), authMiddleware.authUser, mapCoordinates.getCoordinates);


router.get('/get-distance-time', 
    query('origin').isString().isLength({min: 3}),
    query('destination').isString().isLength({min: 3}),
    authMiddleware.authUser,
    mapCoordinates.getDistanceTime
)

router.get('/get-suggestions', 
    query('input').isString().isLength({min: 3}),
    authMiddleware.authUser,
    mapCoordinates.getAutoCompleteSuggestions
)

module.exports = router;