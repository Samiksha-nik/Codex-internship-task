import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [text, setText] = useState(null);
  const [summary, setSummary] = useState(null);

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const Summarize = async () => {
    const options = {
      method: 'GET',
      url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
      params: {
        url: text,
        lang: 'en',
        engine: '2',
      },
      headers: {
        'x-rapidapi-key': '016c808f0fmsh3a137f4d5d34c29p1d971ajsnd4e36078df26',
        'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com',
      },
    };
    const response = await axios.request(options);
    setSummary(response.data.summary);
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-blue-100 to-gray-300 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-xl w-full max-w-lg p-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
          Article Summarizer
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Paste a URL below to get a quick summary of the article.
        </p>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter URL"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleInput}
          />
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200"
            onClick={Summarize}
          >
            Summarize
          </button>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Summary:</h2>
          <div className="w-full h-40 p-4 bg-gray-100 border border-gray-300 rounded-lg overflow-y-auto text-gray-800">
            {summary || (
              <p className="text-gray-500 text-sm">
                The summary will appear here after you provide a URL.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
