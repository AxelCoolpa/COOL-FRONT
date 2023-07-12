import axios from 'axios'
import createAccomodationFormData from '../features/createAccomodationSlice'

import { baseURL } from '../baseURL'

export const createAccomodationAPI = async (
	formData: typeof createAccomodationFormData,
	providerID: string
) => {
	const URL = `${baseURL}/accomodation/${providerID}/create`

	try {
		const response = await axios.post(URL, formData, {
			headers: { 'Content-Type': 'multipart/form-data' },
		})

		return response.data
	} catch (error: any) {
		throw new Error(error.message)
	}
}
