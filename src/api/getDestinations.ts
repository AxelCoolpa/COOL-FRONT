import axios from 'axios'

const baseURL = 'http://localhost:3000/api'

export const getDestinations = async () => {
	try {
		const response = await axios.get(`${baseURL}/destinations`)
		return response.data // Puedes ajustar esto según la estructura de la respuesta de la API
	} catch (error: any) {
		throw new Error(error.message)
	}
}
