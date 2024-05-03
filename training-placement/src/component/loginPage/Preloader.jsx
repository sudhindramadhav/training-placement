import React from 'react';

const Preloader = () => {
  const spinKeyframes = {
    '0%': { transform: 'rotate(0deg)'},
    '100%': { transform: 'rotate(360deg)'},
  };

  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex flex-col justify-center items-center z-50'>
      <div 
        className='w-14 h-14 rounded-full'
        style={{ 
          animation: 'spin 2s linear infinite',
          borderTop: '6px solid rgba(255,255,255,1)',
        }}
      ></div>
      <p className='text-white text-lg font-bold mt-4'>Please wait while loading ...</p>
      <style>
        {`
          @keyframes spin {
            ${Object.keys(spinKeyframes).map(key => `${key} { ${Object.entries(spinKeyframes[key]).map(([prop, value]) => `${prop}: ${value};`).join(' ')} }`).join(' ')}
          }
        `}
      </style>
    </div>
  );
};

export default Preloader;
