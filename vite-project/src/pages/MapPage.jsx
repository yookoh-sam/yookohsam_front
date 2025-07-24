import { useEffect, useRef, useState } from "react";

const MapPage = () => {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);
    const [isTmapReady, setIsTmapReady] = useState(false);

    useEffect(() => {
        const checkInterval = setInterval(() => {
            if (window.Tmapv2) {
                setIsTmapReady(true);
                clearInterval(checkInterval);
            }
        }, 100);
        return () => clearInterval(checkInterval);
    }, []);

    useEffect(() => {
    if (isTmapReady && mapRef.current) {
      const mapInstance = new window.Tmapv2.Map(mapRef.current, {
        center: new window.Tmapv2.LatLng(37.5526836958422, 126.92500844858347),
        width: "100%",
        height: "480px",
        zoom: 18,
        // scrollwheel: false,
        // zoomControl: false,
        draggable: true,
      });
      setMap(mapInstance);

    }
  }, [isTmapReady]);

    return (
        <div>
            <div
                ref={mapRef}
                className="w-full h-[480px]"    
            ></div>
        </div>
    )
}

export default MapPage;