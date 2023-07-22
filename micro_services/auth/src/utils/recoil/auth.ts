import { atom, selector } from 'recoil';

import { getCookie } from '@packages/utils/api/cookies';
import request from '@packages/utils/api/axios';

import { IUser } from 'auth/utils/types/interface';

type AuthType = 'visitor' | 'user';

const authState = atom<AuthType>({
  key: 'authState',
  default: 'visitor',
});

const authInfoState = atom<IUser>({
  key: 'authInfoState',
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
  get: ({ get }) => {
    const accessToken = getCookie('accessToken');
    const tokenState = accessToken ? 'user' : 'visitor';
    const currentState = get(authState);

    return tokenState !== currentState ? tokenState : currentState;
  },
  set: ({ set }, newState) => {
    set(authState, newState as AuthType);
  },
});

export const authInfoSelector = selector({
  key: 'authInfoSelector',
  get: async ({ get }) => {
    const state = get(authInfoState);
    const usersId = localStorage.getItem('usersId');
    const res = await request.get(`users/findUsers/${usersId}`);

    if (res) {
      return res;
    }

    return state;
  },
  set: ({ set }, newInfoState) => {
    set(authInfoState, newInfoState as IUser);
  },
});
