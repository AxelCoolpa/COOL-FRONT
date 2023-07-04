import axios from 'axios'
import { LoginFormData } from '../features/LoginSlice'

import { baseURL } from '../baseURL'

export const loginUserAPI = async (formData: LoginFormData): Promise<void> => {
	try {
		const response = await axios.post(`${baseURL}/signIn`, formData)
		return response.data
	} catch (error: any) {
		throw new Error(error.response?.data?.message || error.message)
	}
}
