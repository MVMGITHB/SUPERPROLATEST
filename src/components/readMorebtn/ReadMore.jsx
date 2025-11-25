"use client";
import { useState } from "react";

export default function ReadMore({ text, limit = 200 }) {
  const [expanded, setExpanded] = useState(false);

  const isLong = text.length > limit;
  const displayText = expanded
    ? text
    : text.substring(0, limit) + (isLong ? "..." : "");

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: displayText }}
      />

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-600 underline -mt-1 block mx-auto"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
}
