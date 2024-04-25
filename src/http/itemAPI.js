import { $authHost, $host } from "./index.js";

export const createType = async (type) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

export const createItem = async (item) => {
  const { data } = await $authHost.post("api/item", item);
  return data;
};

export const fetchItems = async () => {
  const { data } = await $host.get("api/device");
  return data;
};

export const fetchOneItem = async (id) => {
  const { data } = await $host.get("api/device/" + id);
  return data;
};
