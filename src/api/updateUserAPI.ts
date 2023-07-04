import axios from 'axios'
import updateUserFormData from '../features/updateUserSlice'

import { baseURL } from '../baseURL'

export const updateUserAPI = async (
	formData: typeof updateUserFormData,
	idUser: string
) => {
	const URL = `${baseURL}/user/${idUser}/profile`

	try {
		const response = await axios.put(URL, formData, {
			headers: { 'Content-Type': 'multipart/form-data' },
		})

		return response.data
	} catch (error: any) {
		throw new Error(error.message)
	}
}
