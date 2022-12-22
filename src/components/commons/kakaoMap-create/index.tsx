import styled from "@emotion/styled";
import { useEffect } from "react";
import { IQuery } from "../../../commons/types/generated/types";

declare const window: typeof globalThis & {
  kakao: any;
};

const Map = styled.div`
  width: 384px;
  height: 254px;
  margin: -17px 0px 30px 37px
`;

interface IKakaoMapProps {
  address: string;
  //   data: Pick<IQuery, "fetchUseditem">;
}

export default function KaKaoMap(props: IKakaoMapProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=0ffdae4bb23834370529158b7c4f1304&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.552426, 126.988761),
          level: 5,
        };

        const map = new window.kakao.maps.Map(container, options);

        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          props.address,
          //   || props.data?.fetchUseditem.useditemAddress?.address
          function (result, status) {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 마커를 생성합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">거래 위치</div>',
              });
              infowindow.open(map, marker);

              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.address]);

  return <Map id="map"></Map>;
}
