import React from "react";

const Error = ({ error }) => {
  return (
    <div className="flex items-center justify-center min-h-[100vh] pb-96">
      <div
        className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
        role="alert"
      >
        <p className="font-bold">Error</p>
        <p>{error}</p>
      </div>
    </div>
  );
};

export default Error;
