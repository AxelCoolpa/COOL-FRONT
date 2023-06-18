import axios from "axios";
import { AuthState } from '../features/authSlice'

export const getAuthUser = async (data: AuthState)<any> => {
    try {
        const response = await axios.get('http://localhost:3000/api/users', data)
        return console.log(response.data)

    } catch(error: any) {
		throw new Error(error.response?.data?.message || error.message)
	}
}