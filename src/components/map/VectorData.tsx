import React from "react";
import { GeoJSON, GeoJSONProps } from "react-leaflet";

const VectorData: React.FC<GeoJSONProps> = ({ data, ...restProps }) => {
  return <GeoJSON data={data} {...restProps} />;
};

export default VectorData;