import axios from 'axios';

export const getCoords = async () => {
  const response = await axios({
    method: 'GET',
    url: 'https://express-shina.ru/vacancy/geo-state'
  });

  const { data } = response;

  return data;
};
