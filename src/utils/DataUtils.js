import axios from "axios";

const api = axios.create({
  //baseURL: apiUrl
  baseURL: `https://frontend-api-test-nultien.azurewebsites.net`,
});

const get = async function (url, options = {}) {
  let result = [];
  let error;
  await api.get(url, options).then(
    (res) => (result = res),
    (err) => (error = err)
  );

  if (error !== undefined) {
    throw error.response;
  }
  const dataAndStatusForGet = { data: result.data, status: result.status };
  return dataAndStatusForGet;
};

const post = async function (url, data, options = {}) {
  let result = [];
  await api.post(url, data, options).then((res) => (result = res));
  const dataAndStatusForPost = { data: result.data, status: result.status };
  console.log("iz data utilsa", dataAndStatusForPost);

  return dataAndStatusForPost;
};

const put = async function (url, data, options = {}) {
  let result = [];
  await api.put(url, data, options).then((res) => (result = res));
  const dataAndStatusForUpdate = { data: result.data, status: result.status };
  return dataAndStatusForUpdate;
};

const del = async function (url, options = {}) {
  var result = [];
  await api.delete(url, options).then((res) => (result = res));
  const dataAndStatusForDelete = { data: result.data, status: result.status };

  return dataAndStatusForDelete;
};

export default {
  get,
  post,
  put,
  del,
};
