const axios = require('axios');

module.exports.getAddressCoordinate = async (address) => {
  const apiKey = process.env.GOOGLE_MAPS_API;

  if (!apiKey) {
    throw new Error('Google Maps API key is not configured');
  }

  if (!address) {
    throw new Error('Address is required');
  }

  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);

    if (response.data.status === 'OK' && response.data.results.length > 0) {
      const loc = response.data.results[0].geometry.location;
      return {
        lat: loc.lat,
        lng: loc.lng,
      };
    } else {
      throw new Error(`Geocode API returned status: ${response.data.status}`);
    }
  } catch (error) {
    console.error('Maps API Error:', error.message);
    throw error;
  }
};

module.exports.getDistanceTime = async (origin, destination) => {
  const apiKey = process.env.GOOGLE_MAPS_API;

  if (!apiKey) {
    throw new Error('Google Maps API key is not configured');
  }

  if (!origin || !destination) {
    throw new Error('Origin and destination both are required');
  }

  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);

    if (response.data.status !== 'OK') {
      throw new Error(`Distance Matrix API returned status: ${response.data.status}`);
    }

    const element = response.data.rows?.[0]?.elements?.[0];
    if (!element) {
      throw new Error('Malformed Distance Matrix response');
    }

    if (element.status !== 'OK') {
      throw new Error(`Route error: ${element.status}`);
    }

    return {
      distance: element.distance,
      duration: element.duration,
      status: element.status,
    };
  } catch (error) {
    console.error('Distance Matrix Error:', error.message);
    throw error;
  }
};

module.exports.getAutoCompleteSuggestions = async (input) => {
  if (!input) {
    throw new Error('query is required');
  }

  const apiKey = process.env.GOOGLE_MAPS_API;
  if (!apiKey) {
    throw new Error('Google Maps API key is not configured');
  }

  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === 'OK') {
      return response.data.predictions;
    } else {
      throw new Error(`Places API returned status: ${response.data.status}`);
    }
  } catch (error) {
    console.error('Autocomplete Error:', error.message);
    throw error;
  }
};
 
