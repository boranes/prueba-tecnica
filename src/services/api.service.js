const call = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    if (response.headers.get("Content-Length") === "0") {
      return response.text();
    }
    return response.json();
  } catch (err) {
    return buildErrorResponse("Couldn't retrieve response from API");
  }
};

const buildUrl = (path) => {
  return `${process.env.REACT_APP_API_BASE_URL}${path}`;
};

const buildErrorResponse = (message) => {
  return Promise.reject({
    error: message,
  });
};

const APIService = {
  call,
  buildUrl,
};

export default APIService;
