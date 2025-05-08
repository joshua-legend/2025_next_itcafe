"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const KakaoMap = () => {
  const [loc, setLoc] = useState({ lat: 37.492, long: 126.723 });
  const changeLoc = (lat, long) => {
    setLoc((prev) => ({ lat, long }));
  };

  const zoomIn = () => {
    const level = mapRef.current.getLevel();
    mapRef.current.setLevel(level - 1);
  };
  const zoomOut = () => {
    const level = mapRef.current.getLevel();
    mapRef.current.setLevel(level + 1);
  };

  const containerRef = useRef(null); // {current:null}
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const makeMap = () => {
    if (!containerRef.current) return;
    const options = {
      center: new kakao.maps.LatLng(loc.lat, loc.long), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    mapRef.current = new kakao.maps.Map(containerRef.current, options);
    const markerPosition = new kakao.maps.LatLng(loc.lat, loc.long);

    markerRef.current = new kakao.maps.Marker({ position: markerPosition });
    markerRef.current.setMap(mapRef.current);
  };

  useEffect(() => {
    if (mapRef.current) {
      const center = new window.kakao.maps.LatLng(loc.lat, loc.long);
      mapRef.current.setCenter(center);

      const markerPosition = new kakao.maps.LatLng(loc.lat, loc.long);
      markerRef.current = new kakao.maps.Marker({ position: markerPosition });
      markerRef.current.setMap(mapRef.current);
    }
  }, [loc]);

  return (
    <div>
      {/* onLoad script가 다운로드 완료 됐을 때 */}
      {/* autoload 스크립트의 로딩이 끝나기 전까지 홀딩 */}
      <Script onLoad={() => window.kakao.maps.load(makeMap)} src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=e62f8678cb703b1ea5e52f56beb8e7e7&autoload=false`}></Script>
      <div className="flex gap-3">
        <button onClick={() => changeLoc(37.492, 126.723)} className="p-5">
          부평점
        </button>
        <button onClick={() => changeLoc(37.554, 126.937)} className="p-5">
          신촌점
        </button>
        <button onClick={() => changeLoc(37.497, 127.028)} className="p-5">
          강남점
        </button>
      </div>
      <div ref={containerRef} style={{ height: "500px" }}></div>
      <div className="flex gap-3">
        <button onClick={() => zoomOut()} className="p-5">
          축소하기
        </button>
        <button onClick={() => zoomIn()} className="p-5">
          확대하기
        </button>
      </div>
    </div>
  );
};

export default KakaoMap;
