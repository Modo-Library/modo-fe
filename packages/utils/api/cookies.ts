import Cookies, { CookieChangeOptions } from 'universal-cookie';

const cookies = new Cookies();

export const setCookie = ({ name, value, options }: CookieChangeOptions): void =>
  cookies.set(name, value, options);

export const getCookie = (name: string): string | undefined => cookies.get(name);

export const removeCookie = (name: string): void => cookies.remove(name);
