import type { PostsResponse } from "../types/posts";
import { axiosInstance } from "./axiosInstance";

export const getPosts = async () => {
  const { data } = await axiosInstance<PostsResponse>({
    method: "GET",
    url: "/posts",
  });

  return data;
};
