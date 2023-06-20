import axios from 'axios'
import { baseURL } from '../baseURL'

export const getUsersAPI = async () => {
	try {
		const response = await axios(`${baseURL}/users`)
		// Aquí puedes realizar el manejo de la respuesta de la API
		// por ejemplo, validar la respuesta o extraer datos relevantes
		// y retornar cualquier resultado necesario
		return response.data // Puedes ajustar esto según la estructura de la respuesta de la API
	} catch (error: any) {
		throw new Error(error.message)
	}
}
