import axios from 'axios'
import { baseURL } from '../baseURL'
import { FilterForm } from '../features/activitiesSlice'

export const filterActivitiesAPI = async (formData : FilterForm) => {
	try {
		const response = await axios.post(`${baseURL}/destinations`,formData)
		return response.data // Puedes ajustar esto según la estructura de la respuesta de la API
	} catch (error: any) {
		throw new Error(error.message)
	}
}