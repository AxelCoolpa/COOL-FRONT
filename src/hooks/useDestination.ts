import { useGetDestQuery } from "../api/getDestinations";

export const useDestinations = () => {
    const { data } = useGetDestQuery(null)
    const destinos = data?.map((i) => i)
    return { destinos };
}