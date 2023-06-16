import React from 'react';
import styles from '../../styles/Global' 


interface Props {
    children: React.ReactNode;
}

const GridColumns: React.FC<Props> = ({ children }) => {
  return (
    <div className={`${styles.columnsOne}`}>
        {children}
    </div>
  );
};

export default GridColumns;