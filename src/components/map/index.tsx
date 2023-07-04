import MapComponent from "./MapComponent";
import ImageOverlay from "./ImageOverlay";
import VectorData from "./VectorData";
import DrawShapes from "./DrawShapes";
import { LatLngExpression } from "leaflet";
import "./map.less"

const JaMap = () => {
    const center: [number, number] = [51.505, -0.09];
    const zoom = 13;

    const imageUrl = "https://example.com/image.png";
    const imageBounds: [[number, number], [number, number]] = [
        [50.505, -29.09],
        [52.505, 29.09],
    ];

    const geoJSONData = {
        /* your GeoJSON data */
        type: "Point" as const
    };

    const circle = {
        center: [23.12517, 113.280637] as [number, number],
        radius: 50000,
    };

    const circle2 = {
        center: [24.12517, 113.280637] as [number, number],
        radius: 50000,
    };

    const polygon = [
        [51.51, -0.12],
        [51.51, -0.06],
        [51.53, -0.06],
    ] as LatLngExpression[];

    return (
        <MapComponent center={center} zoom={5}>
            {/* <ImageOverlay url={imageUrl} bounds={imageBounds} /> */}
            {/* <VectorData data={geoJSONData} /> */}
            <DrawShapes circle={circle} polygon={polygon} polyline={polygon} rectangle={imageBounds} />
            <DrawShapes circle={circle2} polygon={polygon} polyline={polygon} rectangle={imageBounds} />
        </MapComponent>
    );
}

export default JaMap