import { useGetDestQuery } from "../api/getDestinations";

export const useAllActivities = () => {
    const { data } = useGetDestQuery(null)
    const allActivities = data?.map((i)=>i.activities)

    const activities = allActivities?.map((i)=>i)
    const activity = activities?.map((i) => i.forEach((a)=>{
        return a
    }))
    return { activity, allActivities }
/* 
    if (allActivities) {
        allActivities?.forEach((activities) => {
          activities.forEach((activity) => {
            return {activity}
          });
          return { activities }
        });
      } */
}