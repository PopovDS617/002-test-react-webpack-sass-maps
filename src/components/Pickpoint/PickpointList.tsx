import React, { useState, useEffect } from 'react';
import { PickpointItem } from './PickpointItem/PickpointItem';

import { TPickpointListWithID } from '@src/models/Pickpoint';

import './PickpointList.scss';
import { Coords } from '@src/models/Coords';

type PickpointListProps = {
  loading: boolean;
  error: boolean;
  list: TPickpointListWithID;
};

export const PickpointList = (props: PickpointListProps) => {
  const { loading, error, list } = props;

  return (
    <div className="pickpoint-list">
      <ul>
        {list?.pickPoints &&
          !loading &&
          list.pickPoints.map(item => {
            return (
              <li key={item.id}>
                <PickpointItem itemData={item} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};
