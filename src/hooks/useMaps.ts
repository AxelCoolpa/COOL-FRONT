import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

export const useMaps = (formData: any) => {
	const [searchValue, setSearchValue] = useState('')
	const [mapUrl, setMapUrl] = useState('')

	const handleSearch = async (e: React.FormEvent) => {
		e.preventDefault()

		// Genera la URL de búsqueda del mapa utilizando el valor del input de búsqueda
		const apiKey = 'AIzaSyAwRA7j_Pu_T8dD6J1GGzf7nIdGq2z9c0c'
		try {
			// Realiza la solicitud a la API de Geocodificación
			const response = await axios('https://maps.googleapis.com/maps/api/geocode/json', {
				params: {
					address: searchValue,
					key: apiKey,
				},
			})

			// Obtiene los resultados de la búsqueda
			const results = response.data.results

			// Genera la URL de búsqueda del mapa utilizando la primera ubicación encontrada
			if (results.length > 0) {
				formData.location = results[0].formatted_address
				const location = results[0].geometry.location
				const url = `https://maps.google.com/maps?q=${location.lat},${location.lng}&output=embed`
				setMapUrl(url)
			} else {
				toast('Warning ! The address entered is incorrect', {
					icon: '⚠️',
					style: {
						background: '#ff9800',
						color: '#fff',
					},
				})
			}
		} catch (error) {
			console.error('Error en la solicitud a la API de Geocodificación:', error)
		}
	}

	return { handleSearch, mapUrl, searchValue, setMapUrl, setSearchValue }
}
