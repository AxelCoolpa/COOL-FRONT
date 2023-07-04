import React from 'react'
import styles from '../../styles/Global' 

interface Props {
    children: React.ReactNode;
}

const DashContainer2: React.FC<Props> = ({ children }) => {
    return (
        <div className={`${styles.dashContainerOut2}`}>
            <div className={`${styles.dashContainerIn2}`}>
                { children }
            </div>
        </div>
    )
}

export default DashContainer2;