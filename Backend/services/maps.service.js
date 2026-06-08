import axios from "axios";


module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const loc = response.data.results[0].geometry.location;
            return {
                ltd: loc.lat,
                long: loc.lng
            }
        }

    } catch (error) {
        console.error(error);
        throw error;
    }
}