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

const auth = (data: any) =>
  axios({
    method: "post",
    url: `/api/auth`,
    data
  });

export { auth, with_token };
