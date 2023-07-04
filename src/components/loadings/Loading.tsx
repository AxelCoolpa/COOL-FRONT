import React, { useState, useEffect } from 'react';
import './loading.css'

const Loading: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(true);
    }, 1000);
    return () => {clearTimeout(timeout)}
  }, []);

  if (isLoading) {
    return (
      <div className="loading-animation">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      {isLoading}
    </>
  );
};

export default Loading;
