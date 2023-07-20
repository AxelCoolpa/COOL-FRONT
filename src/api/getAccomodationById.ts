import axios from 'axios'
import { baseURL } from '../baseURL'

export const getAccomodationById = async (accomodationID: string) => {
	try {
		console.log(accomodationID)
		const response = await axios.get(`${baseURL}/accomodation/${accomodationID}`)
		console.log(response)
		return response.data
	} catch (error: any) {
		console.log(error.message)
		throw new Error(error.message)
	}
}
