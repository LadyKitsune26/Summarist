// src/components/SkeletonCard.tsx
"use client";
export default function SkeletonCard() {
  return (
    <div className="animate-pulse bg-white rounded-md p-4 shadow">
      <div className="h-36 bg-slate-200 rounded mb-3" />
      <div className="h-4 bg-slate-200 rounded w-3/4 mb-2" />
      <div className="h-3 bg-slate-200 rounded w-1/2" />
    </div>
  );
}
