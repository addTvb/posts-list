import { useEffect, useState } from "react";
import { getPosts } from "../api/getPosts";
import type { PostsResponse } from "../types/posts";

export const usePosts = () => {
  const [data, setData] = useState<PostsResponse | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();

      if (data) {
        setData(data);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return {
    postsData: data,
    loading,
  };
};
