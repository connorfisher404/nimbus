exports.handler = async function(event, context) {
    const { city } = JSON.parse(event.body);
    const apiKey = process.env.VITE_WEATHER_API_KEY;

    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit={limit}&appid=${apiKey}`;
  
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