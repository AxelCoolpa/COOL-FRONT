import React from 'react'

interface MapProps {
	w?: number
	h?: number
}

const Map: React.FC<MapProps> = ({ w, h }) => {
	return (
		<iframe
			src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17090799.40050517!2d-82.28714719430437!3d8.55800738490379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa61583c8be2be3%3A0x79eee04d1fa59bcf!2zUGFuYW3DoQ!5e0!3m2!1ses!2sco!4v1686660412555!5m2!1ses!2sco'
			width={w || '1000'}
			height={h || '600'}
			style={{ border: 0, borderRadius: 20 }}
			// allowfullscreen=''
			loading='lazy'
			// referrerpolicy='no-referrer-when-downgrade'
		></iframe>
	)
}

export default Map