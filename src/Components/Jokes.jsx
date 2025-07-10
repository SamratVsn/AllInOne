import React, { useState } from 'react';
import axios from 'axios';

function Home() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    setJoke(null);

    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/jokes', {
        headers: { 'X-Api-Key': 'TpNOyu3SECZCGcFsiyV4tA==ygzGcA83n0Vq0P74' }, 
      });
      setJoke(response.data[0].joke);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch joke!');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen mx-auto flex flex-col justify-center items-center bg-gradient-to-br from-slate-600 to-slate-800 p-6 space-y-12">
      <div className="flex flex-col justify-center items-center bg-white shadow-2xl rounded-3xl h-[60vh] w-full max-w-lg p-8 space-y-8">
        <h1 className="text-3xl font-extrabold text-cyan-600 tracking-wide drop-shadow-md">
          Random Jokes Generator
        </h1>

        <div className="flex gap-6 w-full">
          <button
            onClick={fetchJoke}
            className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-lg shadow-md transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300"
          >
            {loading ? 'Loading...' : 'Generate'}
          </button>
          <button
            onClick={() => {
              setJoke(null);
              setError(null);
            }}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg shadow-md transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-red-300"
          >
            Clear
          </button>
        </div>

        <div className="bg-slate-100 rounded-lg p-6 w-full min-h-[140px] flex flex-col justify-center items-center text-center text-gray-800 font-medium text-lg shadow-inner">
          {error && <p className="text-red-500">{error}</p>}
          {joke && <p>{joke}</p>}
          {!joke && !loading && !error && (
            <p className="text-gray-400 italic">Click "Generate" to get a joke!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
