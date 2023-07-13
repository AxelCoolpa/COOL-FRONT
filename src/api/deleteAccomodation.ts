import axios from 'axios'
import { baseURL } from '../baseURL'

export const deleteAccomodationAPI = async (accomodationID: string): Promise<void> => {
	try {
		const response = await axios.delete(`${baseURL}/accomodation/${accomodationID}`)
		return response.data
	} catch (error: any) {
		throw new Error(error.message)
	}
}
