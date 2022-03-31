import React from "react";

import { CompactView } from "../restaurants/compact-view.component";

export const MapCallout = ({ restaurant }) => (
  <CompactView isMap restaurant={restaurant} />
);
