import { $authHost, $host } from "./index.js";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

export const createItem = async (item) => {
  const { data } = await $authHost.post("api/device", item);
  return data;
};

export const fetchItems = async (typeId, page, limit = 5) => {
  const { data } = await $host.get("api/device", {
    params: {
      typeId,
      page,
      limit,
    },
  });
  return data;
};

export const fetchOneItem = async (id) => {
  const { data } = await $host.get("api/device/" + id);
  return data;
};
