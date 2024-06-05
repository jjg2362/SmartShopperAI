import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setCookie = (name, value, path = '/') => {
  if (value === null) {
    console.log('null value for cookie');
  }

  cookies.set(name, value, {
    path
  });
};

export const setAccessCookie = (name, value, path = '/') => {
  if (value === null) {
    console.log('null value for cookie');
  }

  cookies.set(name, value, {
    path,
    maxAge: 3600 // 1시간 쿠키 유지
  });
};

export const setRefreshCookie = (name, value, path = '/') => {
  if (value === null) {
    console.log('null value for cookie');
  }

  cookies.set(name, value, {
    path,
    maxAge: 1209600 // 이주일간 쿠키 유지
  });
};

export const getCookie = (name) => cookies.get(name);

export const removeCookie = (name) => {
  cookies.remove(name, { path: '/' });
};
