function showweatherDetails(event) {
      event.preventDefault();
       const city = document.getElementById('city').value;
      const apiKey = '94c43e34e0ab3f7c150d8f80dc06f88b'; // Replace 'YOUR_API_KEY' with your actual API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                <p>Temperature: ${data.main.temp} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>`;
      }).catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
      });
}
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
document.getElementById('weatherForm2').addEventListener('submit',showweatherDetailsByLatLon );

function showweatherDetailsByLatLon(event){
    event.preventDefault();
       const lat = document.getElementById('lat').value;
       const lon = document.getElementById('lon').value;
      const apiKey = '94c43e34e0ab3f7c150d8f80dc06f88b'; // Replace 'YOUR_API_KEY' with your actual API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = document.getElementById('weatherInfo1');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} &#8451;</p>
        <p>Weather: ${data.weather[0].description}</p>`;
      }).catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo1');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
      });
}
