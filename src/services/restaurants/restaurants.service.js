import camelize from "camelize";
import { host } from "../../utils/env";

export async function restaurantsRequest(location) {
  try {
    const res = await fetch(`${host}/placesNearby?location=${location}`);
    const response = await res.json();
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const restaurantsTransform = ({ results = [] }) => {
  const mapResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mapResults);
};
