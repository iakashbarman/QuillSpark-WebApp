import React from "react";

const Metric = ({ value, label }) => (
  <div className="w-44 mx-2 p-6 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] backdrop-blur-sm">
    <div className="text-2xl md:text-3xl font-extrabold text-[#b892ff]">{value}</div>
    <div className="text-sm text-indigo-200 mt-2">{label}</div>
  </div>
);

export default function Metrics() {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-4">
      <Metric value="10M+" label="Active Users" />
      <Metric value="50M+" label="Messages Daily" />
      <Metric value="99.9%" label="Uptime" />
      <Metric value="150+" label="Countries" />
    </div>
  );
}