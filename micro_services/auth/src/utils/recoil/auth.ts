import { atom, selector } from 'recoil';

import { getCookie } from '@packages/utils/api/cookies';
import request from '@packages/utils/api/axios';
import reIssueToken from '@packages/utils/api/reIssueToken';

import { IUser } from 'auth/utils/types/interface';

type AuthType = 'visitor' | 'user';

const authAtom = atom<AuthType>({
  key: 'authAtom',
  default: 'visitor',
});

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

export const authSelector = selector({
  key: 'authSelector',
  get: async () => {
    const accessToken = getCookie('accessToken');
    const refreshToken = getCookie('refreshToken');

    if (refreshToken && !accessToken) {
      await reIssueToken(refreshToken);
      const reAccessToken = getCookie('accessToken');
      const reTokenState = reAccessToken ? 'user' : 'visitor';
      return reTokenState;
    }

    const tokenState = accessToken ? 'user' : 'visitor';
    return tokenState;
  },
  set: ({ set }, newAtom) => {
    set(authAtom, newAtom as AuthType);
  },
});

export const authInfoSelector = selector({
  key: 'authInfoSelector',
  get: async ({ get }) => {
    const auth = get(authAtom);
    const state = get(authInfoAtom);
    const usersId = localStorage.getItem('usersId');

    if (auth === 'visitor' || !usersId) {
      return state;
    }

    const res = await request.get(`users/findUsers/${usersId}`);
    return res;
  },
  set: ({ set }, newInfoAtom) => {
    set(authInfoAtom, newInfoAtom as IUser);
  },
});
