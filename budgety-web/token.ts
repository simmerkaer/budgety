let token = "";

export const getAccessToken = () => {
  console.log(token);
  return token;
};

export const setAccessToken = (accessToken: string) => {
  token = accessToken;
};
