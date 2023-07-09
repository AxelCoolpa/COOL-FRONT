import axios from 'axios'
import { baseURL } from '../baseURL'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'


interface Destination {
	_id: string
	title: string
	description: string

	categories: Array<string>
	location: string
	activities: Array<string>
	galleryImage: string

	itDelete: boolean
	createAt: string
	updateAt: string
}


export const destinationApi = createApi({
	reducerPath: 'destinationAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: `${baseURL}`,
	}),
	endpoints: (builder) => ({
		getDest: builder.query<Destination[], null>({
			query: () => 'destinations',
		}),
		getDestById: builder.query<Destination, { _id: string }>({
			query: ({ _id }) => `destinarions/${_id}`,
		}),
	}),
})

export const { useGetDestByIdQuery, useGetDestQuery } = destinationApi

export const getDestinations = async () => {
	try {
		const response = await axios.get(`${baseURL}/destinations`)
		return response.data // Puedes ajustar esto según la estructura de la respuesta de la API
	} catch (error: any) {
		throw new Error(error.message)
	}
}

