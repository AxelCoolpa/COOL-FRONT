import axios from 'axios'
import { baseURL } from '../baseURL'

export const getDestinations = async () => {
	try {
		const response = await axios.get(`${baseURL}/destinations`)
		console.log(response.data)
		return response.data // Puedes ajustar esto según la estructura de la respuesta de la API
	} catch (error: any) {
		throw new Error(error.message)
	}
}
