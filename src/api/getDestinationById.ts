import axios from 'axios'
import { baseURL } from '../baseURL'

export const getDestinationById = async (destinationID: string) => {
	try {
		const response = await axios.get(`${baseURL}/destination/${destinationID}`)
		return response.data
	} catch (error: any) {
		throw new Error(error.message)
	}
}
