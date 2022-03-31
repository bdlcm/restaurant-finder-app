import camelize from "camelize";
import { host, mocked } from "../../utils/env";

export const locationRequest = async (searchTerm) => {
  try {
    const res = await fetch(
      `${host}/geocode?city=${searchTerm}&mock=${mocked}`
    );
    const response = await res.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
