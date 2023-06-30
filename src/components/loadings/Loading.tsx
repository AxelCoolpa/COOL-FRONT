import React, { useState, useEffect } from 'react';
import './loading.css'

const Loading: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
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
            

    </>
  );
};

export default Loading;
