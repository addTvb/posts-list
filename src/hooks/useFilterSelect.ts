import { useState } from "react";

export type Sort = "totalReactions" | "reactionRatio";

export const useFilterSelect = () => {
  const [sort, setSort] = useState<Sort | "">("");
  const [selectedTag, setSelectedTag] = useState<string | undefined>(undefined);

  const handleTagChange = (tag: string) => {
    setSelectedTag(tag);
  };
  const handleReset = () => {
    setSelectedTag("");
    setSort("");
  };

  const handleChangeSort = (sort: Sort) => {
    setSort(sort);
  };

  return {
    sort,
    selectedTag,
    handleChangeSort,
    handleTagChange,
    handleReset,
  };
};
