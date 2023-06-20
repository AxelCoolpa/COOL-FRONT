import axios from 'axios'
import ceateAdventureFormData from '../features/createAdventureSlice'

import { getUsersAPI } from './getUsers'

export const ceateAdventureAPI = async (formData: typeof ceateAdventureFormData) => {
	const user = await getUsersAPI()
	const userID = user[1]._id

	const URL = `https://cool-backend-production.up.railway.app/api/destination/${userID}/create`

	try {
		const response = await axios.post(URL, formData)
		// Aquí puedes realizar el manejo de la respuesta de la API
		// por ejemplo, validar la respuesta o extraer datos relevantes
		// y retornar cualquier resultado necesario
		return response.data // Puedes ajustar esto según la estructura de la respuesta de la API
	} catch (error: any) {
		throw new Error(error.message)
	}
}
