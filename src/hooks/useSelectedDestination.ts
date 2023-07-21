import { useGetDestQuery } from "../api/getDestinations"

export const useSelectedDestination = () => {
    const { data } = useGetDestQuery(null)
    const destinationsId = data?.find((destination) => destination._id)
    return { destinationsId }
}