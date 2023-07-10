import axios from 'axios'
import { baseURL } from '../baseURL'

export const deleteUserAPI = async (userID: string): Promise<void> => {
	try {
		const response = await axios.delete(`${baseURL}/user/${userID}`)
		return response.data
	} catch (error: any) {
		throw new Error(error.message)
	}
}
