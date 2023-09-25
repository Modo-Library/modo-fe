import { selector } from 'recoil';

import { request } from '@packages/utils/api/axios';

import { BooksList } from '../types/books';

export const getBooksList = selector({
  key: 'getBooksList',
  get: async () => {
    try {
      const paramsData = {
        startDistance: 0,
        startId: 0,
        searchingWord: '',
      };

      const params = Object.entries(paramsData)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');

      const res: BooksList[] = await request.get(`/api/v1/books/getBooksList?${params}`);
      return res;
    } catch (err) {
      console.error(err);
    }

    return [];
  },
});
