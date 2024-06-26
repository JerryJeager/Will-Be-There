import React from 'react';

const ButtonSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-9 w-9 border-t-[3px] border-b-[3px] border-white"></div>
    </div>
  );
};

export default ButtonSpinner;
