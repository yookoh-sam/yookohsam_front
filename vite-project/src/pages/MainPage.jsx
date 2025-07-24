import { useEffect, useRef, useState } from "react";
import pinSmall from "../assets/pinsmall.svg";
import pinBig from "../assets/pinbig.svg";
import SearchBar from "../components/Searchbar";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const mapRef = useRef(null);
    const nav = useNavigate();
    const [map, setMap] = useState(null);
    const [isTmapReady, setIsTmapReady] = useState(false);
    const [lng, setLng] = useState(0);
    const [lat, setLat] = useState(0);
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
        center: new window.Tmapv2.LatLng(37.53724636276723, 126.99981896664625),
        width: "100%",
        height: "850px",
        zoom: 18,
        zoomControl:false,
        draggable: true,
      });
      
      mapInstance.addListener('click', function onClick(e) {
        removeMarkers();
        console.log("clicked", e);
        const lat = e.latLng._lat;
        const lng = e.latLng._lng;
        setLat(lat);
        setLng(lng);
        //console.log(lat, lng);
        

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
            const storeId = 1;
            nav(`/store/${storeId}`)
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
  console.log(lat, lng);

    return (
        <div>
            <div
                ref={mapRef}
                className="relative w-full h-[850px]"    
            >            
                <SearchBar />
            </div>
        </div>
    )
}

export default MainPage;