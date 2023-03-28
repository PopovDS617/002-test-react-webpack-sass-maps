import axios from 'axios';
import { GET_DATA_URL } from '@src/constants/async';

export const getCoords = async () => {
  const response = await axios({
    method: 'GET',
    url: GET_DATA_URL
  });

  const { data } = response;

  return data;
};
