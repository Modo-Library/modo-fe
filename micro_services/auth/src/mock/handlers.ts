import { rest } from 'msw';

const testReq = (req: any, res: any, ctx: any) =>
  res(
    ctx.json({
      status: 407,
      message: '테스트 요청입니다.',
    }),
    ctx.status(407),
  );

export default function handlers() {
  return [rest.post('test', testReq)];
}
