const mapService = require('../services/maps.service.js');
const { validationResult } = require('express-validator');

module.exports.getCoordinates = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { address } = req.query;

    try {
        const coordinates = await mapService.getAddressCoordinate(address);
        return res.status(200).json(coordinates);
    } catch (err) {
        console.error("Controller Error:", err.message);
        return res.status(404).json({ message: err.message || "Coordinates not found" })
    }
}

module.exports.getDistanceTime = async (req, res) => {

    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { origin, destination } = req.query;

        const distanceTime = await mapService.getDistanceTime(origin, destination);

        res.status(200).json(distanceTime);

    } catch (err) {
        console.error("Controller Error:", err.message);
        return res.status(500).json({ message: err.message || "Internal server error" })
    }
}

module.exports.getAutoCompleteSuggestions = async (req, res) =>{
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

        const {input} = req.query;

        const suggestions = await mapService.getAutoCompleteSuggestions(input);

        res.status(200).json(suggestions);
    } catch(err){
        console.error(err.message);
        res.status(500).json({message: 'Internal server error'});
    }
}