import React from 'react'
import styles from '../../styles/Global' 

interface Props {
    children: React.ReactNode;
}

const DashContainer: React.FC<Props> = ({ children }) => {
    return (
        <div className={`${styles.dashContainerOut}`}>
            <div className={`${styles.dashContainerIn}`}>
                { children }
            </div>
        </div>
    )
}

export default DashContainer