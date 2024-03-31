import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Cardskeleton() {
  return (
    <div className="relative w-full">
      <div className="w-full relative">
        {/* Product Image Skeleton */}
        <div className="p-2">
          <Skeleton height={156} />
        </div>
        {/* Add to cart button Skeleton*/}
        <button className="px-2">
          <Skeleton width={210} />
        </button>
      </div>
      <div className="my-3 max-w-44">
        <h3 className="px-2">
          <Skeleton width={200} />
        </h3>
        <p className="px-2">
          <Skeleton width={150} />
        </p>
        <p className="px-2">
          <Skeleton width={100} />
        </p>
      </div>
    </div>
  );
}
