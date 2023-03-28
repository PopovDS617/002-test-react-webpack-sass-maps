import React, { useContext } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import { motion } from 'framer-motion';
import { appContext } from '@src/context/AppContext';
import './MapContainer.scss';
import icon from '@assets/baloon-for-map2.png';

export const MapContainer = () => {
  const ctx = useContext(appContext);

  const animationVariants = {
    hidden: { opacity: 0, x: 0, y: -20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={animationVariants}
      transition={{ duration: 0.8, type: 'easeInOut' }}
    >
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
            height={450}
            width={450}
            options={{
              iconLayout: 'default#image',
              iconImageHref: icon,
              iconImageSize: [38, 50]
            }}
          />
        </Map>
      </YMaps>
    </motion.div>
  );
};
