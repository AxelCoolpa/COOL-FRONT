import axios from 'axios'
import { baseURL } from '../baseURL'

export const deleteDestinationAPI = async (destinationID: string): Promise<void> => {
	try {
		const response = await axios.delete(`${baseURL}/destination/${destinationID}`)
		return response.data
	} catch (error: any) {
		throw new Error(error.message)
	}
}
