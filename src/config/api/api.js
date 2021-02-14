export const API_URL = "https://dogsapi.origamid.dev/json";
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
