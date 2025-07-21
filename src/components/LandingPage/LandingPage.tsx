// src/components/LandingPage/LandingPage.tsx
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-green-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-5xl font-bold text-amber-700 drop-shadow-md">
          Stain Vision XR
        </h1>
        <p className="text-lg text-gray-700">
          Visualize your next staining project before you even open a can.
          Upload photos of your wood structures and preview different stain
          colors in real-time.
        </p>
        <button className="px-6 py-3 bg-amber-600 text-white rounded-full text-lg hover:bg-amber-700 transition-all shadow-lg">
          Try it Now
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
