import React from "react";
import {type LatLngBoundsExpression} from "leaflet"
import { ImageOverlay as LeafletImageOverlay,  } from "react-leaflet";

interface ImageOverlayProps {
  url: string;
  bounds: LatLngBoundsExpression;
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({ url, bounds }) => {
  return <LeafletImageOverlay url={url} bounds={bounds} />;
};

export default ImageOverlay;