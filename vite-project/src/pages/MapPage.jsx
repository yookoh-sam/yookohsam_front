import { useEffect, useRef, useState } from "react";
import pinSmall from "../assets/pinsmall.svg";
import pinBig from "../assets/pinbig.svg";
import SearchBar from "../components/Searchbar";

const MapPage = () => {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);
    const [isTmapReady, setIsTmapReady] = useState(false);
    var markers = [];

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
        removeMarkers();
        console.log("clicked", e);
        const lat = e.latLng._lat;
        const lng = e.latLng._lng;
        console.log(lat, lng);

        const marker = new window.Tmapv2.Marker({
            position: new window.Tmapv2.LatLng(lat, lng),
            map: mapInstance,
            icon: pinSmall,
            iconSize: new window.Tmapv2.Size(28,28),
        });

        marker.addListener('click', function onClick() {
            removeMarkers();
            const bigMarker = new window.Tmapv2.Marker({
                position: marker.getPosition(),
                map: mapInstance,
                icon: pinBig,
                iconSize: new window.Tmapv2.Size(40,40),
            });
            markers.push(bigMarker);
        })

        markers.push(marker);
      });

      setMap(mapInstance);
      

    }
  }, [isTmapReady]);

  function removeMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
  };


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