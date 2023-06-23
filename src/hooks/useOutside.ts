import { useEffect } from 'react'

export const useOutsideAlerter = (ref: any, setX: any): void => {
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		// function handleClickOutside(event: React.MouseEvent<HTMLElement>) {
		function handleClickOutside(event: any) {
			if (ref.current && !ref.current.contains(event.target)) {
				setX(false)
			}
		}
		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [ref, setX])
}
