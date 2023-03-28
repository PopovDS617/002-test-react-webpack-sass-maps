import {
  TAddID,
  TPickpointWithID,
  TPickpointListWithID,
  TPickpointList
} from '@src/models/Pickpoint';

export const addID: TAddID = (list: TPickpointList): TPickpointListWithID => {
  const withID: TPickpointWithID[] = list.pickPoints.map(item => {
    return { ...item, id: Math.random() * 10 };
  });

  return { pickPoints: withID };
};
