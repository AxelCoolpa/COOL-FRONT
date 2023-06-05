import React from 'react';

interface CustomSectionsProps {
  items: React.ReactNode[];
  columns?: number;
}

const GridSection: React.FC<CustomSectionsProps> = ({ items, columns = 2 }) => {
  return (
    <div className={`grid grid-cols-${columns} gap-4`}>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default GridSection;