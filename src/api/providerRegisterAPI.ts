import axios from 'axios'
import { FormProvider } from '../features/providerRegister'

import { baseURL } from '../baseURL'

export const registerProviderAPI = async (formData: FormProvider , idUser : string) => {
	try {
		const response = await axios.post(`${baseURL}/user/${idUser}/profileProvider`, formData)
		return response.data
	} catch (error: any) {
		throw new Error(error.response?.data?.msg || error.msg)
	}
}
