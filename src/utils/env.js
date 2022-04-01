const liveHost = "https://us-central1-mobile-app-2e4bb.cloudfunctions.net";

const localHost = "http://localhost:5001/mobile-app-2e4bb/us-central1";

export const isDevelopment = process.env.NODE_ENV === "development";
export const mocked = false;
export const change = true;

export const host = isDevelopment ? localHost : localHost;
