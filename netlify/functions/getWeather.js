exports.handler = async function(event, context) {

    const { latitude,longitude } = JSON.parse(event.body);
    const apiKey = process.env.VITE_WEATHER_API_KEY;
    const lat = latitude
    const lon = longitude
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return {
        statusCode: 200,
        body: JSON.stringify(data)
      };
    } catch (error) {
      return {
        statusCode: 422,
        body: String(error)
      };
    }
};