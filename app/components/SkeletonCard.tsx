"use client";

export default function SkeletonCard() {
  return (
    <div className="border rounded-lg shadow p-4 animate-pulse bg-gray-100 h-64 flex flex-col justify-between">
      <div className="bg-gray-300 h-32 w-full rounded mb-4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
}
