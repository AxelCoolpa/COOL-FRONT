import axios from 'axios'
import { baseURL } from '../baseURL'

export const getActivities = async () => {
	try {
		const response = await axios.get(`${baseURL}/activities`)

		return response.data
	} catch (error: any) {
		throw new Error(error.message)
	}
}
