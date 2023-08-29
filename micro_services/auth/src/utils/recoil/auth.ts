import { atom, selector } from 'recoil';

import { getCookie } from '@packages/utils/api/cookies';
import request from '@packages/utils/api/axios';

import { IUser } from 'auth/utils/types/interface';

const authInfoAtom = atom<IUser>({
  key: 'authInfoAtom',
  default: {
    usersId: '',
    nickname: '',
    reviewScore: 0.0,
    reviewCount: 0,
    rentingCount: 0,
    returningCount: 0,
    buyCount: 0,
    sellCount: 0,
  },
});

export const authInfoSelector = selector({
  key: 'authInfoSelector',
  get: async ({ get }) => {
    const authInfo = get(authInfoAtom);
    const accessToken = getCookie('accessToken');
    const refreshToken = getCookie('refreshToken');

    if (!accessToken && !refreshToken) {
      return authInfo;
    }

    if (authInfo.usersId === '') {
      const usersId = getCookie('usersId');
      const res: IUser = await request.get(`v1/users/findUsers/${usersId}`);
      return res;
    }

    return authInfo;
  },
  set: ({ set }, newValue) => {
    set(authInfoAtom, newValue as IUser);
  },
});
