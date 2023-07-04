import axios from 'axios'
import { baseURL } from '../baseURL'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

interface User {
	_id: string,
	username: string,
	email: string, 
}

export const userApi = createApi({
	reducerPath: 'userAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: `${baseURL}`
	}),
	endpoints: (builder) => ({
		getUsers: builder.query<User[], null>({
			query: () => 'users'
		}),
		getUserById: builder.query<User, {_id: string}>({
			query: ({_id}) => `users/${_id}`
		})
	})
})

export const getUsersAPI = async () => {
	try {
		const response = await axios(`${baseURL}/users`)
		// Aquí puedes realizar el manejo de la respuesta de la API
		// por ejemplo, validar la respuesta o extraer datos relevantes
		// y retornar cualquier resultado necesario
		return response.data // Puedes ajustar esto según la estructura de la respuesta de la API
	} catch (error: any) {
		throw new Error(error.message)
	}
}
