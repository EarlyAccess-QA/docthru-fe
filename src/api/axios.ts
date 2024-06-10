import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.docthru.store',
});

const getUserAuth = () => {
  const userAuth = window.localStorage.getItem('store');
  return userAuth ? JSON.parse(userAuth) : null;
};

instance.interceptors.request.use(
  (config) => {
    const userAuth = getUserAuth();

    if (!userAuth) {
      console.log('request start', config);
      return config;
    }

    const {
      state: { userAccessToken, userRefreshToken },
    } = userAuth;

    config.headers.Authorization = `${userAccessToken}`;
    config.headers['Authorization-refresh'] = `${userRefreshToken}`;

    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    const handleUnauthorizedError = async () => {
      const originalRequest = config;
      const userAuth = getUserAuth();

      if (userAuth) {
        const {
          state: { userAccessToken, userRefreshToken },
        } = userAuth;
        const { data } = await instance.post('/reissue', {
          accessToken: userAccessToken,
          refreshToken: userRefreshToken,
        });

        const { accessToken: newAccessToken } = data;
        userAuth.state.userAccessToken = newAccessToken;
        window.localStorage.setItem('store', JSON.stringify(userAuth));

        originalRequest.headers.Authorization = `${newAccessToken}`;

        return axios(originalRequest);
      }
    };

    const handleForbiddenError = () => {
      window.sessionStorage.setItem('errorMessage', error.response.data.message);
      window.localStorage.removeItem('store');
      window.location.replace('/NoAccess');
    };

    const handleBadRequestError = () => {
      // 추후 바뀔 예정
      if (['JWT 토큰이 없습니다.', '만료된 JWT 토큰입니다.'].includes(error.response.data.message)) {
        window.sessionStorage.setItem('errorMessage', error.response.data.message);
        window.localStorage.removeItem('store');
        window.location.replace('/NoAccess');
      }
    };

    switch (status) {
      case 401:
        return handleUnauthorizedError();
      case 403:
        return handleForbiddenError();
      case 400:
        return handleBadRequestError();
      default:
        return Promise.reject(error);
    }
  }
);

export default instance;
