import React from "react";

import { CompactView } from "../restaurants/components/compact-view.component";

export const MapCallout = ({ restaurant }) => (
  <CompactView isMap restaurant={restaurant} />
);
