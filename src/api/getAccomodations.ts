import axios from 'axios'
import { baseURL } from '../baseURL'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

interface Accomodation {
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

export const accomodationsApi = createApi({
	reducerPath: 'accomodationsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${baseURL}`,
	}),
	endpoints: (builder) => ({
		getAcco: builder.query<Accomodation[], null>({
			query: () => 'accomodation',
		}),
		getAccoById: builder.query<Accomodation, { _id: string }>({
			query: ({ _id }) => `accomodation/${_id}`,
		}),
	}),
})

export const { useGetAccoByIdQuery, useGetAccoQuery } = accomodationsApi

export const getAccomodations = async () => {
	try {
		const response = await axios.get(`${baseURL}/accomodation`)
		return response.data // Puedes ajustar esto según la estructura de la respuesta de la API
	} catch (error: any) {
		throw new Error(error.message)
	}
}
