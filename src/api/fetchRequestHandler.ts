export type RequestType = {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  params?: Record<string, string>;
  body?: Record<string, unknown>;
  token?: string;
};

/** request handler
 * @param url request url
 * @param method http method type
 * @param params request parameters
 * @param body request body
 */

export const request = async ({ url, method = 'GET', params, body }: RequestType) => {
  const baseURL = 'https://docthru-be.onrender.com/';
  const queryString = params ? new URLSearchParams(params).toString() : '';
  const token = getToken();

  // fullUrl
  const fullUrl = queryString ? `${baseURL}${url}?${queryString}` : `${baseURL}${url}`;

  // options
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...(body && method !== 'GET' && { body: JSON.stringify(body) }),
  };

  try {
    const response = await fetch(fullUrl, options);

    if (!response.ok) {
      console.error(`Error: ${response.status} ${response.statusText}`);
      // 더 나은 에러 처리를 원할 경우 에러를 throw할 수 있습니다.
      // throw new Error(`Request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

const getToken = (): string | null => {
  if (typeof window === 'undefined') return null;

  const userAuth = window.localStorage.getItem('store');
  if (!userAuth) return null;

  try {
    const {
      state: { userAccessToken },
    } = JSON.parse(userAuth);
    return userAccessToken;
  } catch (error) {
    console.error('Error parsing token:', error);
    return null;
  }
};
