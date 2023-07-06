import React, { useEffect } from "react";
import getUserLocation from "../../function/getUserLocation.js"

const { kakao } = window;

const KakaoMap = () => {
    
    useEffect(() => {
        getUserLocation()
            .then(location => {
                const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
                const options = { //지도를 생성할 때 필요한 기본 옵션
                    center: new kakao.maps.LatLng(location.latitude, location.longitude), //사용자 중심좌표.
                    level: 3 //지도의 레벨(확대, 축소 정도)
                };
                const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
            })
            .catch(error => {
                const container = document.getElementById('map');
                const options = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667), //기본 중심좌표.
                    level: 3
                };
                const map = new kakao.maps.Map(container, options);
            });
    }, []);
    
   /*
    useEffect(() => {
        var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };

        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    }, [])
    */
    return (
        <div
            id="map"
            style={{ width: '500px', height: '500px' }}
        ></div>
    )
}


export default KakaoMap;