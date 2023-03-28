import React, { useContext } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import { appContext } from '@src/context/AppContext';
import './MapContainer.scss';
import icon from '@assets/baloon-for-map2.png';

export const MapContainer = () => {
  const ctx = useContext(appContext);

  return (
    <YMaps>
      <Map
        defaultState={{ center: [56.8, 60.6], zoom: 9 }}
        state={{
          center: ctx.coords.length !== 0 ? ctx.coords : [56.8, 60.6],
          zoom: ctx.coords.length !== 0 ? 15 : 9
        }}
        className="map-container"
      >
        <Placemark
          geometry={ctx.coords}
          options={{
            iconLayout: 'default#image',
            iconImageHref: icon,
            iconImageSize: [38, 50]
          }}
        />
      </Map>
    </YMaps>
  );
};
