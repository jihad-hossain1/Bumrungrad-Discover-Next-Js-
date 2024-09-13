import React from 'react';
import { Skeleton } from '@mui/material';

export const CardLoader = ({ cardLength, gridNumber, speed }) => {
  return (
    <div className={`grid gap-5 md:grid-cols-${gridNumber} lg:grid-cols-${gridNumber} my-10`}>
      {[...Array(cardLength)].map((_, i) => (
        <div key={i} className="shadow rounded-lg overflow-hidden bg-white">
          {/* Skeleton for the image */}
          <Skeleton 
            variant="rectangular" 
            height={200} 
            animation={speed} 
            className="w-full h-[200px] object-cover" 
          />
          {/* Skeleton for text */}
          <div className="p-5">
            <Skeleton variant="text" width="60%" animation={speed} className="mb-2" />
            <Skeleton variant="text" width="80%" animation={speed} className="mb-2" />
            <Skeleton variant="text" width="40%" animation={speed} className="mb-4" />
          </div>
        </div>
      ))}
    </div>
  );
};


