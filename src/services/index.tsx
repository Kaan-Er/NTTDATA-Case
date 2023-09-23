const options = {
  baseUrl: 'https://honey-badgers-ecommerce.glitch.me',
  rootPath: '/',
  userAgent: 'Test Mobile App',
};

const POST = 'POST';
const PUT = 'PUT';
const GET = 'GET';
const DELETE = 'DELETE';

const send = async (
  endpoint: string,
  params: string,
  method: string,
  data: any,
  withoutToken?: boolean,
) => {
  let uri = options.baseUrl + options.rootPath + endpoint + params;
  var formBody: Array<any> | string = [];
  for (var property in data) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  const response = await fetch(uri, {
    method,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'User-Agent': options.userAgent,
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};

const methods = {
  post: (
    endpoint: string,
    params: string,
    data: any,
    withoutToken?: boolean,
  ) => {
    return send(endpoint, params, POST, data, withoutToken);
  },
  get: (
    endpoint: string,
    params: string,
    data?: any,
    withoutToken?: boolean,
  ) => {
    return send(endpoint, params, GET, data, withoutToken);
  },
  put: (
    endpoint: string,
    params: string,
    data: any,
    withoutToken?: boolean,
  ) => {
    return send(endpoint, params, PUT, data, withoutToken);
  },
  del: (
    endpoint: string,
    params: string,
    data: any,
    withoutToken?: boolean,
  ) => {
    return send(endpoint, params, DELETE, data, withoutToken);
  },
};

export const {post, get, put, del} = methods;
