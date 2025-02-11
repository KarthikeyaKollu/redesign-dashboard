"use client";
import React from "react";
import { Area, ResponsiveContainer, Pie, Cell } from "recharts";

import dynamic from "next/dynamic";

const LineChart = dynamic(
  () => import("recharts").then((mod) => mod.LineChart),
  { ssr: false }
);
const AreaChart = dynamic(
  () => import("recharts").then((mod) => mod.AreaChart),
  { ssr: false }
);
const PieChart = dynamic(() => import("recharts").then((mod) => mod.PieChart), {
  ssr: false,
});

const TrackerDashboard = () => {
  // Generate smooth wave-like data for subject activity
  const activityData = Array.from({ length: 50 }, (_, i) => ({
    name: i,
    value: Math.sin(i / 8) * 0.3 + Math.sin(i / 4) * 0.2 + 0.5,
  }));

  // Smoother trend data for small charts
  const trendData = Array.from({ length: 15 }, (_, i) => ({
    name: i,
    value: Math.sin(i / 5) * 0.15 + 0.85,
  }));

  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold text-emerald-700 mb-4">Tracker</h1>

      <div className="bg-[#F6F7F9] w-full  flex justify-center items-center rounded-xl ">
        <div className="flex flex-col lg:flex-row gap-6 w-full max-w-7xl mx-auto p-4">
          <ConceptualUsage />
          <RightColumn trendData={trendData} activityData={activityData} />
        </div>
      </div>
    </div>
  );
};

export default TrackerDashboard;

const CircularProgress = () => {
  const data = [
    { name: "Completed", value: 75 }, // Progress value
    { name: "Remaining", value: 25 }, // Remaining value
  ];

  const colors = ["#10b981", "#f3f4f6"]; // Green and gray

  return (
    <div style={{ transform: "rotate(-90deg)" }}>
      <PieChart width={100} height={100}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={25}
          outerRadius={38}
          startAngle={90}
          endAngle={450}
          paddingAngle={0}
          cornerRadius={10}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
      </PieChart>
      {/* Percentage Text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(90deg)",
          fontSize: "14px",
          fontWeight: "bold",
          color: "#111827", // Dark gray
        }}
      >
        {`75%`}
      </div>
    </div>
  );
};

function ConceptualUsage() {
  const data = [
    { label: "Pdf viewer", value: 44, color: "#f87171" },
    { label: "Pdf viewer", value: 56, color: "#60a5fa" },
    { label: "Pdf viewer", value: 22, color: "#c084fc" },
    { label: "Pdf viewer", value: 79, color: "#fb923c" },
  ];

  return (
    <div className="w-full ">
      <div className="bg-white rounded-2xl  p-6 shadow-lg h-full w-full mx-auto">
        <div className="mx-auto min-w-[250px]">
          <h2 className="text-xl text-gray-700 font-medium mb-6 text-center sm:text-left">
            Conceptual Usage
          </h2>
          <div className="space-y-4 overflow-auto">
            {data.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 lg:text-sm xl:text-md text-xs">{item.label}</span>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="h-2 bg-gray-100 w-full rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${item.value}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                  <span
                    style={{ color: item.color }}
                    className="lg:text-sm xl:text-md text-xs font-semibold"
                  >
                    {item.value}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function RightColumn({ trendData, activityData }) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6 ">
        {/* Cumulative Progress */}
        <div className="bg-white rounded-2xl p-3 pt-5  w-full h-[160px] shadow-lg">
          <h2 className="text-gray-700  mb-4 text-center lg:text-sm xl:text-md text-xs">
            Cumulative Progress
          </h2>
          <div className="flex justify-center">
            <div className="relative lg:w-20 lg:20 xl:w-24 xl:h-24">
              <CircularProgress />
            </div>
          </div>
        </div>

        {/* Current Knowledge */}
        <div className="bg-white rounded-2xl p-2 pt-4 shadow-lg w-full h-[160px]">
          <h2 className="text-gray-700  mb-4 text-center lg:text-sm xl:text-md text-xs">
            Current Knowledge
          </h2>
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold mb-4 text-black">86%</span>
            <div className="w-full h-16">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={trendData}
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="colorValueCurrent"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#10b981"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorValueCurrent)"
                    isAnimationActive={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Total Study Hour */}
        <div className="bg-white rounded-2xl p-2 pt-4 shadow-lg w-full h-[160px] overflow-hidden">
          <h2 className="text-gray-700  font-medium mb-4 text-center lg:text-sm xl:text-md text-xs">
            Total Study Hour
          </h2>
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold mb-4 text-black">23</span>
            <div className="w-full h-16">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={trendData}
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="colorValueStudy"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#10b981"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorValueStudy)"
                    isAnimationActive={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Subject Activity */}
      <div className="bg-white rounded-2xl p-2 pt-4 shadow-lg w-full h-[160px]">
        <h2 className="text-gray-700 font-medium mb-6">Subject Activity</h2>
        <div className="h-[90px] overflow-hidden">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={activityData}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient
                  id="colorValueActivity"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke="#10b981"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorValueActivity)"
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
