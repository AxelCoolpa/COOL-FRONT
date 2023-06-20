import axios from 'axios'
import { LoginFormData } from '../features/LoginSlice'

export const loginUserAPI = async (formData: LoginFormData): Promise<void> => {
	try {
		const response = await axios.post("https://cool-backend-production.up.railway.app/api/signIn", formData)
	
	} catch (error: any) {
		throw new Error(error.response?.data?.message || error.message)
	}
}
