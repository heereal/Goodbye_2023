import { useCallback, useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const positon = { lat: 37.26211989865687, lng: 127.0296916342736 };
const { lat, lng } = positon;

export default function useMap() {
  // * 지도 및 마커를 생성하는 함수
  const onLoadKakaoAPI = useCallback(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById('map');

      const options = {
        center: new window.kakao.maps.LatLng(lat, lng), // 지도의 중심 좌표
        level: 3, // 지도의 확대 레벨
      };

      // 지도를 표시할 div와 지도 옵션으로 지도를 생성함
      const map = new window.kakao.maps.Map(container, options);

      // 마커가 표시될 위치
      const markerPosition = new window.kakao.maps.LatLng(lat, lng);

      // 마커를 생성
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      // 마커가 지도 위에 표시되도록 설정
      marker.setMap(map);
    });
  }, []);

  //* 첫 렌더링 시 지도 및 마커 생성
  useEffect(() => {
    const mapScript = document.createElement('script');
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`;
    document.head.appendChild(mapScript);

    mapScript.addEventListener('load', onLoadKakaoAPI);

    return () => mapScript.removeEventListener('load', onLoadKakaoAPI);
  }, []);
}
