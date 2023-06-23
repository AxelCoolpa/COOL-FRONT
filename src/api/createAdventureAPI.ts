import axios from 'axios'
import createAdventureFormData from '../features/createAdventureSlice'

import { baseURL } from '../baseURL'

export const createAdventureAPI = async (
	formData: typeof createAdventureFormData,
	userID: string
) => {
	const URL = `${baseURL}/destination/${userID}/create`

	try {
		const response = await axios.post(URL, formData,{headers: {'Content-Type': 'multipart/form-data'},})
		// Aquí puedes realizar el manejo de la respuesta de la API
		// por ejemplo, validar la respuesta o extraer datos relevantes
		// y retornar cualquier resultado necesario
		return response.data // Puedes ajustar esto según la estructura de la respuesta de la API
	} catch (error: any) {
		throw new Error(error.message)
	}
}
