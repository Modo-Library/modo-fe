import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

import { request } from '@packages/utils/api/axios';

export async function POST(req: Request) {
  const requestJson = await req.json();

  const { code } = requestJson.data.detail.authorization;
  const res = await request.post(`${process.env.VITE_SERVER_URL}/oauth/apple?code=${code}`);

  return NextResponse.json(res);
}

// TODO : APPLE API 모듈 만들기 (NM-124)
// https://kedric-me.tistory.com/entry/Apple%EB%A1%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84web-and-other-platforms
