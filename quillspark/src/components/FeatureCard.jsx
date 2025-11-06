import React from "react";

export default function FeatureCard({ Icon, title, desc }) {
  return (
    <article className="flex flex-col gap-7 p-6 rounded-2xl frosted border-[rgba(255,255,255,0.03)] shadow-inner min-h-[170px]">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#7b5bff] to-[#b892ff] flex items-center justify-center text-white shadow-md shrink-0">
          {/* Icon - JSX element passed from FeaturesGrid */}
          {Icon}
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">{title}</h4>
          <p className="text-sm text-indigo-200 mt-3 max-w-md">{desc}</p>
        </div>
    </article>
  );
}