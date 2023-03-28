import { createContext, useContext } from 'react';

type TInitialContext = {
  coords: number[] | [];
  setCoordsHandler: (lat: number, lon: number) => void;
  currentPickpoint: number | null;
  setCurrentPickpoint: (id: number) => void;
};

export const appContext = createContext<TInitialContext>({
  coords: [],
  setCoordsHandler() {
    return;
  },
  currentPickpoint: null,
  setCurrentPickpoint() {
    return;
  }
});

export const useAppContext = () => useContext(appContext);
