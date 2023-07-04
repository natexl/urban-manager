import { FunctionComponent } from "react";
import { Circle, Polygon, Polyline, Rectangle } from "react-leaflet";
import { LatLngExpression, LatLngBoundsExpression } from "leaflet";

interface DrawShapesProps {
  circle?: { center: LatLngExpression; radius: number };
  polygon?: LatLngExpression[];
  polyline?: LatLngExpression[];
  rectangle?: LatLngBoundsExpression;
}

const DrawShapes: FunctionComponent<DrawShapesProps> = ({ circle, polygon, polyline, rectangle }) => {
  return (
    <>
      {circle && <Circle center={circle.center} radius={circle.radius} />}
      {polygon && <Polygon positions={polygon} />}
      {polyline && <Polyline positions={polyline} />}
      {rectangle && <Rectangle bounds={rectangle} />}
    </>
  );
};

export default DrawShapes;