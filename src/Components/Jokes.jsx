import React, { useState } from 'react';
import axios from 'axios';

function Jokes() {
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
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 space-y-12">
      <div className="flex flex-col justify-center items-center bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-3xl h-[60vh] w-full max-w-lg p-8 space-y-8">
        <h1 className="text-3xl font-extrabold text-sky-300 tracking-wide drop-shadow-md text-center">
          Random Jokes Generator 😂
        </h1>

        <div className="flex gap-4 w-full">
          <button
            onClick={fetchJoke}
            className="flex-1 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            {loading ? 'Loading...' : 'Generate'}
          </button>
          <button
            onClick={() => {
              setJoke(null);
              setError(null);
            }}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Clear
          </button>
        </div>

        <div className="bg-white/10 text-white backdrop-blur-sm rounded-lg p-6 w-full min-h-[140px] flex flex-col justify-center items-center text-center font-medium text-lg shadow-inner border border-white/10">
          {error && <p className="text-red-400">{error}</p>}
          {joke && <p>{joke}</p>}
          {!joke && !loading && !error && (
            <p className="text-slate-400 italic">Click "Generate" to get a joke!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Jokes;
