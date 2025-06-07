import { getTagList } from "@/api/getTagList";
import type { DropdownOption } from "@/components/ui/select";
import { capitalize } from "@/lib/capitalize";
import { useEffect, useState } from "react";

export const useTagFilter = () => {
  const [tagList, setTagList] = useState<string[] | undefined>(undefined);
  const [tagOptions, setTagOptions] = useState<DropdownOption[]>([]);

  useEffect(() => {
    const fetchTagList = async () => {
      const data = await getTagList();

      if (data) {
        setTagList(data);

        const options = data.map((tag) => ({
          value: tag,
          title: capitalize(tag),
        }));
        setTagOptions(options);
      }
    };
    fetchTagList();
  }, []);

  return {
    tagList,
    tagOptions,
  };
};
