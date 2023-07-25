import Cookies, { CookieChangeOptions } from 'universal-cookie';

const cookies = new Cookies();

interface CookieCustomOptions extends CookieChangeOptions {
  expired: number;
}

export const setCookie = ({ name, value, expired }: CookieCustomOptions): void =>
  cookies.set(name, value, {
    domain: `${process.env.NODE_ENV === 'production' ? '.modolib.site' : 'localhost'}`,
    secure: true,
    path: '/',
    expires: new Date(Date.now() + expired),
  });

export const getCookie = (name: string): string | undefined => cookies.get(name);

export const removeCookie = (name: string): void => cookies.remove(name);
