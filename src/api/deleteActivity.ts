import axios from 'axios'
import { baseURL } from '../baseURL'

export const deleteActivityAPI = async (activityID: string): Promise<void> => {
	try {
		const response = await axios.delete(`${baseURL}/activity/${activityID}`)
		return response.data
	} catch (error: any) {
		throw new Error(error.message)
	}
}
