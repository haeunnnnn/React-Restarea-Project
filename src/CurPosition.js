import React, { Component } from 'react';
const {kakao} = window;

class CurPosition extends Component{
    componentDidMount(){
        console.log("componentDidMount");
        var mapContainer = document.getElementById('map');
        var mapOption = {
            center: new kakao.maps.LatLng(37.5677463677699,126.9153946742084), //지도의 중심좌표
            level: 3
        };
        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도 생성 및 객체 리턴
 
        if(navigator.geolocation) {
            navigator.geolocation.watchPosition(function(position){
                let lat = position.coords.latitude,
                    lon = position.coords.longitude;
                
                console.log(lat, lon);

                map.setCenter(new kakao.maps.LatLng(lat, lon));

                console.log(lat,lon);

                var markerPosition  = new kakao.maps.LatLng(lat, lon); 
                var marker = new kakao.maps.Marker({
                    position:markerPosition,
                });
                marker.setMap(map);
                
            });
        } else{
            let locPosition = new kakao.maps.LatLng(37.5677463677699,126.9153946742084);
            map.setCenter(locPosition);
        }
    }
        
    render(){
        return (
            <div className='CurPosition'>
               <div id="map"></div>
            </div>
        )
    }

}

export default CurPosition;