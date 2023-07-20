import axios from 'axios'
import { baseURL } from '../baseURL'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { useDestinations } from '../hooks/useDestination'
import { useSelectedDestination } from '../hooks/useSelectedDestination'


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

// api/destinations?destination=64a6003d0594ff547598e3af&startDate=2023-08-1&endDate=2023-09-20&categories=cualquier
// const _id = '64a821577f4cc93a2aac05e8'

/* const { destinationsId } = useSelectedDestination()
const _id = destinationsId
console.log(_id); */
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
			query: ({ _id }) => `destinations?destination=${_id}`,
		}),
		
	}),
}) 	


export const { useGetDestByIdQuery, useGetDestQuery } = destinationApi


export const getDestinations = async () => {
	try {
		const response = await axios.get(`${baseURL}/destinations`)
		return response.data 
	} catch (error: any) {
		throw new Error(error.message)
	}
}
