import axios from 'axios'
import updateAdventureFormData from '../features/updateAdventureSlice'

import { baseURL } from '../baseURL'

export const updateAdventureAPI = async (
	formData: typeof updateAdventureFormData,
	userID: string,
	destinationID: string
) => {
	const URL = `${baseURL}/destination/${userID}/update/${destinationID}`

	try {
		const response = await axios.put(URL, formData, {
			headers: { 'Content-Type': 'multipart/form-data' },
		})

		return response.data
	} catch (error: any) {
		throw new Error(error.message)
	}
}
