import axios from 'axios'

export const getUsersAPI = async () => {
	try {
		const response = await axios('https://cool-backend-production.up.railway.app/api/users')
		// Aquí puedes realizar el manejo de la respuesta de la API
		// por ejemplo, validar la respuesta o extraer datos relevantes
		// y retornar cualquier resultado necesario
		return response.data // Puedes ajustar esto según la estructura de la respuesta de la API
	} catch (error: any) {
		throw new Error(error.message)
	}
}
