import React from 'react'
import styles from '../../styles/Global'

interface Props {
    children: React.ReactNode;
}

const SidebarContainer: React.FC<Props> = ({ children }) => {
    return (
        <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0  md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
            {children}
        </nav>
    )
}

export default SidebarContainer;