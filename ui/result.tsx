"use client";

import { useEffect, useRef, useState } from "react";
import { ResultProps } from "@/app/lib/types";

export const Result = ({ response, error, isPending }: ResultProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const updateImageSize = () => {
    if (imageRef.current) {
      const renderedWidth = imageRef.current.clientWidth;
      const renderedHeight = imageRef.current.clientHeight;
      setImageSize({ width: renderedWidth, height: renderedHeight });
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateImageSize);
    return () => window.removeEventListener("resize", updateImageSize);
  }, []);

  if (isPending)
    return (
      <p className="text-black text-2xl p-12">
        Detecting faces, please wait...
      </p>
    );

  if (error)
    return <p className="text-red-200 text-2xl p-12">Error: {error}.</p>;

  if (!response)
    return (
      <p className="text-yellow-300 text-2xl p-12">No image detected...</p>
    );

  const imageUrl = response.results[0]?.name;
  const originalWidth = response.results[0]?.width;
  const originalHeight = response.results[0]?.height;
  const entities = response.results[0]?.entities[0]?.objects || [];

  return (
    <div className="relative inline-block w-full max-w-full">
      {/* Display the image */}
      <img
        ref={imageRef}
        src={imageUrl}
        alt="Detected faces"
        className="w-full h-auto"
        onLoad={updateImageSize}
      />

      {/* Overlay bounding boxes on the image */}
      {entities.map((face: any, index: number) => {
        // Calculate bounding box positions relative to the rendered image size
        const left = face.box[0] * imageSize.width;
        const top = face.box[1] * imageSize.height;
        const width = face.box[2] * imageSize.width;
        const height = face.box[3] * imageSize.height;

        return (
          <div
            key={index}
            className="absolute border-2 md:border-4 border-red-500"
            style={{
              left: `${left}px`,
              top: `${top}px`,
              width: `${width}px`,
              height: `${height}px`,
            }}
          >
            {/* Add confidence label */}
            <span className="absolute bottom-[-20px] left-0 text-red-500 bg-white bg-opacity-90 p-1 text-xs rounded font-bold">
              Confidence: {(face.entities[0]?.classes?.face * 100).toFixed(2)}%
            </span>
          </div>
        );
      })}
    </div>
  );
};
