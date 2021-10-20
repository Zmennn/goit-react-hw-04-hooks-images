import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '23012527-abace86bcdc7661bfd5472938';

export function request(page, searchRequest) {
  const url = `${BASE_URL}?key=${KEY}&per_page=12&page=${page}&q=${searchRequest}`;
  return axios.get(url);
}
