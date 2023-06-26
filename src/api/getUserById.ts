import axios from 'axios'
import { baseURL } from '../baseURL'

export const getUserByIdAPI = async (userID: string) => {
	try {
		const response = await axios(`${baseURL}/user/${userID}`)
		return response.data
	} catch (error: any) {
		throw new Error(error.message)
	}
}
