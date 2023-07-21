import { useGetDestQuery } from "../api/getDestinations";

export const useAllActivities = () => {
    const { data } = useGetDestQuery(null)
    const allActivities = data?.map((i)=>i.activities)

    let activitiesArray: any[] = [];

  if (allActivities) {
    allActivities?.forEach((activities) => {
      if (Array.isArray(activities)) {
        activities.forEach((activity) => {
          if (typeof activity === "object" && activity !== null) {
            activitiesArray.push({
              title: activity.title,
              _id: activity._id,
              description: activity.description,
              location: activity.location,
              galleryImage: activity.galleryImage,
            });
          }
        });
      }
    });
  }
    return { activitiesArray }
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