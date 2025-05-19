async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '37cec2f4954549e4db220ceb1da09a6';
    
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=bg&units=metric`;
  
      const response = await fetch(url);
      if (!response.ok) throw new Error('Грешка при заявката');
  
      const data = await response.json();
      const resultDiv = document.getElementById('weatherResult');
      resultDiv.innerHTML = `
        <h2>Времето в ${data.name}</h2>
        <p>Температура: ${data.main.temp}°C</p>
        <p>Състояние: ${data.weather[0].description}</p>
        <p>Влажност: ${data.main.humidity}%</p>
        <p>Вятър: ${data.wind.speed} м/с</p>
      `;
    } catch (error) {
      document.getElementById('weatherResult').innerHTML =
        'Грешка при зареждане на данни. Проверете града.';
      console.error(error);
    }
  }
  