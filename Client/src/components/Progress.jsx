// components/Progress.jsx
import React from "react";

const Progress = ({ total, easy, medium, hard }) => {
  // calculate percentages
  const totalCompleted = easy.completed + medium.completed + hard.completed;
  const totalPercent = ((totalCompleted / total) * 100).toFixed(0);

  return (
    <div className="rounded-2xl p-6 w-full max-w-5xl mx-auto text-black">
      {/* Header */}
      <div className="flex flex-col items-center mb-6">
  
        <div className="relative w-24 h-24 flex items-center justify-center">
          <svg className="absolute w-full h-full -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              stroke="#d1d5db" // gray-300
              strokeWidth="10"
              fill="none"
            />
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              stroke="black"
              strokeWidth="10"
              fill="none"
              strokeDasharray={`${totalPercent * 2.83}, 283`}
              strokeLinecap="round"
            />
          </svg>
          <span className="text-xl font-bold">{totalPercent}%</span>
        </div>
        <p className="mt-2 text-gray-600">
          {totalCompleted} / {total} completed
        </p>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Easy */}
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm font-medium text-gray-600">Easy</p>
          <p className="text-lg font-bold text-black">
            {easy.completed} / {easy.total}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className="bg-black h-2 rounded-full"
              style={{
                width: `${(easy.completed / easy.total) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Medium */}
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm font-medium text-gray-600">Medium</p>
          <p className="text-lg font-bold text-black">
            {medium.completed} / {medium.total}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className="bg-black h-2 rounded-full"
              style={{
                width: `${(medium.completed / medium.total) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Hard */}
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm font-medium text-gray-600">Hard</p>
          <p className="text-lg font-bold text-black">
            {hard.completed} / {hard.total}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className="bg-black h-2 rounded-full"
              style={{
                width: `${(hard.completed / hard.total) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
