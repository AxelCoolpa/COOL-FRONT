

import axios from 'axios'
import { EnumActivity, EnumRoom } from '../types'
export const getLocationMap = async (listing: EnumActivity | EnumRoom) => {
    const apiKey = 'AIzaSyAwRA7j_Pu_T8dD6J1GGzf7nIdGq2z9c0c'
	try {
		// Realiza la solicitud a la API de Geocodificación
		const response = await axios('https://maps.googleapis.com/maps/api/geocode/json', {
			params: {
				address: listing.location,
				key: apiKey,
			},
		})

		// Obtiene los resultados de la búsqueda
		const results = response.data.results
        console.log(results)
		// Genera la URL de búsqueda del mapa utilizando la primera ubicación encontrada
		if (results.length > 0) {
			const location = results[0].geometry.location
			const url = `https://maps.google.com/maps?q=${location.lat},${location.lng}&output=embed`
            return url
		} 
	} catch (error) {
		console.error('Error en la solicitud a la API de Geocodificación:', error)
	}
}
