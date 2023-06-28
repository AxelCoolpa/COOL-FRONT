import axios from "axios";

import { baseURL } from "../baseURL";

export const getAuthUser = async (data: AuthState)<any> => {
    try {
        const response = await axios.get(`${baseURL}/users`, data)
        return response.data
    } catch(error: any) {
		throw new Error(error.response?.data?.message || error.message)
	}
}