const configuration = {
  loginNaverCallbackUrl: '',
  apiUrl: '',
  s3Url: ''
};

if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
  configuration.loginNaverCallbackUrl =
    process.env.REACT_APP_DEV_LOGIN_NAVER_CALLBACK_URL || '';
  configuration.apiUrl = process.env.REACT_APP_DEV_API_URL || '';
  configuration.s3Url = process.env.REACT_APP_DEV_S3_URL || '';
} else {
  configuration.loginNaverCallbackUrl =
    process.env.REACT_APP_PROD_LOGIN_NAVER_CALLBACK_URL || '';
  configuration.apiUrl = process.env.REACT_APP_PROD_API_URL || '';
  configuration.s3Url = process.env.REACT_APP_PROD_S3_URL || '';
}

export default configuration;
