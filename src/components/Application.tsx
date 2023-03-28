import React from 'react';
import { useAsync } from '@src/hooks/useAsync';

import { Header } from './Header/Header';
import { PickpointList } from './Pickpoint/PickpointList';

import { BounceLoader } from 'react-spinners';

import { getCoords } from '@src/utils/getCoords';
import { addID } from '@src/utils/addID';

import { MapContainer } from './Map/MapContainer';
import './Application.scss';

const Application = () => {
  const { loading, error, value } = useAsync(getCoords, []);

  return (
    <div className="app-container">
      <div className="top-level">
        <Header />
        {loading && (
          <div className="loading-spinner">
            <BounceLoader color="#969c9f" size={80} />
          </div>
        )}
        {error && <p>Что-то пошло не так . . .</p>}
      </div>
      {!error && !loading && (
        <div className="app-content">
          <PickpointList list={addID(value)} error={error} loading={loading} />

          <MapContainer />
        </div>
      )}
    </div>
  );
};

export default Application;
