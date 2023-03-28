import React, { PropsWithChildren, useState } from 'react';
import { appContext } from './AppContext';
import { Coords } from '@src/models/Coords';

const AppProvider = (props: PropsWithChildren) => {
  const [coords, setCoords] = useState<number[] | []>([]);
  const [currentPickpoint, setCurrentPickpoint] = useState<number | null>(null);

  const setCoordsHandler = (lat: number, lon: number) => {
    setCoords([lat, lon]);
  };

  return (
    <appContext.Provider
      value={{
        coords,
        setCoordsHandler,
        currentPickpoint,
        setCurrentPickpoint
      }}
    >
      {props.children}
    </appContext.Provider>
  );
};

export default AppProvider;
