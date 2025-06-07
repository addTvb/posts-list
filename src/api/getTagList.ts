import { axiosInstance } from "./axiosInstance";

export const getTagList = async () => {
  const { data } = await axiosInstance<Array<string>>({
    method: "GET",
    url: "/posts/tag-list",
  });

  return data;
};
