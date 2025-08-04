import React from "react";

export default function ProjectSkeleton({ count = 3 }) {
  return (
    <div className="space-y-6 w-full">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="w-full h-40 bg-[#d7c2cc4d] rounded-xl animate-pulse shadow-sm"
        />
      ))}
    </div>
  );
}
