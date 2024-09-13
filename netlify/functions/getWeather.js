exports.handler = async function(event, context) {
    const { city } = JSON.parse(event.body);
    const apiKey = process.env.VITE_WEATHER_API_KEY;
    console.log('pickle')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
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