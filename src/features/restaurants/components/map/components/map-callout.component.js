import React from "react";

import { CompactView } from "../../../../../components/restaurant/compact-view.component";

export const MapCallout = ({ restaurant }) => (
  <CompactView isMap restaurant={restaurant} />
);
