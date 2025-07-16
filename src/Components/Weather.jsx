import React, { useState } from 'react';
import axios from 'axios'

function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    try {
      const weather = await axios.get(`https://api.weatherapi.com/v1/current.json?key=e65c880a463e4847b38121412251607&q=${city}`)
      setWeather(weather.data);
      setLoading(true);
      { weather && (setLoading(false)) }
      setError('');
    }
    catch (error) {
      setError('City not found or error fetching data.');
      console.error(error);
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#031e41] to-[#033786] flex flex-col items-center justify-center pt-20">
      <div className="flex gap-3 mt-10 mb-1">
        <input type="text" placeholder='Enter a city name' value={city} required onChange={(e) => setCity(e.target.value)} onKeyDown={(e) => { if (e.key == 'Enter') { fetchWeather(); } }} className="border-none outline-none px-4 py-3 rounded-full w-64 bg-white/10 text-white placeholder:text-slate-400 shadow-lg" />
        <button onClick={fetchWeather} className="bg-cyan-400 hover:bg-cyan-500 transition text-white px-4 py-3 rounded-full shadow-lg">🔍 Search</button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {loading && <div className="mt-8 text-white animate-pulse">Loading...</div>}
      {weather && (
        <div className="mt-10 mb-10 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-lg shadow-2xl p-8 rounded-3xl max-w-sm text-center text-white w-full border border-white/20">
          <h2 className="text-2xl font-bold mb-1">{weather.location.name}, {weather.location.country}</h2>
          <p className="text-sm mb-4 text-white/70">{weather.location.localtime}</p>

          <div className="flex flex-col items-center">
            <img
              src={weather.current.condition.icon}
              alt={weather.current.condition.text}
              className="w-20 h-20 mb-2"
            />
            <p className="text-4xl font-bold mb-1">{weather.current.temp_c}°C</p>
            <p className="text-lg text-white/80 mb-4">{weather.current.condition.text}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-white/70">Feels Like</p>
              <p className="font-semibold">{weather.current.feelslike_c}°C</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-white/70">Humidity</p>
              <p className="font-semibold">{weather.current.humidity}%</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-white/70">Wind</p>
              <p className="font-semibold">{weather.current.wind_kph} kph</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-white/70">Cloud Covered</p>
              <p className="font-semibold">{weather.current.cloud}%</p>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Weather