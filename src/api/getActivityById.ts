import axios from 'axios'
import { baseURL } from '../baseURL'

export const getActivityById = async (activityID: string) => {
	try {
		const response = await axios.get(`${baseURL}/activity/${activityID}`)

		return response.data
	} catch (error: any) {
		throw new Error(error.message)
	}
}
