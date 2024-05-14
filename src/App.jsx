import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="py-10 mx-auto md:flex">
      <div className="px-12 mx-3 my-auto">
        <h1 className="py-5 mb-6 text-3xl font-bold md:text-6xl font-yanone">Log Ingestor with Query Interface</h1>
        <p className="mb-4 text-sm md:text-lg">
          This application allows you to view logs and ingest new log entries. Click on the buttons below to get started:
        </p>
        <div className="flex space-x-4">
          <Link to="/logs" className="inline-block">
            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
              Log Query
            </button>
          </Link>
          <Link to="/ingest" className="inline-block">
            <button className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline">
              Log Ingest
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
