import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-700 dark:text-white">
          {`Whoops! This page doesn't exist.`}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          {`The page you're looking for was not found. It may have been removed,
          renamed, or never existed in the first place.`}
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
          {`Go Back Home`}
        </button>
      </div>
    </div>
  );
};

export default NotFound;
