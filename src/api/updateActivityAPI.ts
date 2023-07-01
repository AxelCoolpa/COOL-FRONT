import axios from 'axios'
import updateActivityFormData from '../features/updateActivitySlice'

import { baseURL } from '../baseURL'

export const updateActivityAPI = async (
	formData: typeof updateActivityFormData,
	providerID: string,
	activityID: string
) => {
	const URL = `${baseURL}/activity/${providerID}/update/${activityID}`

	try {
		const response = await axios.put(URL, formData, {
			headers: { 'Content-Type': 'multipart/form-data' },
		})

		return response.data
	} catch (error: any) {
		throw new Error(error.message)
	}
}
