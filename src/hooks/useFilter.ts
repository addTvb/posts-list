import { useMemo } from "react";
import type { PostsResponse } from "../types/posts";
import type { Sort } from "./useFilterSelect";

export const useFilter = (
  data?: PostsResponse,
  selectedTag?: string,
  sort?: Sort | ""
) => {
  const filteredData = useMemo(() => {
    if (data) {
      if (selectedTag) {
        const posts = data.posts.filter((post) =>
          post.tags.includes(selectedTag)
        );

        return {
          ...data,
          posts,
        };
      }

      return data;
    }
  }, [data, selectedTag]);

  const sortedData = useMemo(() => {
    if (filteredData) {
      if (sort) {
        filteredData.posts.sort((post1, post2) => {
          const totalReactions1 =
            post1.reactions.dislikes + post1.reactions.likes;
          const totalReactions2 =
            post2.reactions.dislikes + post2.reactions.likes;

          if (sort === "totalReactions")
            return totalReactions2 - totalReactions1;

          return (
            post2.reactions.likes / totalReactions2 -
            post1.reactions.likes / totalReactions1
          );
        });
      }

      return filteredData;
    }
  }, [filteredData, sort]);

  return {
    result: sortedData,
  };
};
