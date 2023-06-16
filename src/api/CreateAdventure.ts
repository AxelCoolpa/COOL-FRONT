import axios from 'axios'
import ceateAdventureFormData from '../features/ceateAdventureSlice'

const userID = '648876449bf8574ce56a694a'

export const ceateAdventureAPI = async (formData: typeof ceateAdventureFormData) => {
	try {
		const response = await axios.post(
			`http://localhost:3000/api/destinations/${userID}/create`,
			formData
		)
		// Aquí puedes realizar el manejo de la respuesta de la API
		// por ejemplo, validar la respuesta o extraer datos relevantes
		// y retornar cualquier resultado necesario
		return response.data // Puedes ajustar esto según la estructura de la respuesta de la API
	} catch (error: any) {
		throw new Error(error.message)
	}
}
