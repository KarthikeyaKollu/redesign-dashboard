import React from "react";
import { FileText } from "lucide-react";

const StudyDashboard = () => {
  return (
    <div className="flex gap-8">
      {/* Collaborative Study Section */}
      <div className="w-full h-[476px]">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-emerald-700 mb-6">
          Collaborative study
        </h2>
        <DocumentList />
      </div>

      <ContinueReading />
    </div>
  );
};

const ProgressBar = ({ color, progress }) => (
  <div className="w-48 h-2 bg-gray-100 rounded-full">
    <div
      className={`h-full rounded-full ${color}`}
      style={{ width: `${progress}%` }}
    />
  </div>
);

export const ContinueReading = () => {
  return (
    <>
      {/* Continue Reading Section */}
      <div className="w-full h-[476px]">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-emerald-700 mb-6">
          Continue reading
        </h2>
        <ProgressList />
      </div>
    </>
  );
};

const ProgressList = () => {
  const units = [
    { id: 5, progress: 25, color: "bg-orange-400" },
    { id: 1, progress: 60, color: "bg-red-400" },
    { id: 2, progress: 45, color: "bg-blue-400" },
    { id: 6, progress: 15, color: "bg-purple-500" },
  ];

  return (
    <div className="bg-gray-50 rounded-2xl w-full h-[419px]">
      <div className="p-6">
        <div className="space-y-6 py-7">
          {units.map((unit, index) => (
            <div key={unit.id}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg text-indigo-900 font-semibold">
                    Unit {unit.id}-
                  </span>
                  <span className="text-xs sm:text-sm md:text-base text-gray-500">
                    Medical Apparatus
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <ProgressBar color={unit.color} progress={unit.progress} />
                  <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium w-12">
                    {unit.progress}%
                  </span>
                </div>
              </div>

              {index !== units.length - 1 && (
                <div className="h-px bg-gray-200 mt-6" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <button className="text-sm md:text-base text-indigo-600 font-medium flex items-center gap-2 hover:text-indigo-700 transition-colors">
            View All
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export const DocumentList = () => {
  const documents = [
    { number: 1, more: 2 },
    { number: 3, more: 2 },
    { number: 4, more: 2 },
    { number: 1, more: 2 },
  ];

  return (
    <div className="bg-gray-50 rounded-2xl w-full h-[419px]">
      <div className="p-6">
        <div className="divide-y divide-gray-200">
          {documents.map((doc, index) => (
            <DocumentRow key={index} {...doc} />
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <button className="text-sm md:text-base text-indigo-600 font-medium flex items-center gap-2 hover:text-indigo-700 transition-colors">
            View All
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyDashboard;
