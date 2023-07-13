import axios from 'axios'
import updateAccomodationFormData from '../features/updateAccomodationSlice'

import { baseURL } from '../baseURL'

export const updateAccomodationAPI = async (
	formData: typeof updateAccomodationFormData,
	providerID: string,
	accomodationID: string
) => {
	const URL = `${baseURL}/accomodation/${providerID}/update/${accomodationID}`

	try {
		const response = await axios.put(URL, formData, {
			headers: { 'Content-Type': 'multipart/form-data' },
		})

		return response.data
	} catch (error: any) {
		throw new Error(error.message)
	}
}
