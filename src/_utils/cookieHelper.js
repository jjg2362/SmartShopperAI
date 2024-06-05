import {
  removeCookie,
  setCookie,
  getCookie,
  setAccessCookie,
  setRefreshCookie
} from './cookie';

const PERSONAL__TOKEN = 'personal.accessToken';
const PERSONAL__REFRESH_TOKEN = 'personal.refreshToken';
const PERSONAL__NAVER_TOKEN = 'personal.naverAccessToken';

export const setAccessTokenCookie = (accessToken) => {
  setAccessCookie(PERSONAL__TOKEN, accessToken);
};
export const setRefreshTokenCookie = (refreshToken) => {
  setRefreshCookie(PERSONAL__REFRESH_TOKEN, refreshToken);
};
export const setNaverAccessTokenCookie = (naverAccessToken) => {
  setCookie(PERSONAL__NAVER_TOKEN, naverAccessToken);
};

export const getAccessToken = () => getCookie(PERSONAL__TOKEN);
export const getRefreshToken = () => getCookie(PERSONAL__REFRESH_TOKEN);
export const getNaverAccessToken = () => getCookie(PERSONAL__NAVER_TOKEN);

export const removeUserCookie = () => {
  removeCookie(PERSONAL__TOKEN);
  removeCookie(PERSONAL__REFRESH_TOKEN);
  removeCookie(PERSONAL__NAVER_TOKEN);
};
