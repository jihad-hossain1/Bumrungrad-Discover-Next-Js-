import React from 'react';

const CardLoader = ({ cardLength = 4, gridNumber = 4, speed = 'normal' }) => {
  // Set custom animation class based on speed
  const animationClass =
    speed === 'slow' ? 'animate-pulse-slow' : speed === 'fast' ? 'animate-pulse-fast' : 'animate-pulse';

  return (
    <div className={`grid grid-cols-1 md:grid-cols-${gridNumber} gap-4 mt-4`}>
      {[...Array(cardLength)].map((_, i) => (
        <div className="animate-pulse w-full bg-[#DFE2F4] shadow-lg rounded-lg p-4" key={i}>
          <div className="card-body space-y-4">
            {/* Avatar placeholders */}
            <div className="flex justify-between items-center">
              <div className={`w-16 h-16 bg-cream ${animationClass} rounded-full`}></div>
              <div className={`w-16 h-16 bg-cream ${animationClass} rounded-full`}></div>
            </div>
            
            {/* Text placeholders with animation */}
            <div className="space-y-2">
              <div className={`w-3/4 h-4 bg-cream ${animationClass} rounded`}></div>
              <div className={`w-1/2 h-4 bg-cream ${animationClass} rounded`}></div>
            </div>
            
            {/* More avatar placeholders */}
            <div className="flex justify-between items-center">
              <div className={`w-16 h-16 bg-cream ${animationClass} rounded-full`}></div>
              <div className={`w-16 h-16 bg-cream ${animationClass} rounded-full`}></div>
            </div>
            
            {/* Footer text animation */}
            <div className="space-y-2">
              <div className={`w-full h-4 bg-slate-200 ${animationClass} rounded`}></div>
              <div className={`w-2/3 h-4 bg-slate-200 ${animationClass} rounded`}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardLoader;
