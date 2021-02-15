export const API_URL = "https://dogsapi.origamid.dev/json";
export const TOKEN_DESCRIPTION = "token";
const version = "v1";

export const TOKEN_POST = (body) => {
  return {
    url: `${API_URL}/jwt-auth/${version}/token`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

export const TOKEN_VALIDATE_POST = (token) => {
  return {
    url: `${API_URL}/jwt-auth/${version}/token/validate`,
    options: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

export const USER_GET = (token) => {
  return {
    url: `${API_URL}/api/user`,
    options: {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};
