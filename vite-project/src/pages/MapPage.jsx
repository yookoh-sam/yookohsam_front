import { useEffect, useRef, useState } from "react";
import SearchBar from "../components/Searchbar";

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
        draggable: true,
      });
      
      mapInstance.addListener('click', function onClick(e) {
        console.log("clicked", e);
        const lat = e.latLng._lat;
        const lng = e.latLng._lng;
        console.log(lat, lng);

        new window.Tmapv2.Marker({
            position: new window.Tmapv2.LatLng(lat, lng),
            map: mapInstance,
        });
      });
      setMap(mapInstance);

    }
  }, [isTmapReady]);


    return (
        <div>

            <div
            
                ref={mapRef}
                className="relative w-full h-[480px]"    
            >            <SearchBar/></div>
        </div>
    )
}

export default MapPage;