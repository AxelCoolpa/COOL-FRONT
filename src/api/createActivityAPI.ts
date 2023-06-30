import axios from 'axios'
import createActiviyFormData from '../features/createActivitySlice'

import { baseURL } from '../baseURL'

export const createActivityAPI = async (
	formData: typeof createActiviyFormData,
	providerID: string
) => {
	const URL = `${baseURL}/activity/${providerID}/create`

	try {
		const response = await axios.post(URL, formData, {
			headers: { 'Content-Type': 'multipart/form-data' },
		})

		return response.data
	} catch (error: any) {
		throw new Error(error.message)
	}
}
