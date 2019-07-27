import axios from "axios";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common.Accept = "application/json";

const with_token = (token: any, props: any) => {
  return axios({
    headers: {
      Authorization: `Bearer ${token}`
    },
    ...props
  });
};

const mockResponse = {
  "result": {
      "expires_in": 3600,
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imxlc3MiLCJpYXQiOjE1NjQyMjI3MTIsImV4cCI6MTU2NDIyNjMxMn0.LsGhk3qigqSW0y-S5aCBXoI1mMwEPa9gZG_VvSH8prg"
  },
  "error": "",
  "id": "111"
};

// const auth = (data: any) => axios({ method: 'post', url: `${CONFIG.API_URL}/api/auth`, data });
const auth = (data: any) => mockResponse;
/*
const auth = (data: any) =>
  axios({
    method: "post",
    url: `/api/auth`,
    data
  });
*/
export { auth, with_token };
