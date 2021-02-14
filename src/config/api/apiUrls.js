const PATH = {
  root: "https://dogsapi.origamid.dev/json",
  version: "v1",
  jwtAuth: "jwt-auth",
  token: "token",
};

const API_URLS = {
  root: PATH.root,
  jwtAuth: `${PATH.root}/${PATH.jwtAuth}/${PATH.version}/${PATH.token}`,
};

export default API_URLS;