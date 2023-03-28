import React, { useState, useEffect } from 'react';

import { Badge } from '../Badge/Badge';
import { useAppContext } from '@src/context/AppContext';

import { TPickpoint, TPickpointWithID } from '@src/models/Pickpoint';
import './PickpointItem.scss';

type PickpointItemProps = {
  itemData: TPickpointWithID;
};

export const PickpointItem = (props: PickpointItemProps) => {
  const { address, budgets, latitude, longitude, id } = props.itemData;

  const ctx = useAppContext();

  const handleClickPickpoint = () => {
    ctx.setCoordsHandler(latitude, longitude);
    ctx.setCurrentPickpoint(id);
  };
  if (ctx.currentPickpoint === id) {
    console.log('yes');
  }

  return (
    <div
      className={`item-container ${
        ctx.currentPickpoint === id ? 'item-container__active' : ''
      }`}
      onClick={handleClickPickpoint}
    >
      <div className="item-container__header">{address}</div>

      <ul className="item-badgelist">
        {budgets.map(item => {
          return (
            <li key={Math.random() * 10}>
              <Badge text={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
