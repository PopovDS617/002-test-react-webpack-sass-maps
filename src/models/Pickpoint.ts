export type TPickpoint = {
  address: string;
  budgets: string[];
  latitude: number;
  longitude: number;
};

export type TPickpointList = {
  pickPoints: TPickpoint[];
};

export type TPickpointWithID = TPickpoint & {
  id: number;
};

export type TPickpointListWithID = {
  pickPoints: TPickpointWithID[];
};

export type TAddID = (list: TPickpointList) => TPickpointListWithID;
