import React, { useState } from "react";
import ListButton from "./ListButton";
import MyMapList from "./MyMapList";
import MyMarkerList from "./MyMarkerList";

const MyPage = () => {
    const [showMap, setShowMap] = useState(true);
    const [showMarker, setShowMarker] = useState(false);

    const handleMapButton = () => {
        setShowMap(true);
        setShowMarker(false);
    }
    const handleMakrerButton = () => {
        setShowMap(false);
        setShowMarker(true);
    }

    const MapButtonStyle = { backgroundColor: showMap ? 'blue' : 'gray', };
    const MarkerButtonStyle = { backgroundColor: showMarker ? 'blue' : 'gray', };


    return (
        <div>
            <ListButton
                topic='내 지도 리스트'
                handleTopic={handleMapButton}
                enable={MapButtonStyle} />
            <ListButton
                topic='내 마커 리스트'
                handleTopic={handleMakrerButton}
                enable={MarkerButtonStyle} />
            {showMap && (
                <MyMapList />
            )}
            {showMarker && (
                <MyMarkerList />
            )}
        </div>
    )
}

export default MyPage;