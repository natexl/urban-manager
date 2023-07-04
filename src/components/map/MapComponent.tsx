import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useBaseLayers } from "@/hooks/map/mapBase";
import { LatLngExpression } from "leaflet";
import { useMemo, useState, useEffect } from "react";

interface MapProps {
    center: [number, number];
    zoom: number;
    children?: React.ReactNode
}

interface MapCentreProps {
    mapCentre: LatLngExpression;
}

function UpdateMapCentre(props: MapCentreProps) {
    const map = useBaseLayers();
    map.panTo(props.mapCentre);
    return null;
}



const MapComponent: React.FC<MapProps> = ({ center, zoom, children }) => {
    const [changedCoords, setChangedCoords] = useState({
        lat: 23.125178,
        lng: 113.280637,
    });

    return (
        <>
            <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} style={{height: "100%"}}>
                {/* <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                /> */}
                <UpdateMapCentre mapCentre={changedCoords}></UpdateMapCentre>
                <Marker position={[23.125178, 113.280637]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                {children}
            </MapContainer>
        </>
    )
}

export default MapComponent