import React from 'react'
import styles from '../../styles/Global' 

interface Props {
    children: React.ReactNode;
}

const SidebarContainer: React.FC<Props> = ({ children }) => {
    return (
        <div className={`${styles.navBlockOut}`}>
            <div className={`${styles.navBlockIn}`}>
                { children }
            </div>
        </div>
    )
}

export default SidebarContainer;