import React from "react";

const Loader = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen ">
        <div className="w-16 h-16 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
