export const SET_CSRF_TOKEN = 'APP_SET_CSRF_TOKEN';

export const setCsrfToken = () => {
  const token = document.querySelector("meta[name='csrf-token']").content;
  return {
    type: SET_CSRF_TOKEN,
    value: token,
  };
};
