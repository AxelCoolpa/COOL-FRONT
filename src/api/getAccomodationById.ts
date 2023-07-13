import axios from 'axios'
import { baseURL } from '../baseURL'

export const getAccomodationById = async (accomodationID: string) => {
	try {
		const response = await axios.get(`${baseURL}/accomodation/${accomodationID}`)
		return response.data
	} catch (error: any) {
		throw new Error(error.message)
	}
}
