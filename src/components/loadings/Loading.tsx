import React, { useState, useEffect } from 'react';
import './loading.css'

const Loading: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <div className="loading-animation">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
    </>
  );
};

export default Loading;
